import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export interface LoginRequest {
    username: string;
    password: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    image: string;
}

export async function login(data: LoginRequest): Promise<LoginResponse> {
    const response = await axios.post<LoginResponse>(
        `${BASE_URL}/auth/login`,
        data
    );

    return response.data;

}