'use client';

import { useEffect, useState, useRef } from 'react';
import {
    type Editor, Tldraw, loadSnapshot, type TLEditorSnapshot, getSnapshot
} from 'tldraw';
import 'tldraw/tldraw.css';
import { api } from '~/trpc/react';
import ModifyButton from '~/components/ModifyButton';
import ClearAllButton from '~/components/ClearAllButton';
import Link from 'next/link';
import useDebounce from '~/lib/hooks/useDebounce';

const EditorPage = () => {
    const [editor, setEditor] = useState<Editor | null>(null);
    const [isReady, setIsReady] = useState(false);
    const [snapshot, setSnapshot] = useState<TLEditorSnapshot | null>(null);
    const debouncedSnapshot = useDebounce(snapshot, 1000);
    const updateSnapshot = api.document.updateDocument.useMutation();
    const lastHashRef = useRef<string | null>(null);

    const { data: savedData, isSuccess, isLoading, isError } = api.document.getDocument.useQuery();

    const handleMount = (editorInstance: Editor) => {
        setEditor(editorInstance);
    };

    useEffect(() => {
        if (!editor || !isSuccess) return;

        if (savedData && Object.keys(savedData).length > 0) {
            loadSnapshot(editor.store, savedData);
            console.log("Loaded snapshot from API");
        } else {
            const local = localStorage.getItem("snapshot");
            if (local) {
                try {
                    const parsed = JSON.parse(local) as TLEditorSnapshot;
                    loadSnapshot(editor.store, parsed);
                    console.log("Loaded snapshot from localStorage");
                } catch (err) {
                    console.error("Failed to load snapshot", err);
                }
            }
        }

        setIsReady(true);
    }, [editor, savedData, isSuccess]);

    useEffect(() => {
        if (!editor || !isReady) return;

        const cleanup = editor.store.listen(() => {
            const next = getSnapshot(editor.store);
            const nextHash = JSON.stringify(next);

            if (nextHash !== lastHashRef.current) {
                lastHashRef.current = nextHash;
                setSnapshot(next);
            }
        }, { source: 'user', scope: 'document' });

        return () => cleanup();
    }, [editor, isReady]);


    useEffect(() => {
        if (!debouncedSnapshot) return;

        const currentHash = JSON.stringify(debouncedSnapshot);

        if (currentHash === lastHashRef.current) return;
        lastHashRef.current = currentHash;


        localStorage.setItem("snapshot", JSON.stringify(debouncedSnapshot));
        updateSnapshot.mutate(debouncedSnapshot);
        console.log("Snapshot saved (debounced)");
    }, [debouncedSnapshot, updateSnapshot]);

    if (isLoading) {
        return (
            <main className="h-screen flex items-center justify-center">
                <p className="text-gray-600 text-lg">Loading your editor...</p>
            </main>
        );
    };

    if (isError) {
        return (
            <main className="h-screen flex items-center justify-center">
                <p className="text-red-600 text-lg">Failed to load snapshot from server.</p>
            </main>
        );
    }



    return (
        <main className="h-screen w-full flex flex-col">
            <div className="p-4 border-b">
                <h1 className="text-lg font-semibold">
                    <Link href="/" className="hover:underline hover:text-blue-600">
                        My Next Editor
                    </Link>
                </h1>
            </div>

            <div className="flex-1 relative">
                <Tldraw onMount={handleMount}>
                    <div className="absolute left-1/3 -translate-x-1/2 z-50">
                        <ModifyButton />
                        <ClearAllButton />
                    </div>
                </Tldraw>
            </div>
        </main>
    );
};

export default EditorPage;
