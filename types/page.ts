export interface Page {
    info: Info;
    services: Service[];
    clients: Client[];
}

export interface Info {
    logo: string;
    title: string;
    description: string;
    slogan: string;
    first_button: string;
    second_button: string;
}

export interface Service {
    image: string;
    link: string;
}

export interface Client {
    logo: string;
    link: string;
}