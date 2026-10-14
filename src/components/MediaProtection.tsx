"use client";

import { useEffect } from "react";

export default function MediaProtection() {
    useEffect(() => {
        const handleContextMenu = (event: MouseEvent) => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            if (target.closest("img, video, picture")) {
                event.preventDefault();
            }
        };

        const handleDragStart = (event: DragEvent) => {
            const target = event.target;

            if (!(target instanceof Element)) return;

            if (target.closest("img, video, picture")) {
                event.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("dragstart", handleDragStart);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("dragstart", handleDragStart);
        };
    }, []);

    return null;
}
