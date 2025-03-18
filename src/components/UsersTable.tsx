import { useUsers } from "@/context/user-context";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import axios from "axios";
import { User } from "@/dto/users-dto";

const api_url = import.meta.env.VITE_API_URL;

function UsersTable() {
  const { users, setUsers } = useUsers();

  const handleDelete = async (userId: string) => {
    try {
      await axios.delete(`${api_url}/users/${userId}`);
      setUsers((prevUsers: User[]) =>
        prevUsers.filter((user) => user._id !== userId)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="flex flex-col">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Active</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.isActive ? "Yes" : "No"}</TableCell>
              <TableCell>
                <Button
                  className="bg-red-500 w-fit text-xs p-1"
                  onClick={() => handleDelete(user._id!)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UsersTable;
