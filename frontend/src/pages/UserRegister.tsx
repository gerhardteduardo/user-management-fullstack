import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function UserRegister() {
  return (
    <div className="  p-10 flex flex-col border-2 rounded-lg">
      <h1 className="font-black text-xl">Novo usuário</h1>
      <Input
        type="text"
        className="mt-2 p-2 border rounded-md w-full"
        placeholder="Username"
      />
      <Input
        type="password"
        className="mt-2 p-2 border rounded-md w-full"
        placeholder="Password"
      />
      <Button
        className="font-black mt-2">
        Cadastrar
      </Button>
    </div>
  )
}

export default UserRegister
