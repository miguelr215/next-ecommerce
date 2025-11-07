'use client'
import Link from 'next/link'
import React, { FC } from 'react'
import Logo from './Logo'
import { X } from 'lucide-react'
import { headerData } from '@/constants/data'
import { usePathname } from 'next/navigation'
import SocialMedia from './SocialMedia'

interface MobileSideMenuProps {
    isOpen: boolean,
    onClose: () => void
}

const MobileSideMenu: FC<MobileSideMenuProps> = ({ isOpen, onClose }) => {
    const pathname = usePathname();

    return (
        <div className={`fixed inset-y-0 h-screen left-0 z-40 w-full bg-black/50 shadow-xl ${isOpen ? "translate-x-0" : "-translate-x-full"} hoverEffect`} onClick={onClose}>
            <div className='bg-bt-blue min-w-72 max-w-96 h-screen p-10 flex flex-col gap-10 z-50'>
                <div className='flex items-center justify-between gap-5'>
                    <Logo />
                    <X onClick={onClose} className='text-shop-light hover:text-bt-yellow hoverEffect' aria-label='close' />
                </div>
                <div className='text-shop-light flex flex-col gap-6'>
                    {headerData?.map((item) => (
                        <Link key={item?.title} href={item?.href} className={`hover:text-bt-yellow hoverEffect ${pathname === item?.href && 'text-bt-yellow'}`}>
                            {item?.title}
                        </Link>
                    ))}
                </div>
                <SocialMedia />
            </div>
        </div>
    )
}

export default MobileSideMenu