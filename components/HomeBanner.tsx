import React from 'react'
import Title from './ui/title'
import Image from 'next/image'
import { banner_1 } from '@/images'
import Link from 'next/link'

const HomeBanner = () => {
    return (
        <div className='pt-8 pb-0 md:py-0 bg-shop-light-pink rounded-lg px-10 lg:px-24 flex flex-col md:flex-row items-center justify-between'>
            <div>
                <Title className='mb-5'>
                    Grab up to 50% off on <br />
                    Selected headphones
                </Title>
                <Link href={"/shop"} className='bg-shop-dark-green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop-dark-green hoverEffects'>Buy Now</Link>
            </div>
            <div>
                <Image src={banner_1} alt='woman with headphones' className='w-full sm:w-96' />
            </div>
        </div>
    )
}

export default HomeBanner