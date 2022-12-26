export interface User {
    username: string;
    password: string;
}

export interface CreateUser {
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
}
