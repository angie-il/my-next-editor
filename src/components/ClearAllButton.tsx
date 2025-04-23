'use client';

import { Button } from "./ui/button";
import { useEditor } from "tldraw";

const ClearAllButton = () => {
    const editor = useEditor();

    const handleClear = () => {
        const shapes = editor.getCurrentPageShapes();
        if (shapes.length === 0) return;

        editor.deleteShapes(shapes.map((shape) => shape.id));
    };

    return (
        <Button
            onClick={handleClear}
            variant="destructive"
            className="ml-2 cursor pointer"
        >
            Delete All
        </Button>
    );

};

export default ClearAllButton;