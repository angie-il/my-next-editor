'use client';

import { Button } from "./ui/button";
import { getSnapshot, useEditor } from "tldraw";
import type { TLGeoShape } from 'tldraw';

const ModifyButton = () => {
    const editor = useEditor();

    const handleClick = () => {
        const snapshot = getSnapshot(editor.store);
        // console.log("Snapshot at click: ", snapshot);
        const shapes = editor.getCurrentPageShapes();
        if (shapes.length === 0) return;

        const shape = shapes[0];

        if (shape?.type === 'geo') {
            const geoShape = shape as TLGeoShape & { props: { w: number; h: number; }; };

            editor.updateShapes([
                {
                    id: geoShape.id,
                    type: geoShape.type,
                    x: geoShape.x + 50,
                    y: geoShape.y,
                    props: {
                        ...geoShape.props,
                        w: geoShape.props.w + 50,
                    },
                },
            ]);
        }
    };

    return (
        <Button onClick={handleClick} variant="secondary" className="cursor-pointer"> Modify Shape</Button>
    );
};


export default ModifyButton;