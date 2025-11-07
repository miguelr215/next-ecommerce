'use client'
import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
    const pathname = usePathname();

    return (
        <div className='hidden md:inline-flex md:justify-center w-1/3 gap-7 text-sm capitalize font-semibold text-shop-light'>
            {headerData?.map((item) => (
                <Link key={item?.title} href={item?.href} className={`relative group hover:text-bt-yellow hoverEffect ${pathname === item?.href && 'text-bt-yellow'}`}>
                    {item?.title}
                    <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-bt-yellow group-hover:w-1/2 hoverEffect group-hover:left-0 ${pathname === item?.href && 'w-1/2'}`} />
                    <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-bt-yellow group-hover:w-1/2 hoverEffect group-hover:right-0 ${pathname === item?.href && 'w-1/2'}`} />
                </Link>
            ))}
        </div>
    )
}

export default HeaderMenu