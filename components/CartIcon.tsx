import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CartIcon = () => {
    return (
        <Link href={"/cart"} className='group relative'>
            <ShoppingCart className='navAdminIcon hoverEffect' />
            <span className='navAdminIconNum'>0</span>
        </Link>
    )
}

export default CartIcon