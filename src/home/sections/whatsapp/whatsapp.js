import React, {useState, useEffect, useRef} from 'react';

const WhatsApp = () => {
    return (
        <a href="https://api.whatsapp.com/send?phone=8488016205" target="_blank" className="whatsapp-button">
            <i className="fab fa-whatsapp fa-lg"></i>
        </a>
    );
}

export default WhatsApp;