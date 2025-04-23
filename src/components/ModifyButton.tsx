'use client';

import { Button } from "./ui/button";
import { useEditor } from "tldraw";
import type { TLGeoShape } from 'tldraw';

const ModifyButton = () => {
    const editor = useEditor();

    const handleClick = () => {
        const shapes = editor.getCurrentPageShapes();
        if (shapes.length === 0) return;

        const geoShape = shapes.find((shape) => shape.type === "geo") as TLGeoShape || undefined;

        if (!geoShape) {
            console.log("No shapes found to modify.");
            return;
        }

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
    };


    return (
        <Button onClick={handleClick} variant="secondary" className="cursor-pointer"> Modify Shape</Button>
    );
};


export default ModifyButton;