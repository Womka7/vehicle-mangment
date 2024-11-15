// import React from 'react'
// import { FormField } from '../../molecules/Common/FormField'
// import { Button } from '../../atoms/Button'
// import { Icon } from '@iconify/react';
// import * as yup from 'yup';
// import { IAllVehicles } from '@/app/core/application/dto/vehicles/IAllVehicles';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';

// export const formFilter = yup.object()
//     .shape({
//         licensePlate: yup
//             .string()
//             .min(6, "Faltan caracteres")
//         ,
//         year: yup
//             .number()
//         ,
//         make: yup
//             .string()
//         ,
//         model: yup
//             .string()

//     })


// export const FormInputFilter = () => {
//     const {
//         control,
//         handleSubmit,
//         formState: { errors }
//     } = useForm<IAllVehicles>({
//         mode: "onChange",
//         reValidateMode: "onChange",
//         resolver: yupResolver(formFilter)
//     })
//     // const router =refresh()
    


//     return (
//         <form className='flex flex-row' onSubmit={handleSubmit()}>
//             <FormField
//                 control={control}
//                 type="text"
//                 label="Placa"
//                 name="licensePlate"
//                 placeholder=" "
//                 inputStyle={{
//                     width: "200px",
//                     height: "40px",
//                     top: "166px",
//                     left: "284px",
//                     gap: "0px",
//                     borderRadius: "10px 0px 0px 0px",
//                     border: "1px solid #ccc",
//                     opacity: 1,
//                 }}
//             />
//             <FormField
//                 control={control}
//                 type="text"
//                 label="Año"
//                 name="year"
//                 placeholder=" "
//                 inputStyle={{
//                     width: "200px",
//                     height: "40px",
//                     top: "166px",
//                     left: "284px",
//                     gap: "0px",
//                     borderRadius: "10px 0px 0px 0px",
//                     border: "1px solid #ccc",
//                     opacity: 1,
//                 }}
//             />
//             <FormField
//                 control={control}
//                 type="text"
//                 label="Marca"
//                 name="make"
//                 placeholder=" "
//                 inputStyle={{
//                     width: "200px",
//                     height: "40px",
//                     top: "166px",
//                     left: "284px",
//                     gap: "0px",
//                     borderRadius: "10px 0px 0px 0px",
//                     border: "1px solid #ccc",
//                     opacity: 1,
//                 }}
//             />
//             <FormField
//                 control={control}
//                 type="text"
//                 label="Modelo"
//                 name="model"
//                 placeholder=" "
//                 inputStyle={{
//                     width: "200px",
//                     height: "40px",
//                     top: "166px",
//                     left: "284px",
//                     gap: "0px",
//                     borderRadius: "10px 0px 0px 0px",
//                     border: "1px solid #ccc",
//                     opacity: 1,
//                 }}
//             />
//             <Button
//                 type="submit"
//                 className="w-full px-4 py-2 text-white font-medium rounded-lg bg-[#7692ff] hover:bg-gray-900 flex items-center justify-center space-x-2"   >
//                 <Icon icon="ant-design:filter-outlined" style={{ width: "1.2em", height: "1.2em", color: "#FFFFFF" }} />
//                 Filtrar
//             </Button>
//             <Button
//                 type="reset"
//                 className="w-full px-4 py-2 text-white font-medium rounded-lg bg-[#FFFFFF] hover:bg-gray-900 flex items-center justify-center space-x-2"   >
//                 <Icon icon="mynaui:delete-solid" style={{ width: "1.2em", height: "1.2em", color: "#2F2B3D" }} />
//                 Limpiar
//             </Button>
//         </form>
//     )
// }

import React from 'react';
import { Button } from '../../atoms/Button';
import { Icon } from '@iconify/react';
import { FormField } from '../../molecules/Common/FormField';

const VehicleSearchForm = () => {
  return (
    <form className="flex flex-row">
      <FormField
        type="text"
        label="Placa"
        name="licensePlate"
        placeholder=" "
        inputStyle={{
            
        }
        }
      />
      <FormField
        type="text"
        label="Año"
        name="year"
        placeholder=" "
        inputStyle={{
          width: "200px",
          height: "40px",
          top: "166px",
          left: "284px",
          gap: "0px",
          borderRadius: "10px 0px 0px 0px",
          border: "1px solid #ccc",
          opacity: 1,
        }}
      />
      <FormField
        type="text"
        label="Marca"
        name="make"
        placeholder=" "
        inputStyle={{
          width: "200px",
          height: "40px",
          top: "166px",
          left: "284px",
          gap: "0px",
          borderRadius: "10px 0px 0px 0px",
          border: "1px solid #ccc",
          opacity: 1,
        }}
      />
      <FormField
        type="text"
        label="Modelo"
        name="model"
        placeholder=" "
        inputStyle={{
          width: "200px",
          height: "40px",
          top: "166px",
          left: "284px",
          gap: "0px",
          borderRadius: "10px 0px 0px 0px",
          border: "1px solid #ccc",
          opacity: 1,
        }}
      />
      <Button
        type="submit"
        className="w-full px-4 py-2 text-white font-medium rounded-lg bg-[#7692ff] hover:bg-gray-900 flex items-center justify-center space-x-2"
      >
        <Icon icon="ant-design:filter-outlined" style={{ width: "1.2em", height: "1.2em", color: "#FFFFFF" }} />
        Filtrar
      </Button>
      <Button
        type="reset"
        className="w-full px-4 py-2 text-white font-medium rounded-lg bg-[#FFFFFF] hover:bg-gray-900 flex items-center justify-center space-x-2"
      >
        <Icon icon="mynaui:delete-solid" style={{ width: "1.2em", height: "1.2em", color: "#2F2B3D" }} />
        Limpiar
      </Button>
    </form>
  );
};

export default VehicleSearchForm;