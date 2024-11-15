import { PVehicles } from "@/app/core/application/ports/vehicle.port";
import { HttpClient } from "../utils/client-http";
import { IAllVehicles } from "@/app/core/application/dto/vehicles/IAllVehicles";

export class VehiclesServices implements PVehicles {
    private clientHttp: HttpClient;

    constructor() {
        this.clientHttp = new HttpClient();
    }

    async getAllVehicles({size, page}: IVehicleRequest) :Promise<IAllVehicles> {
        try {
            const response = await this.clientHttp.get<IAllVehicles>(`vehicles?page=${page}&size=${size}`);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}