import minhaFoto from "../assets/react.svg";

const About = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      {/* Foto no topo */}
      <img 
        src={minhaFoto} 
        alt="Minha Foto" 
        className="w-32 h-32 rounded-full mx-auto shadow-lg"
      />
      
      {/* Texto sobre você */}
      <h1 className="text-2xl font-bold mt-4">Sobre Mim</h1>
      <p className="mt-2 text-gray-600">
        Olá! Meu nome é Eduardo Gerhardt e sou um desenvolvedor apaixonado por tecnologia e inovação. 
        Este projeto nasceu do meu interesse em aprimorar minhas habilidades em React, Tailwind e NestJS, 
        criando uma pequena plataforma funcional utilizando boas praticas de programação.
      </p>

      <h2 className="text-xl font-semibold mt-6">Meu Objetivo</h2>
      <p className="mt-2 text-gray-600">
        Meu principal objetivo com este projeto é mostrar minhas habilidades de desenvolvimento full-stack, 
        melhorar minha capacidade de estruturar aplicações modernas e compartilhar conhecimento com a comunidade.
      </p>
    </div>
  );
};

export default About;
