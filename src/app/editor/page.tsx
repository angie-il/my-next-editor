'use client';

import { Tldraw, getSnapshot, loadSnapshot, type Editor } from 'tldraw';
import 'tldraw/tldraw.css';
import ModifyButton from '~/components/ModifyButton';
import { api } from '~/trpc/react';
import Link from 'next/link';
import { useEffect } from 'react';

const EditorPage = () => {
    const { data: savedSnapshot, isSuccess } = api.document.getDocument.useQuery();

    useEffect(() => {
        if (isSuccess && savedSnapshot) {
            console.log("Loaded snapshot: ", savedSnapshot);
        }
    }, [isSuccess, savedSnapshot]);

    const handleMount = (editor: Editor) => {
        const snapshot = getSnapshot(editor.store);
        console.log("Snapshot on mount: ", snapshot);
    };

    return (
        <main className="h-screen w-full flex flex-col">
            <div className="p-4 border-b">
                <h1 className="text-lg font-semibold">
                    <Link href="/" className="hover:underline hover:text-blue-600">My Next Editor</Link>
                </h1>
            </div>

            <div className="flex-1 relative">
                <Tldraw onMount={handleMount}>
                    <div className="absolute left-1/3 -translate-x-1/2 z-50">
                        <ModifyButton />
                    </div>
                </Tldraw>
            </div>
        </main>
    );
};

export default EditorPage;