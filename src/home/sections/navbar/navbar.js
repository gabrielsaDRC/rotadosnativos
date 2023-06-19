import React, {useState, useEffect, useRef} from 'react';

const Navbar = () => {

    const [bubbles, setBubbles] = useState([]);

    useEffect(() => {
      const interval = setInterval(() => {
        const newBubble = createBubble();
        setBubbles(prevBubbles => [...prevBubbles, newBubble]);
      }, 600);

      return () => {
        clearInterval(interval);
      };
    }, []);

    const createBubble = () => {
      const bubble = document.createElement('div');
      bubble.classList.add('water-bubble');
      const header = document.querySelector('.header-container');
      const headerWidth = header.offsetWidth;
      const headerHeight = header.offsetHeight;
      const x = Math.random() * headerWidth;
      const y = Math.random() * headerHeight;
      bubble.style.top = `${y}px`;
      bubble.style.left = `${x}px`;
      setTimeout(() => {
        bubble.remove();
        setBubbles(prevBubbles => prevBubbles.filter(b => b !== bubble));
      }, 3000);
      header.appendChild(bubble);
      return bubble;
    };

    const [showNavbar, setShowNavbar] = useState(false);

    const toggleNavbar = () => {
      setShowNavbar(!showNavbar);
    };

    const closeNavbar = () => {
      setShowNavbar(false);
    };

    return (
      <header className="header-container" /*onMouseMove={handleMouseMove}*/ style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 999 }}>
        {bubbles.map((bubble, index) => (
          <div key={index} className="water-bubble" style={{ top: bubble.style.top, left: bubble.style.left }}></div>
        ))}
        <div className="nav-header-div">
          <div>
            <img src="./images/folhas.png" alt="Folhas" className= "logo-folhas" />
            <img src="./images/logo.png" alt="Logo" className= "logo-rotas" />
          </div>
          <div className="slide-nav">
            <a id="show-navbar" onClick={toggleNavbar}><i class="fa-solid fa-bars fa-2xl"></i></a>
          </div>
          <nav className={`nav-header ${showNavbar ? 'visible-navbar' : 'hidden-navbar'}`}>
            <ul className="nav-ul">
              <li><a className="nav-button" onClick={closeNavbar} href="#" style={{ textDecoration: 'none' }}>Inicio</a></li>
              <li><a className="nav-button" onClick={closeNavbar} href="#passeios" style={{ textDecoration: 'none' }}>Passeios</a></li>
              <li><a className="nav-button" onClick={closeNavbar} href="#servicos" style={{ textDecoration: 'none' }}>Servicos</a></li>
              <li><a className="nav-button" onClick={closeNavbar} href="https://api.whatsapp.com/send?phone=41988780788" target="_blank" style={{ textDecoration: 'none' }}>Fale Conosco</a></li>
            </ul>
          </nav>
          <a></a>
        </div>
      </header>
    );
};

export default Navbar;