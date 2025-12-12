import React from 'react';

export default function Loading() {
    return (
        <div className="min-h-screen bg-[#051C2C] flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
        </div>
    );
}
