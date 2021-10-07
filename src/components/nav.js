import React from 'react'
import {Link} from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Nav = () => {
    const linkStyle = `
     Hover:opacity-100
     text-sm
     sm:text-lg
     px-2
    `
    const logoStyle=`
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `
    return (
        <>
           <nav className="flex sm:justify-between justify-around items-center bg-green-800 lg:px-20 sm:px-6 py-4 text-gray-100">
                <StaticImage className={logoStyle} src="../images/gatsby-icon.png" alt="Logo" width={60} />
                <ul className="flex">
                    <li className={linkStyle}><Link to="/">Home</Link></li>
                    <li className={linkStyle}><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Nav

