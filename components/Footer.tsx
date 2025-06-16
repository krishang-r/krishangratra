import React from 'react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Email',
    href: 'mailto:ratrakrishang@gmail.com',
    bw: '/logo/mail-bw.png',
    color: '/logo/mail-color.png',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/krishangratra/',
    bw: '/logo/insta-bw.png',
    color: '/logo/insta-color.png',
  },
  {
    name: 'LinkedIn',
    href: 'www.linkedin.com/in/krishang-ratra',
    bw: '/logo/linkedin-bw.png',
    color: '/logo/linkedin-color.png',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/krishang-r',
    bw: '/logo/github-bw.png',
    color: '/logo/github-color.png',
  },
]

const FooterContact = () => {
  return (
    <footer className="w-full bg-gray-500 text-white border-t border-gray-300 px-0 py-6 mt-16">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-xl text-black font-semibold mb-4 md:mb-0">
          Let’s Connect
        </p>

        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer">
              <div className="relative w-8 h-8 transition-transform duration-300 hover:scale-125 group">
                {/* BW Icon */}
                <img src={link.bw} alt={link.name} className="absolute inset-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300" />
                {/* Color Icon */}
                <img src={link.color} alt={link.name} className="w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default FooterContact
