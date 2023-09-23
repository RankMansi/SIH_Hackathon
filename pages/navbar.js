import React, { useState } from 'react';
import RouteIDContent from './content';

export default function NavBar() {
    const handleLogout = () => {
        // Handle logout logic here
    };

    return (
        <div className="relative">
            <div className="fixed top-0 left-0 h-full w-full z-20 transition-opacity"></div>

            <div className="fixed top-0 right-0 p-4 z-50">
                <button className="border border-black border-4 text-black px-3 py-1 items-center text-center rounded-lg text-2xl font-bold" onClick={handleLogout}>
                    Logout
                </button>
            </div>
            <RouteIDContent />
        </div>
    );
}

