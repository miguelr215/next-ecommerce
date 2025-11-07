import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
    return (
        <div className={cn("inline-block max-w-[125px]", className)}>
            <Link href="/">
                <Image
                    src="https://www.boundtree.com/medias/boundtree-logo.png?context=bWFzdGVyfGltYWdlc3w2NzA5fGltYWdlL3BuZ3xpbWFnZXMvaGMyL2hiMi84OTk0NzI1MDAzMjk0LnBuZ3w1NWI4ZTc3NTliZDgxZDAyOTVkNTZmYWNjZDUxMjNkNGQ4N2Y0MDM2ODA5YWUzYmE1YTc5NjJmZWFhMGU4NmFh"
                    alt="Logo"
                    width={125}
                    height={125}
                />
            </Link>
        </div>
    )
}

export default Logo