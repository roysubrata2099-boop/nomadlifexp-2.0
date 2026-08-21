"use client";

import { useEffect } from "react";

export default function ClientSiteProtection() {
    useEffect(() => {
        const handleContextMenu = (event: MouseEvent): void => {
            event.preventDefault();
        };

        const handleSelectStart = (event: Event): void => {
            event.preventDefault();
        };

        const handleCopy = (event: Event): void => {
            event.preventDefault();
        };

        const handleDragStart = (event: Event): void => {
            event.preventDefault();
        };

        const handleKeyDown = (event: KeyboardEvent): void => {
            const blockedShortcut =
                event.key === "F12" ||
                (event.ctrlKey &&
                    event.shiftKey &&
                    ["I", "J", "C", "K"].includes(event.key.toUpperCase())) ||
                (event.ctrlKey &&
                    ["U", "S", "P"].includes(event.key.toUpperCase()));

            if (blockedShortcut) {
                event.preventDefault();
            }
        };

        document.addEventListener("contextmenu", handleContextMenu);
        document.addEventListener("selectstart", handleSelectStart);
        document.addEventListener("copy", handleCopy);
        document.addEventListener("dragstart", handleDragStart);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("contextmenu", handleContextMenu);
            document.removeEventListener("selectstart", handleSelectStart);
            document.removeEventListener("copy", handleCopy);
            document.removeEventListener("dragstart", handleDragStart);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return null;
}
