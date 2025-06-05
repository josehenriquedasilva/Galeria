import { useState } from "react";
import { BiSolidTrash } from "react-icons/bi";

function Galeria( { imagens, excluirImagem } ) {
    const [imagemEnter, setImagemEnter] = useState('')

    function imagemSelecionada(url) {
        const urlImagem = url
        setImagemEnter(urlImagem)
    };

    function imagemdesmarcada() {
        setImagemEnter(null)
    }

    return (
        <div className="flex flex-col gap-5 lg:items-start lg:h-screen lg:p-10 w-[90%]">
            <h2 className='font-bold text-3xl text-center'>Suas Imagens</h2>
            {imagens.length ?
             <div className="flex flex-wrap gap-4 justify-center mb-10">
                {imagens.map((imagem) => (
                <div key={imagem.url}
                    className="w-80 min-h-80 rounded-2xl hover:scale-105 duration-200 relative"
                    style={{
                        backgroundImage: `url(${imagem.url})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                    onMouseEnter={() => imagemSelecionada(imagem.url)}
                    onMouseLeave={imagemdesmarcada}
                >{imagemEnter === imagem.url ? <button className="absolute right-2 top-2 bg-red-500 p-1 rounded-2xl text-amber-50 hover:cursor-pointer" type="button" onClick={() => {
                    excluirImagem(imagemEnter)
                }}><BiSolidTrash/></button> : ""}
                </div>
            ))}</div> : <div className="p-5 ml-8 lg:ml-0 mr-8 rounded-xl bg-[#FFFFFF] md:min-h-1/6">
                <p className="text-center text-lg text-gray-500">Sua Galeria está vazia!</p>
            </div>
            }
        </div>
    )
}

export default Galeria;