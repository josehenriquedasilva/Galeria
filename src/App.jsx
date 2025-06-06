import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Galeria from './Galeria';

function App() {
  const [imagens, setImagens] = useState(
    JSON.parse(localStorage.getItem("urlimagens")) || []
  );

  useEffect(() => {
    localStorage.setItem("urlimagens", JSON.stringify(imagens))
  }, [imagens]);

  function adicionarImagens(url) {
    const novaImagem = {
      url: url
    }
    setImagens([...imagens, novaImagem])
  }

  function excluirImagem(url) {
    const novasImagens = imagens.filter(
      (imagem) => imagem.url !== url 
    )
    setImagens(novasImagens)
  }

  return (
    <div className='min-h-screen bg-[#EFF6FF] flex flex-col lg:flex-row items-center gap-5 md:gap-10 overflow-x-hidden'>
      <Formulario 
      adicionarImagens={adicionarImagens}
      />
      <Galeria 
      imagens={imagens}
      excluirImagem={excluirImagem}
      />
    </div>
  )
}

export default App