import api from "@/services/api";
import { useEffect, useState } from "react";

interface User {
  id: number;
  username: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api.get("/users")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Erro ao buscar usuários");
        setLoading(false);
      });
  }, []);

  return (
    <div className="  p-10 flex flex-col border-2 rounded-lg">
      <h1 className="font-black text-xl">Lista de Usuários</h1>
      {loading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="mt-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
