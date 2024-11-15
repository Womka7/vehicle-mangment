import { IAllVehicles } from "../dto/vehicles/IAllVehicles";

export interface PVehicles {
    /**
   *
   * Get All Vehicles
   * @param {IVehicleRequest}
   * @returns {Promise<IAllVehicles>} - A promise that resolves with the response containing the list of certificates and pagination details.
   */
    getAllVehicles({size, page}:IVehicleRequest): Promise<IAllVehicles>
}