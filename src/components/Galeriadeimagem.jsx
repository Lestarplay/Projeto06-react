import React, { useState } from 'react';

function Galeriadeimagens() {
   const [imagem, setImagem] = useState([
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150'
    ]);
    
    const adicionatImagem = () => {
        setImagem([...imagem, 'https://via,placeholter.com/150']);
    };

    return (
        <div>
        <h2>Galeria de Imagem</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            {imagens.map((imagem, index) => (
              <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />     
            ))}
            </div>
            <button onClick={adicionarImagem} style={{ marginTop: '10px' }}>adicionar Imagem</button>
            </div>
    );
}

export default Galeriadeimagens;