import { useEffect, useState } from "react";
import { users } from "@/shared/lib/appwrite"; // adjust path as needed

export const useUsers = () => {
  const [userList, setUserList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await users.list();
      console.log('helllo',res)
      setUserList(res.users);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const createUser = async (email: string, password: string, name: string) => {
    try {
      const user = await users.create(
        `user_${Date.now()}`,
        email,
        password,
        name
      );
      await fetchUsers();
      return user;
    } catch (err) {
      setError(err);
      throw err;
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    userList,
    loading,
    error,
    createUser,
    refetchUsers: fetchUsers,
  };
};
