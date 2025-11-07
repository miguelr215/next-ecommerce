import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = () => {
    return (
        <Link href={"/favorites"} className='group relative'>
            <Heart className='navAdminIcon hoverEffect' />
            <span className='navAdminIconNum'>0</span>
        </Link>
    )
}

export default FavoriteButton