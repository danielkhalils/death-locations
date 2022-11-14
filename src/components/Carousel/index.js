import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import './Carousel.css';

function CarouselApp() {
 const data = [
    {
      image: "https://aventurasnahistoria.uol.com.br/media/_versions/personagem/penhandnd_widelg.jpg",
      caption: "A fera da Penha"
    },
    {
      image: "https://bhaz.com.br/wp-content/uploads/2019/05/nardoni.jpg",
      caption: "Isabela Nardoni"
    },
    {
      image: "https://assets-global.website-files.com/60ff690cd7b0537edb99a29a/628e219393c991546c92e4e4_enterro%20de%20Manfred%20e%20Mari%CC%81sia%20Von%20Richthofen.jpg",
      caption: "O caso Richthofen"
    },
    {
      image: "https://labdicasjornalismo.com/images/noticias/9545/11112021102600_01.jpeg",
      caption: "Caso Eloá"
    },
    {
      image: "https://i.ytimg.com/vi/cDlGe4LHzHI/maxresdefault.jpg",
      caption: "Liana Friedenbach e Felipe Caffé"
    },
    {
      image: "https://aventurasnahistoria.uol.com.br/media/uploads/capamainus7d8.jpg",
      caption: "Maníaco do Parque"
    },
    {
      image: "https://1.bp.blogspot.com/-gJ18Nzhkvdg/YMi2tGqCIXI/AAAAAAAAIfQ/2AM2FZKY2CUSyvTIxbddPzqtyfdQysvMgCLcBGAsYHQ/s1280/Elize%2BMatsunaga%2Bs%25C3%25A9rie%2BNetflix%2B-%2Blancamentosdodia.png",
      caption: "Matsunaga"
    },
    {
      image: "https://canalcienciascriminais.com.br/wp-content/uploads/2018/03/guilherme-daniela.jpg",
      caption: "O caso Daniella Perez"
    },
    {
      image: "https://radioaltouruguai.com.br/wp-content/uploads/2019/03/IMG_5959.jpg",
      caption: "O caso Bernardo"
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="CarouselApp">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="8px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "900px",
              maxHeight: "500px",
              margin: "5px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselApp;