import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Erro ao buscar usuários:", error));
  }, []);

  return (
    <div className="  p-10 flex flex-col border-2 rounded-lg">
      <h1 className="font-black text-xl">Lista de Usuários</h1>
      <ul className="mt-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 border-b">{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
