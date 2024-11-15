import React from 'react'
import { Button } from '../atoms/Button'
import { Icon } from '@iconify/react';
import Link from 'next/link';


export default function OptionsAside() {
    return (
        <div>
            <Link
                href=''
                className="w-full px-4 py-2 text-[#7692ff] font-medium rounded-lg bg-[#f1e9e9] flex items-start justify-around space-x-2"   >
                <div className=''>
                <Icon icon="fluent:vehicle-car-32-regular" className="rounded-s bg-[#7692ff] text-white mr-2"  style={{ fontSize: "2em" }} />
                </div>
                Vehiculos
            </Link>
            <Link
                href=''
                className="w-full px-4 py-2 text-[#2F2B3D] font-medium rounded-lg justify-around bg-[#FFFFFF] flex items-center justify-center space-x-2"   >
                <div className=''>
                    <Icon icon="bx:exit" style={{ width: "1.2em", height: "1.2em", color: "#2F2B3D" }}                    />
                </div>
                Cerrar Sesion
            </Link>
        </div>
    )
}
