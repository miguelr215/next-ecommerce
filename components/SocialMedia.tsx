import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const socialLinks = [
    {
        title: "YouTube",
        href: "http://youtube.com",
        icon: <Youtube />
    },
    {
        title: "GitHub",
        href: "http://github.com",
        icon: <Github />
    },
    {
        title: "LinkedIn",
        href: "http://linkedin.com",
        icon: <Linkedin />
    },
    {
        title: "Facebook",
        href: "http://facebook.com",
        icon: <Facebook />
    },
    {
        title: "Instagram",
        href: "http://instagram.com",
        icon: <Instagram />
    },
]

const SocialMedia = () => {
    return (
        <div className='flex items-center gap-5 text-shop-light'>
            {socialLinks?.map((link) => (
                <Link key={link.title} href={link.href} className='hover:text-bt-yellow hoverEffect' aria-label={link.title} title={link.title} target='_blank' rel='noopener noreferrer'>
                    {link.icon}
                </Link>
            ))}
        </div>
    )
}

export default SocialMedia