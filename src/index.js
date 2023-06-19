import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fortawesome/fontawesome-free/css/all.css';

//CSS
import './index.css';
//import './home/components.css';
//import './home/bootstrap.min.css';


/* 1 - NAVBAR */
import './home/sections/navbar/navbar.css'
import Navbar from './home/sections/navbar/navbar.js'

/* 2 - WHATSAPP */
import './home/sections/whatsapp/whatsapp.css'
import WhatsApp from './home/sections/whatsapp/whatsapp.js'

/* 4 - Home */
import './home/sections/home/home.css'
import Home from './home/sections/home/home.js'

/* 4 - Passeios Fotos */
import './home/sections/passeios_fotos/passeios_fotos.css'
import Passeios_Fotos from './home/sections/passeios_fotos/passeios_fotos.js'

/* 4 - Servicos */
import './home/sections/servicos/servicos.css'
import Servicos from './home/sections/servicos/servicos.js'

/* 4 - FaleConosco */
import './home/sections/fale_conosco/fale_conosco.css'
import FaleConosco from './home/sections/fale_conosco/fale_conosco.js'

/* 4 - BackgroundFooter */
import './home/sections/background-footer/background-footer.css'
import BackgroundFooter from './home/sections/background-footer/background-footer.js'

/* 4 - Footer */
import './home/sections/footer/footer.css'
import Footer from './home/sections/footer/footer.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <WhatsApp/>
    <Home/>
    <Passeios_Fotos/>
    <Servicos/>
    <BackgroundFooter/>
    <Footer/>
  </React.StrictMode>
);
