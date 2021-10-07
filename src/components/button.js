import React from 'react'

const button = ({text}) => {
    return (
        <>
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                {text}
            </button>
        </>
    )
}

export default button
