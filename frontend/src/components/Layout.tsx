import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen flex bg-gray-50">
      <aside className="bg-stone-950 p-12 text-white">
        <h2 className="font-black text-xl pointer-events-none">User Management</h2>
        <nav className="mt-5 flex flex-col gap-3 font-semibold">
          <a href="/" className="hover:text-blue-500">Usuários</a>
          <a href="/usercreate" className="hover:text-blue-500">Cadastrar</a>
          <a href="/about" className="hover:text-blue-500">Sobre</a>
        </nav>
      </aside>
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default Layout;
