import React from 'react'
import Container from './Container'
import FooterTop from './FooterTop'
import Logo from './Logo'
import SubText from './ui/subText'
import SocialMedia from './SocialMedia'
import SubTitle from './ui/subTitle'
import { categoriesData, quickLinksData } from '@/constants/data'
import Link from 'next/link'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <footer className='bg-bt-blue'>
            <Container>
                <FooterTop />
                <div className='py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='space-y-3'>
                        <Logo />
                        <SubText className='text-shop-light text-sm md:text-base'>
                            Discover curated collections, blending style and comfort to elevate your experiences.
                        </SubText>
                        <SocialMedia />
                    </div>
                    <div>
                        <SubTitle className='text-shop-light mb-0.5'>Quick Links</SubTitle>
                        <ul className='space-y-1'>
                            {quickLinksData?.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-400 hover:text-shop-light hoverEffect font-medium">{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <SubTitle className='text-shop-light mb-0.5'>Categories</SubTitle>
                        <ul className='space-y-1'>
                            {categoriesData?.map((category, index) => (
                                <li key={index}>
                                    <Link href={`/category/${category.href}`} className="text-gray-400 hover:text-shop-light hoverEffect font-medium">{category.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <SubTitle className='text-shop-light mb-0.5'>Newsletter</SubTitle>
                        <SubText className='text-shop-light text-sm md:text-base mb-0.5'>Subscribe to our newsletter to receive updates and exclusive offers.</SubText>
                        <form className='space-y-2'>
                            <Input placeholder='Enter your email' type='email' required className='text-shop-light' />
                            <Button className='w-full border border-transparent hover:border-bt-yellow hover:bg-bt-blue hover:text-bt-yellow hoverEffect'>Subscribe</Button>
                        </form>
                    </div>
                </div>
                <div className="py-6 border-t text-center text-sm text-shop-light">
                    <div>
                        © {new Date().getFullYear()} <Logo className="max-w-[75px]" />. All
                        rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer