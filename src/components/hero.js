import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const Hero = () => {
    return (
        <>
            <section className="text-blueGray-700 bg-white mt-20">
                <div className="container flex flex-col items-center px-5 py-16 mx-auto md:flex-row lg:px-28">
                    <div className="flex flex-col items-start mb-16 text-left lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:mb-0">
                        <h2 className="mb-8 text-xs font-semibold tracking-widest text-black uppercase title-font"> Your tagline </h2>
                        <h1 className="mb-8 text-2xl font-black tracking-tighter text-black md:text-5xl title-font"> Medium length display headline. </h1>
                        <p className="mb-8 text-base leading-relaxed text-left text-blueGray-600 "> Deploy your mvp in minutes, not days. WT offers you a a wide selection swapable sections for your landing page. </p>
                        <div className="flex flex-col justify-center lg:flex-row">
                            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2"> Show me </button>
                            <p className="mt-2 text-sm text-left text-blueGray-600 md:ml-6 md:mt-0"> It will take you to candy shop. 
                            <br className="hidden lg:block" />
                            <Link to="#" className="inline-flex items-center font-semibold text-blue-600 md:mb-2 lg:mb-0 hover:text-black " title="read more"> Read more about it » </Link>
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/3 lg:max-w-lg md:w-1/2">
                        <StaticImage className="object-cover object-center rounded-lg " alt="hero" src="../images/banner-img.webp" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
