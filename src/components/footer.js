import React from 'react'

const footer = () => {
    const logoStyle=`
    text-white 
    font-rammetto
    sm:text-base
    text-sm
    `

    return (
        <>
            <footer className="text-center py-8 bg-green-900 text-gray-100">
                <p>Copyright 2021 <span  className={logoStyle}>GVI</span></p>
            </footer>   
        </>
    )
}

export default footer
