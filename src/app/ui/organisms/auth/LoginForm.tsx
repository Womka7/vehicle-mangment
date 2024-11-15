"use client"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation"
import { ILoginRequest } from "@/app/core/application/dto/auth/ILoginRequest"
import { signIn } from "next-auth/react";
// import { ErrorResponse, FieldError } from "@/app/core/application/dto/common/error-response.dto";
import { FormField } from "../../molecules/Common/FormField";
import Link from "next/link";
import { Button } from "../../atoms/Button";
import { Icon } from '@iconify/react';


export const loginScheme = yup.object()
    .shape({
        email: yup
            .string()
            .email("El correo es inválido")
            .required("El correo es obligatorio"),
        password: yup
            .string()
            .min(8, "La contraseña debe tener al menos 8 caracteres")
            .required("La contraseña es obligatoria")
    })

export const LoginForm = () => {
    const {
        control,
        handleSubmit,
        // setError,
        formState: { errors }
    } = useForm<ILoginRequest>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: yupResolver(loginScheme)
    })

    const router = useRouter()
    const handleLogin = async (data: ILoginRequest) => {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: data.email,
                password: data.password,
            });

            console.log(result);

            if (result?.error) {
                console.log("Ocurrio un error", JSON.parse(result.error));
                JSON.parse(result.error)
                // handleError
                return;
            }
            router.push("/dashboard/services")
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col items-center justify-center">
                <Icon icon="ant-design:car-outlined" className="text-[#7692ff]" style={{ fontSize: "2.2em" }} />
                <h2 className="text-2xl font-semibold text-center text-[#7692ff]">Transport Solutions S.A</h2>
            </div>
            <p className="text-center text-sm mb-4 text-gray-600">Inicia sesion en tu cuenta y gestiona tu flota de vehiculos</p>
            <FormField<ILoginRequest>
                control={control}
                type="email"
                label="Correo Electrónico"
                name="email"
                error={errors.email}
                placeholder="tuempresa@dominio.com"
            />
            <FormField<ILoginRequest>
                control={control}
                type="password"
                label="Contraseña"
                name="password"
                error={errors.password}
                placeholder="Ingresa Tu Contraseña"
            />
            <Button
      type="submit"
      className="w-full px-4 py-2 text-white font-medium rounded-lg bg-[#7692ff] hover:bg-gray-900 flex items-center justify-center space-x-2"   >
      <Icon icon="uil:padlock" className="text-[#FFFFFF] mr-4" style={{ fontSize: '1.2em' }} />
      Iniciar Sesión
    </Button>
            <div className="flex flex-col items-center space-y-2 text-[#2F2B3D] justify-center text-sm">
                <p className="pr-2 text-center">¿Problemas para iniciar sesión? Contacta al
                    administrador del sistema</p>{" "}
            </div>
        </form>
    )
}