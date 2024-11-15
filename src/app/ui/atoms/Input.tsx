import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    type?: string;
    name?: string;
    error?: string;
}
export const Input=({ placeholder, type = 'text', name, error, ...props }: InputProps)=> {
    return (
        <div className='flex flex-col mb-3 '>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className={`px-4 py-2 rounded-lg text-gray-700
                    placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-gray-800 focus:border-transparent border
             ${error ? "border-red-500 focus:ring-red-500" : "border-gray-800"}`}
            {...props}
            />
            {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
        </div >
    )
}