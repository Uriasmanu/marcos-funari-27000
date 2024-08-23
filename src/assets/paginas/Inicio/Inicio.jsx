import { useRef } from 'react';
import './_inicio.scss'
import './_inicioMobile.scss'

import poster from '../../imagens/poster.png'
import imagem from '../../imagens/imagem.png'
import banner from '../../imagens/banner.png'
import stars from '../../imagens/stars.png'
import stars2 from '../../imagens/stars2.png'
import imagem2 from '../../imagens/imagem2.png'
import instagram from "../../imagens/instagram.png";
import facebook from "../../imagens/facebook.png";
import whatsapp from "../../imagens/whatsapp.png";

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
        const telefone = '14998078221';
        const mensagem = 'Olá, gostaria de enviar uma sugestao para a sua campanha';
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
                <section className='primeira-chamada'>
                    <h1>Por uma cidade com valores sólidos e uma gestão transparente</h1>
                    <img src={poster} alt="poster" />
                    <img src={stars} alt="stars" className='stars' />
                </section>
                <section className='segunda-chamada'>
                    <img src={imagem} alt="imagem de campanha" />
                    <div className='card-info'>

                        <div className="card">
                            <p>Comprometido com os valores que constroem uma comunidade forte e unida</p>
                        </div>
                    </div>


                </section>
                <section className='banner'>
                    <img src={banner} alt="banner" />
                </section>

                <h2>Acreditamos em uma gestão que respeita a tradição, promove a ordem e valoriza o bem-estar de cada cidadão.</h2>
                <section className='segunda-chamada'>
                    <div className='card-info'>

                        <div className="card">
                            <p>Junte-se a nós na construção de um futuro mais promissor.</p>
                        </div>
                    </div>
                    <img src={imagem2} alt="imagem de campanha" />
                    <img src={stars2} alt="stars" className='stars' />
                </section>
            </main>
            <footer ref={footerRef}>
                <a href="https://www.instagram.com/mmarcosfunari?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                </a>
                <a href="https://www.facebook.com/marcos.funari.12" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                </a>
                <a href="https://wa.me/14998078221" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp} alt="WhatsApp" />
                </a>
            </footer>
        </div>
    );
};

export default Inicio;
