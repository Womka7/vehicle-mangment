export interface ICreateResponseMantenance {
    statusCode: number;
    message:    string;
    data:       Data;
}

export interface Data {
    type:    string;
    date:    Date;
    mileage: number;
    notes:   string;
    vehicle: Vehicle;
    id:      number;
}

export interface Vehicle {
    id:           number;
    make:         string;
    model:        string;
    year:         number;
    licensePlate: string;
    photo:        string;
}
