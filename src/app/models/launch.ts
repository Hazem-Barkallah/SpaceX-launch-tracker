export interface Launch {
    id: string;
    name: string;
    date: string;
    details?: string;
    rocket: string;
    success?: boolean;
    upcoming: boolean;
    crew?: string[];
    flight_number: number;
}
