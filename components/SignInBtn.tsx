import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const SignInBtn = () => {
    return (
        <SignInButton mode='modal'>
            <button className='text-sm cursor-pointer text-shop-light hover:text-bt-yellow'>Login</button>
        </SignInButton>
    )
}

export default SignInBtn