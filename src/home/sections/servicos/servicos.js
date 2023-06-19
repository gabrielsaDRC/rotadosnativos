import React, {useState, useEffect, useRef} from 'react';

const Servicos = () => {
 return (
   <section className="servicos-section" id="servicos">
    <h2 className="servicos-title">Servicos</h2>
    <p className="text-muted description-services">Abrace a liberdade de viajar e colete memórias que durarão para sempre. Não espere mais, embarque nessa viagem dos sonhos e deixe-nos transformar seus desejos em realidade. Sua próxima grande aventura começa aqui.</p>
    <div className="row container-services">
      <div className="col-lg-4 service-box">
        <div className="service-box-content">
          <div className="center-service-icon">
            <a class="middle-icon-service">
              <i class="fa-solid fa-car-side"></i>
            </a>
          </div>
          <h4 className="mb-3 font-size-22">Passeios</h4>
          <p className="text-muted mb-0">Explore o mundo ao seu redor. Descubra paisagens deslumbrantes e aventuras sem fim.</p>
        </div>
      </div>
      <div className="col-lg-4 service-box">
        <div className="service-box-content">
          <div className="center-service-icon">
            <a class="middle-icon-service">
              <i class="fa-solid fa-map-location-dot"></i>
            </a>
          </div>
          <h4 className="mb-3 font-size-22">Guia de Turismo</h4>
          <p className="text-muted mb-0">Descubra a essência do destino. Desvende segredos, história e cultura com um guia experiente.</p>
        </div>
      </div>
    </div>
   </section>
 );
}

export default Servicos;