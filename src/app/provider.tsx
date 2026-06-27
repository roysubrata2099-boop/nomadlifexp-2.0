"use client";

import React, { useEffect, useState } from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [mounted, setMounted] = useState(false);

    // Delays rendering until the client DOM is fully interactive
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="min-h-screen bg-[#050505]" />;
    }

    return <>{children}</>;
}