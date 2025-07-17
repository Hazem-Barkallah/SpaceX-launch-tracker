export interface Rocket {
    active: boolean;
    boosters: number;
    company: string;
    cost_per_launch: number;
    country: string;
    description: string;
    diameter: Measurement;
    engines: Engine;
    first_flight: string;
    first_stage: Stage;
    flickr_images: string[];
    height: Measurement;
    id: string;
    landing_legs: LandingLegs;
    mass: Mass;
    name: string;
    payload_weights: PayloadWeight[];
    second_stage: Stage & {
        payloads: PayloadOptions;
        thrust: Thrust;
    };
    stages: number;
    success_rate_pct: number;
    type: string;
    wikipedia: string;
}
export interface Measurement {
    meters: number;
    feet: number;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface LandingLegs {
    number: number;
    material: string | null;
}

export interface Thrust {
    kN: number;
    lbf: number;
}

export interface Engine {
    number: number;
    type: string;
    version: string;
    layout?: string;
    isp: {
        sea_level: number;
        vacuum: number;
    };
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    propellant_1: string;
    propellant_2: string;
    engine_loss_max?: number;
}

export interface Stage {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec?: number;
    thrust_sea_level?: Thrust;
    thrust_vacuum?: Thrust;
    thrust?: Thrust;
}

export interface PayloadWeight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}

export interface PayloadOptions {
    option_1: string;
    option_2?: string;
    composite_fairing?: {
        height: Measurement;
        diameter: Measurement;
    };
}
