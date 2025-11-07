'use client'
import { AlignLeft } from 'lucide-react'
import React, { useState } from 'react'
import MobileSideMenu from './MobileSideMenu'

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <>
            <button className='cursor-pointer md:hidden' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <AlignLeft className='text-shop-light hover:text-bt-yellow' />
            </button>
            <div className='md:hidden'>
                <MobileSideMenu isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            </div>
        </>
    )
}

export default MobileMenu