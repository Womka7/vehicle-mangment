import React from 'react'
import { Icon } from '@iconify/react';
import { H3 } from '../atoms/H3';
export const UserProfile = () => {
    return (
        <div className='flex flex-col justify-center items-center '>
            <Icon icon="ix:user-profile-filled" style={{ width: "4.2em", height: "4.2em", color: "#7692FF" }} />
            <H3 className=' font-semibold text-[#2F2B3D]'>Kevin Mejia</H3>
        </div>
    )
}
    