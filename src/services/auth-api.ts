/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const API_URL = "http://localhost:3000/auth";

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  bio?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  acces_token: string;
  email: string;
  message: string;
}

export const register = async (data: RegisterData): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(
      `${API_URL}/register`,
      data
    );
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};

export const login = async (data: LoginData): Promise<AuthResponse> => {
  try {
    const response = await axios.post<AuthResponse>(`${API_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message;
  }
};
