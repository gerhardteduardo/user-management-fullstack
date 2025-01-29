import UserList from "./pages/UserList"
import UserRegister from "./pages/UserRegister"

function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-50">
      <div>
      <UserList />
      <UserRegister />
      </div>
    </div>
  )
}

export default App
