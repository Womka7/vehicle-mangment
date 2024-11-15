import React from 'react'
import { Icon } from '@iconify/react';
import { H3 } from '../atoms/H3';
export const TitleAside = () => {
    return (
        <div className='flex flex-row items-center  border-b border-gray-300 pb-2'>
            <Icon icon="fluent:vehicle-car-parking-20-filled" style={{ width: "3.2em", height: "3.2em", color: "#2F2B3D" }} />
            <H3 className=' font-semibold text-[#2F2B3D]'>Transport Solutions</H3>

        </div>
    )
}
