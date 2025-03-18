import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { User } from "@/dto/users-dto";
import axios from "axios";

interface UsersContextType {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const UsersContext = createContext<UsersContextType | undefined>(undefined);

interface UsersProviderProps {
  children: ReactNode;
}

const api_url = import.meta.env.VITE_API_URL;

export const UsersProvider = ({ children }: UsersProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(`${api_url}/users/`);
        setUsers(response.data);
        console.log(users);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    getUsers();
  }, [users]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUsers must be used within a UsersProvider");
  }
  return context;
};
