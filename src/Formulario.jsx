import { useRef, useState } from "react";

function Formulario( {adicionarImagens} ) {
    const [urlInput, setUrlInput] = useState("")
    const [imagemUrl, setImagemUrl] = useState(null);
    const [urlVazia, setUrlVazia] = useState(false)
    const [arquivoVazio, setArquivoVazio] = useState(false)
    const limpaInput = useRef(null)

    function imagemArquivo(event) {
        const arquivo = event.target.files[0]

        if (arquivo) {
            const leitor = new FileReader()

        leitor.onloadend = () => {
            setImagemUrl(leitor.result)
        }

        leitor.readAsDataURL(arquivo)
        }
    }

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

                <p className={`${urlVazia === true ? `block` : `hidden`} text-sm text-red-500 mb-3`}>Por favor, selecione uma URL de imagem válida.</p>

                <button type="button" className="bg-[#0D9488] text-[#FFFFFF] font-bold p-3 rounded-sm hover:bg-teal-700 hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer" onClick={() => {
                    if (urlInput === "") {
                        setUrlVazia(true)
                    } else if (urlInput !== "") {
                        adicionarImagens(urlInput)
                        setUrlInput("")
                        setUrlVazia(false)
                    }
                }}>Adicionar URL</button>

                <section className="flex justify-around items-center">
                    <p className="border-b w-full text-gray-400"></p>
                    <p className="p-4 text-gray-500">ou</p>
                    <p className="border-b w-full text-gray-400"></p>
                </section>

                <input
                 accept="image/*" type="file"
                 onChange={imagemArquivo}
                 ref={limpaInput}
                 className="text-gray-500 text-sm mb-4 file:mr-4 file:bg-teal-50 file:p-2 file:rounded-sm file:font-semibold hover:file:bg-teal-100 file:text-teal-700 file:duration-300"/>

                <p className={`${arquivoVazio === true ? `block` : `hidden`} text-sm text-red-500 mb-3`}>Por favor, selecione uma URL de imagem válida.</p>
                
                <button type="button" className="bg-[#0D9488] text-[#FFFFFF] font-bold p-3 rounded-sm hover:bg-teal-700 hover:scale-105 transition duration-300 ease-in-out hover:cursor-pointer" onClick={() => {
                    if (imagemUrl === null) {
                        setArquivoVazio(true)
                    } else if (imagemUrl !== null) {
                        adicionarImagens(imagemUrl)
                        if (limpaInput.current) {
                            limpaInput.current.value = ""
                        }
                    }
                }}>Adicionar Arquivo</button>
            </form>
            <p className="border-t w-[90%] text-center text-gray-400">&copy; Minha Galeria. Todos os direitos reservados.</p>
        </div>
    );
};

export default Formulario;