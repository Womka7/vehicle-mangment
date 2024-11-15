"use client"
import React, { useState } from 'react'
import { Input, Label } from '../../atoms'
import { Control, Controller, FieldError, FieldValues, Path } from 'react-hook-form';
import { Icon } from '@iconify/react';


interface IProps<T extends FieldValues> {
    label: string;
    type: string;
    name: Path<T>;
    control?: Control<T>;
    error?: FieldError;
    id?: string;
    placeholder?: string;
    inputStyle?:React.CSSProperties;
}
export const FormField = <T extends FieldValues>({ label, type, name, control, error, id, placeholder,inputStyle }: IProps<T>) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
    return (
        <div className='w-full flex flex-col mb-4'>
            <Label htmlFor={id || label.toLowerCase()} className={` text-sm font-medium`}>{label}</Label>
            <div className="relative">
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <Input id={id || label.toLowerCase()} type={showPassword && type === "password" ? "text" : type}
                    error={error?.message}
                    placeholder={placeholder || `Ingrese su ${label.toLowerCase()}`}
                    {...field}
                    style={inputStyle}
                    />
                    
                )
                }
            />
            {type === "password" && (
          <Icon
            icon={showPassword ? "mdi:eye-off" : "mdi:eye"} 
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            style={{ fontSize: "1.2em" }}
          />
        )}
            </div>
        </div>
    )
}
