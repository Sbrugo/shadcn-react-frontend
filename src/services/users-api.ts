import axios from "axios";

export const api_url = process.env.API_URL;

export type userData = {
  id: "";
  username: "";
  email: "";
  password: "";
  role?: "";
  birth?: Date;
  token?: "";
  bio?: "";
};

export const createUser = async (user: userData) => {
  try {
    const response = await axios.post(`${api_url}/users/`, user);
    return response;
  } catch (error) {
    console.log("Error creating user", error);
    throw error;
  }
};

export const findById = async (id: string) => {
  try {
    const response = await axios.get(`${api_url}/users/${id}`);
    return response;
  } catch (error) {
    console.error(`Could not find user with id ${id}`);
    throw error;
  }
};
