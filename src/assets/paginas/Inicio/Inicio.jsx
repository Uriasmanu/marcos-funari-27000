import React, { useRef } from 'react';
import './_inicio.scss'
import './_inicioMobile.scss'

const Inicio = () => {
    // Referência para o rodapé
    const footerRef = useRef(null);

    const handleContatosClick = () => {
        // Rolando a página até o rodapé
        if (footerRef.current) {
            footerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleSugestaoClick = () => {
        const telefone = '14996257741'; //'14998078221'
        const mensagem = 'Boa tarde, gostaria de enviar uma sugestao para a sua campanha';
        const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="container-inicio">
            <header>
                <ul>
                    <li onClick={handleContatosClick} style={{ cursor: 'pointer' }}>
                        Contatos
                    </li>
                    <li>Sobre</li>
                    <li onClick={handleSugestaoClick} style={{ cursor: 'pointer' }}>
                        Sugestões
                    </li>
                </ul>
            </header>
            <main>
                {/* Conteúdo principal */}
            </main>
            <footer ref={footerRef}>
                {/* Rodapé */}
            </footer>
        </div>
    );
};

export default Inicio;
