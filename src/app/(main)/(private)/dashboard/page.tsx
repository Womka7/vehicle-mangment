
import { VehiclesServices } from '@/app/infraestructure/services/vehicles.service'
import PageDashboard from '@/app/ui/template/PageDashboard'
import React from 'react'

interface IProps{
    searchParams: IVehicleRequest;
}
const useServiceVehicle = new VehiclesServices();
export default  async function PageVehicles({searchParams}:IProps ){
    const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
    const data = await useServiceVehicle.getAllVehicles({page, size: 7});
    return (
    <>
      <PageDashboard data={data}  />
    </>
  )
}
