import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "../services/api";

function UserRegister() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRegister = async () => {
    if (!username || !password) {
      setMessage("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await api.post("/users", { username, password });
      setMessage("Usuário cadastrado com sucesso!");
      console.log("Resposta do servidor:", response.data);

      // Limpar os inputs
      setUsername("");
      setPassword("");
    } catch (error) {
      setMessage("Erro ao cadastrar usuário.");
      console.error("Erro no POST:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 flex flex-col border-2 rounded-lg w-96">
      <h1 className="font-black text-xl">Cadastrar novo usuário</h1>
      <Input
        type="text"
        className="mt-2"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="text"
        className="mt-2"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        className="mt-2"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        onClick={handleRegister}
        disabled={loading}
        className="font-black mt-2 hover:bg-blue-500"
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </Button>

      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}

export default UserRegister;
