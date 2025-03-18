import { getUsers } from "./services/users-api";
export const users = async () => {
  try {
    const response = await getUsers();
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};
