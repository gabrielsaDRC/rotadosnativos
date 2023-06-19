import React, { useState, useEffect } from 'react';

const Home = () => {

    //Carousel 
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
        src: './images/background-4x4.bmp',
        alt: 'Image 1',
        description: 'Rota dos Nativos - 4x4',
        },
        {
        src: './images/background-perobas.bmp',
        alt: 'Image 2',
        description: 'Perobas + Punaú',
        },
        {
        src: './images/background-pipa.bmp',
        alt: 'Image 3',
        description: 'Praia da Pipa',
        },
        {
        src: './images/background-buggy.jpg',
        alt: 'Image 4',
        description: 'Buggy Litoral Norte (Genipabu)',
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 10000);
    
        return () => clearInterval(interval);
      }, [images]);
    
      const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
      };
    
      const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
      };

    const [navbarHeight, setNavbarHeight] = useState(0);

    useEffect(() => {
      const navbar = document.querySelector('.header-container');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    }, []);

    return (
        <section className="home-section" id="home" style={{ marginTop: navbarHeight }}>
            <div className="carousel">
                <div className="carousel-container">
                    <div className="carousel-image-container">
                        {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            className={index === currentSlide ? 'active' : ''}
                        />
                        ))}
                    </div>
                    <div className="carousel-description">
                        {images.map((image, index) => (
                        <p key={index} className={index === currentSlide ? 'active' : ''}>
                            {image.description}
                        </p>
                        ))}
                    </div>
                </div>
                {/*<div className="carousel-buttons">
                    <button onClick={handlePrevSlide}><i className="fas fa-chevron-left"></i></button>
                    <button onClick={handleNextSlide}><i className="fas fa-chevron-right"></i></button>
                </div>*/}
            </div>
        </section>
    );

}

export default Home;