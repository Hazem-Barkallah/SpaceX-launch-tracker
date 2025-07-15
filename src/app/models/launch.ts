export interface Launch {
    id: string;
    name: string;
    date_local: string;
    details?: string;
    rocket: string;
    success?: boolean;
    upcoming: boolean;
    flight_number: number;
}
