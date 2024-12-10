import { useState } from "react";


function GaleriaDeImagens() {
    const [imagens, setImagens] = useState([
        'https://universoheroico.ig.com.br/wp-content/uploads/2024/10/Superman-e-Lois-4a-temporada-data-dos-proximos-episodios.jpg',
        'https://t.ctcdn.com.br/-K11tf6j99Ip558X9i5rK3sQ8uA=/1200x675/smart/i567711.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsG4HeXTSz_Ldsn-Scy7hUxZknwDBcyBe3mQ&s,'
    ]);

    const adicionarImagem = () => {
        setImagens([...imagens, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsG4HeXTSz_Ldsn-Scy7hUxZknwDBcyBe3mQ&s,'])
    }

    return(
        <>
        <h2>Galeria de Imagens</h2>
        <div style={{display: 'flex',  flexWrap: 'wrap',  justifyContent: 'center'}}>

        {imagens.map((imagem, index) => (
            <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{margin: '5px', maxWidth:'20em'}}/>
        ))}
        </div>
        <button onClick={adicionarImagem} style={{marginTop: '10px´'}}>Adicionar Imagem</button>
        </>
    )
}

export default GaleriaDeImagens