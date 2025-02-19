// Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Todos os direitos reservados.</p>
        <p>
          Desenvolvido por Henrique Reimão{" "}
          <span className="text-red-500">&hearts;</span> DataSynk
        </p>
      </div>
    </footer>
  );
};

export default Footer;
