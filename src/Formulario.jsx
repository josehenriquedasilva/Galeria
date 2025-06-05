import { useState } from "react";

function Formulario( {adicionarImagens} ) {
    const [urlInput, setUrlInput] = useState("")

    return (
        <div className="w-screen flex flex-col justify-around items-center gap-14 bg-[#FFFFFF] rounded-b-xl shadow-xl pt-5 pb-5 lg:w-[25%] lg:h-screen">
            <header>
                <h1 className="text-center text-4xl text-[#0F766E] font-bold pb-3.5">Minha Galeria</h1>
                <p className="text-lg text-gray-600">Organize suas imagens favoritas.</p>
            </header>
            <form className="flex flex-col bg-[#F9FAFB] w-[90%] p-7 rounded-xl inset-shadow-sm">
                <p className="text-xl font-bold text-gray-600">Adicionar Nova Imagem</p>
                <input className="border border-[#D1D5DB] mt-5 mb-5 p-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200" type="text" placeholder="Cole a URL da imagem aqui" value={urlInput} onChange={(u) => {
                    setUrlInput(u.target.value)
                }} />
                <button type="button" className="bg-[#0D9488] text-[#FFFFFF] font-bold p-3 rounded-sm hover:bg-teal-700 hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer" onClick={() => {
                    if (urlInput === "") {
                        alert("Erro")
                    } else {
                        adicionarImagens(urlInput)
                        setUrlInput("")
                    }
                }}>Adicionar imagem</button>
            </form>
            <p className="border-t w-[90%] text-center text-gray-500">&copy; Minha Galeria. Todos os direitos reservados.</p>
        </div>
    );
};

export default Formulario;