import React, {useState, useEffect, useRef} from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const Passeios_Fotos = () => {

  //Modal

  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);
  const [modalIsOpen4, setModalIsOpen4] = useState(false);
  const [modalIsOpen5, setModalIsOpen5] = useState(false);
  const [modalIsOpen6, setModalIsOpen6] = useState(false);

  const openModal1 = () => {
    setModalIsOpen1(true);
  };

  const openModal2 = () => {
    setModalIsOpen2(true);
  };

  const openModal3 = () => {
    setModalIsOpen3(true);
  };

  const openModal4 = () => {
    setModalIsOpen4(true);
  };

  const openModal5 = () => {
    setModalIsOpen5(true);
  };

  const openModal6 = () => {
    setModalIsOpen6(true);
  };


  const closeModal1 = () => {
    setModalIsOpen1(false);
  };

  const closeModal2 = () => {
    setModalIsOpen2(false);
  };

  const closeModal3 = () => {
    setModalIsOpen3(false);
  };

  const closeModal4 = () => {
    setModalIsOpen4(false);
  };

  const closeModal5 = () => {
    setModalIsOpen5(false);
  };

  const closeModal6 = () => {
    setModalIsOpen6(false);
  };

 return (
   <section className="passeios-section" id="passeios">
    <h2 className="passeios-title">Passeios em Natal</h2>
    <h3 className="passeios-description">Os melhores passeios voce encontra aqui</h3>
    <div className="passeios-images-div row">
      <div className="passeios-container">
        <div className="passeios-image-container" onClick={openModal1}>
          <img className="passeios-image" src="./images/passeios/image-1.jpg"/>
          <div className="passeio-description">
            <p>Saiba Mais</p>
          </div>
        </div>
        <h3 className="passeios-description-menu">Rota dos Nativos - 4x4</h3>
        <p className="passeios-text">A Rota dos Nativos em um emocionante passeio 4x4 promete um dia repleto de maravilhas naturais. Visitaremos o Museu Aeroespacial Barreira do Inferno e o Majestoso Cajueiro do Mundo. Exploraremos trilhas e dunas nativas, mergulhando em lagoas cristalinas, desfrutando de praias paradisíacas com formações de pedras magníficas e piscinas naturais.</p>
        <a className="passeio-target-whats" href="https://api.whatsapp.com/send?phone=41988780788" target="_blank"><p className="passeios-fale-conosco"><i class="fa fa-phone"></i>  Fale Conosco</p></a>
      </div>
      <div className="passeios-container">
        <div className="passeios-image-container" onClick={openModal2}>
          <img className="passeios-image" src="./images/passeios/buggy/buggy-1.jpg"/>
          <div className="passeio-description">
            <p>Saiba Mais</p>
          </div>
        </div>
        <h3 className="passeios-description-menu">Passeio de buggy litoral norte - Genipabu</h3>
        <p className="passeios-text">O passeio de buggy possui uma média de sete horas de duração, durante as quais exploraremos um magnífico itinerário com nove praias paradisíacas, três lagoas exuberantes e três encantadores parques de dunas. Desde o início, partiremos de maneira emocionante do próprio hotel, a bordo de buggies.</p>
        <a className="passeio-target-whats" href="https://api.whatsapp.com/send?phone=41988780788" target="_blank"><p className="passeios-fale-conosco"><i class="fa fa-phone"></i>  Fale Conosco</p></a>
      </div>
    </div>
    <div className="passeios-images-div row">
      <div className="passeios-container">
        <div className="passeios-image-container" onClick={openModal3}>
          <img className="passeios-image" src="./images/passeios/image-5.jpeg"/>
          <div className="passeio-description">
            <p>Saiba Mais</p>
          </div>
        </div>
        <h3 className="passeios-description-menu">Norte Vip 4x4</h3>
        <p className="passeios-text">Embarque em uma emocionante jornada nos veículos modelos Off Road 4x4 na Recepção do seu Hotel, iremos sentido litoral Norte de Natal/RN até Maracajaú. Ao longo do caminho, encante-se com as belas paisagens e faça paradas em nossas praias urbanas para fotos.</p>
        <a className="passeio-target-whats" href="https://api.whatsapp.com/send?phone=41988780788" target="_blank"><p className="passeios-fale-conosco"><i class="fa fa-phone"></i>  Fale Conosco</p></a>
      </div>
      <div className="passeios-container">
        <div className="passeios-image-container" onClick={openModal4}>
          <img className="passeios-image" src="./images/passeios/image-3.jpeg"/>
          <div className="passeio-description">
            <p>Saiba Mais</p>
          </div>
        </div>
        <h3 className="passeios-description-menu">Incrivel Super Pipa</h3>
        <p className="passeios-text">Explore o Litoral Sul do Rio Grande do Norte, começando pela Praia de Camurupim com explicações de um guia capacitado, que proporcionará uma imersão na história da região. Este é o melhor e mais completo passeio de Natal, com incríveis 11 horas de deslumbrantes belezas naturais e, o melhor de tudo, tempo para desfrutar de tudo com tranquilidade.</p>
        <a className="passeio-target-whats" href="https://api.whatsapp.com/send?phone=41988780788" target="_blank"><p className="passeios-fale-conosco"><i class="fa fa-phone"></i>  Fale Conosco</p></a>
      </div>
    </div>
    <div className="passeios-images-div row">
      <div className="passeios-container">
        <div className="passeios-image-container" onClick={openModal5}>
          <img className="passeios-image" src="./images/passeios/image-6.jpeg"/>
          <div className="passeio-description">
            <p>Saiba Mais</p>
          </div>
        </div>
        <h3 className="passeios-description-menu">PEROBAS + PUNAU</h3>
        <p className="passeios-text">A praia de Perobas, localizada a 78 km ao norte da cidade de Natal, é um refúgio tranquilo com a atmosfera encantadora de uma vila de pescadores.</p>
        <a className="passeio-target-whats" href="https://api.whatsapp.com/send?phone=41988780788" target="_blank"><p className="passeios-fale-conosco"><i class="fa fa-phone"></i>  Fale Conosco</p></a>
      </div>
      <div className="passeios-container">
        <div className="passeios-image-container" onClick={openModal6}>
          <img className="passeios-image" src="./images/passeios/image-7.jpeg"/>
          <div className="passeio-description">
            <p>Saiba Mais</p>
          </div>
        </div>
        <h3 className="passeios-description-menu">Praia da Pipa</h3>
        <p className="passeios-text">Pipa é uma das praias mais renomadas e belas do Brasil, sendo frequentemente listada entre as 10 mais bonitas. Localizada a cerca de 85 km de Natal, no litoral sul do estado, Pipa é conhecida por ser um lar natural de golfinhos e tartarugas.</p>
        <a className="passeio-target-whats" href="https://api.whatsapp.com/send?phone=41988780788" target="_blank"><p className="passeios-fale-conosco"><i class="fa fa-phone"></i>  Fale Conosco</p></a>
      </div>
    </div>
    <div className='modal-1'>
      <Modal isOpen={modalIsOpen1} onRequestClose={closeModal1} contentLabel="Exemplo de Modal" className="modal-box">
          <div className="modal-description">
              <a className="modal-close" onClick={closeModal1}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </a>
              <div>
                  <h2 className="title-modal">ROTA DOS NATIVOS - 4x4</h2>
              </div>
              <div style={{ padding: '15px' }}>
                  <h3 className="title-modal-description">DESCRICAO DO PASSEIO:</h3>
                  <p>Após a saída do hotel nossa primeira parada é no Museu Aeroespacial Barreira do Inferno (parada para fotos), depois seguiremos para o Maior Cajueiro do Mundo (entrada de 8,00 reais por pessoa/ 4,00 reias meia) após a visita ao Maior Cajueiro do mundo, seguiremos por Trilhas/Dunas Nativas na região do município de Nísia Floresta, onde vamos conhecer lindas Lagoas de Águas Cristalinas, com paradas para banho, fotos, servir as frutas tropicais da nossa em uma das lagoas. Apos as lagoas seguiremos para parada em uma lindíssima praia, onde será o almoço. Restaurante beira mar, com tempo para almoçar e tbm  aproveitar o lugar. Seguiremos para Mirante dos Golfinhos (parada para fotos) na praia de Tabatinga e subiremos o Parque de Dunas de Búzios onde aproveitaremos incrível entardecer nas dunas para apreciar o Pôr do Sol. Esse é o melhor e mais completo passeio, são 10 horas de estonteante beleza natural e melhor, com tempo para desfrutar de tudo com tranquilidade!</p>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">INFORMACOES GERAIS:</h3>
                      <p>
                        Saídas: 7h45 / 8h00 (outros bairros a combinar)<br></br>
                        Retorno: 18h00 / 18h15 
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE ESTA INCLUSO:</h3>
                      <p>
                        Serviço de Frutas Tropicais pela manhã <br></br>
                        Uma Prancha de Sandboard(Esquibunda) <br></br>
                        Uma Caixa Térmica no Carro. <br></br>
                      </p>
                  </div>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE NAO ESTA  INCLUSO:</h3>
                      <p>
                        Alimentação <br></br>
                        Bebidas <br></br>
                        Despesas Pessoais <br></br>
                        Entrada em uma das lagoas, em um day use com vários atrativos
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">OBSERVACOES:</h3>
                      <p>
                        N/D <br></br>
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
    <div className='modal-2'>
      <Modal isOpen={modalIsOpen2} onRequestClose={closeModal2} contentLabel="Exemplo de Modal" className="modal-box">
          <div className="modal-description">
              <a className="modal-close" onClick={closeModal2}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </a>
              <div>
                  <h2 className="title-modal">Passeio de buggy litoral norte - Genipabu</h2>
              </div>
              <div style={{ padding: '15px' }}>
                  <h3 className="title-modal-description">DESCRICAO DO PASSEIO:</h3>
                  <p>O passeio  tem em média 07 horas de duração, nosso roteiro inclui 9 praias, 3 lagoas e 3 parques de dunas. Já saímos de buggy do hotel.</p>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">INFORMACOES GERAIS:</h3>
                      <p>
                        Saida 8h30/9h00, vamos buscar e deixar no hotel (ponta negra, praia do meio, artistas), hotel ou endereço fora da rota a combinar. <br></br>
                        Buggy no sistema de vagas cada buggy tem capacidade para 04 pessoas, mais o bugueiro. <br></br>
                        Crianças de qualquer idade paga o valor integral.
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE ESTA INCLUSO:</h3>
                      <p>
                        N/D
                      </p>
                  </div>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE NAO ESTA  INCLUSO:</h3>
                      <p>
                        Travessia da balsa e entrada nas dunas. <br></br>
                        Despesas pessoais <br></br>
                        Atrativos como aquário, aerobunda, etc. <br></br>

                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">OBSERVACOES:</h3>
                      <p>
                        Recomendações: <br></br>
                        Roupas de banho, protetor solar, chinelo e óculos escuro.
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
    <div className='modal-3'>
      <Modal isOpen={modalIsOpen3} onRequestClose={closeModal3} contentLabel="Exemplo de Modal" className="modal-box">
          <div className="modal-description">
              <a className="modal-close" onClick={closeModal3}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </a>
              <div>
                  <h2 className="title-modal">Norte Vip 4x4</h2>
              </div>
              <div style={{ padding: '15px' }}>
                  <h3 className="title-modal-description">DESCRICAO DO PASSEIO:</h3>
                  <p>Iremos sentido litoral Norte até a praia de Maracajaú. Desfrutando de lindos cenários Seguiremos sentido BR 101 Norte, entrando em Barra do Maxaranguape onde começa nossa Aventura e super Trilha Off Road, com Paradas na Árvore do Amor (cercada de uma lenda que sera contada pelo guia, la também  podemos desfrutar de deliciosos Drinks opcional e Sucos feitos com nossas Frutas Tropicais opcionais), teremos varias paradas em lugares  magníficos como o fascinante Visual da Ponta Gorda que está incluso nesse roteiro tão diferente e pronto para ser explorado. Nessa rota rústica e pouco explorada iremos conhecer praias, rios e ainda lagoa de água paradisíaca, tudo isso a caminho da praia de Maracajaú. Chegando em maracajau temos como opcional passeio de barco para explorar os corais. Esperamos você para conhecer um dos roteiros mais diferentes do litoral. </p>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">INFORMACOES GERAIS:</h3>
                      <p>
                        Saída: Entre 7h00 a 7h30.<br></br>
                        (ponta negra, outros lugares combinar horário)
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE ESTA INCLUSO:</h3>
                      <p>
                        Veículo Off Road 4x4 <br></br>
                        Caixa Térmica Compartilhada para Compra da Sua Bebida <br></br>
                        Skybunda/Sandboard <br></br>
                      </p>
                  </div>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE NAO ESTA  INCLUSO:</h3>
                      <p>
                        Despesas pessoais <br></br>
                        Passeio de barco <br></br>
                        Opcionais
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">OBSERVACOES:</h3>
                      <p>
                        N/D
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
    <div className='modal-4'>
      <Modal isOpen={modalIsOpen4} onRequestClose={closeModal4} contentLabel="Exemplo de Modal" className="modal-box">
          <div className="modal-description">
              <a className="modal-close" onClick={closeModal4}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </a>
              <div>
                  <h2 className="title-modal">Incrivel Super Pipa</h2>
              </div>
              <div style={{ padding: '15px' }}>
                  <h3 className="title-modal-description">DESCRICAO DO PASSEIO:</h3>
                  <p>O passeio  Off Road em carros 4x4, Nosso roteiro vamos explorar as praias do litoral sul sentido ao tão famoso complexo de praias da PIPA. 50 km de praias, passando pelas principais praias do litoral sul ate chegar na deserta praia de Malemba, onde iremos atravessar a uma balsa, aproveitando o incrível visual da laguna da Guaraira. <br></br>
                     <b>Paradas:</b> Praia de tibau (opcional passeio de lancha), Parada no visual de Cacimbinhas, Praia do madeiro, Praia do centro (onde teremos o tão famoso vilarejo), Praia do amor e seguimos pelas falésias até simbauma. 
                  </p>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">INFORMACOES GERAIS:</h3>
                      <p>
                        Saída: 7h30/8h00 <br></br>
                        Retorno: 18h00/18h30 <br></br>
                        Pegamos e deixamos no hotel com o carro do passeio.
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE ESTA INCLUSO:</h3>
                      <p>
                        N/D
                      </p>
                  </div>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE NAO ESTA  INCLUSO:</h3>
                      <p>
                        Serviços terceirizados<br></br>
                        Travessia da balsa <br></br>
                        Despesas Pessoais
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">OBSERVACOES:</h3>
                      <p>
                        O valor da travessia da balsa será dividido por todos os passageiros.
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
    <div className='modal-5'>
      <Modal isOpen={modalIsOpen5} onRequestClose={closeModal5} contentLabel="Exemplo de Modal" className="modal-box">
          <div className="modal-description">
              <a className="modal-close" onClick={closeModal5}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </a>
              <div>
                  <h2 className="title-modal">PEROBAS + PUNAU</h2>
              </div>
              <div style={{ padding: '15px' }}>
                  <h3 className="title-modal-description">DESCRICAO DO PASSEIO:</h3>
                  <p>A praia de Perobas está localizada a 78 km do da cidade de Natal, litoral norte do estado, conservando tranquilidade de vila de pescador. No nosso passeio fazemos um passeio de lancha para conhecer os parrachos localizados a 5 km da costa, que revelam águas transparentes idéias para mergulho com snorkel. Nesse roteiro também inclui a praia de PUNAÚ com visual lindo formado por coqueiros, dunnas e o encontro do RIO PUNAÚ com o mar.</p>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">INFORMACOES GERAIS:</h3>
                      <p>
                        Duração do passeio: De 6 a 7 horas <br></br>
                        Mergulho dura de 1 hora e meia a 2 horas. <br></br>
                        Local de saída: hotel nas regiões de Ponta Negra, Via costeira, praia do meio, caso não esteja hospedado nesse perímetro, informaremos  o ponto de embarque mais próximo.
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE ESTA INCLUSO:</h3>
                      <p>
                        Transporte <br></br>
                        Guia de turismo <br></br>
                        Seguro passageiro <br></br>
                        Lancha - máscara e snorkel <br></br>
                        Taxa ambiental <br></br>
                        Entrada em Punaú 
                      </p>
                  </div>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE NAO ESTA  INCLUSO:</h3>
                      <p>Serviços terceirizados</p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">OBSERVACOES:</h3>
                      <p>
                        Veiculo utilizado: VAN <br></br>
                        So pode embarcar na lancha criança a partir de 6 anos.
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
    <div className='modal-6'>
      <Modal isOpen={modalIsOpen6} onRequestClose={closeModal6} contentLabel="Exemplo de Modal" className="modal-box">
          <div className="modal-description">
              <a className="modal-close" onClick={closeModal6}>
                <i className="fa-solid fa-xmark fa-2xl"></i>
              </a>
              <div>
                  <h2 className="title-modal">Praia da pipa</h2>
              </div>
              <div style={{ padding: '15px' }}>
                  <h3 className="title-modal-description">DESCRICAO DO PASSEIO:</h3>
                  <p>
                    Uma das praias mais famosas do Brasil, esta entre as 10 praias mais bonitas. E lar de golfinhos e tartarugas, localizada aproximadamente  85 KM de NATAL, pipa é um complexo de praias do litoral sul do estado, nossa primeira parada será na praia de Tibau do Sul, excelente para banho. Tempo para banho aproximado: 01h30/02h00 <br></br>
                    Na praia da Tibau do sul, temos um passeio opcional de lancha aonde iremos ao centro da lagoa, que se forma  ilhotas na maré baixa. Nossa segunda parada para banho e na praia do MADEIRO (O acesso se dá a uma escadaria de aproximadamente 149 degraus). Tempo para banho aproximado: 01h00/01h30 <br></br>
                    Nossa terceira parada será no chapadão da praia do amor (de acordo com acessibilidade, pois em dias de chuvas não conseguimos acesso devido estrada de barro), onde teremos em torno de 15 min para foto!! <br></br>
                    Nossa quarta é última parada será na praia central da Praia de pipa, lá ficaremos em torno de 1h para conhecermos o vilarejo , centrinho (com lojas de artesanatos, rua da Grécia e rua do céu).
                </p>
            </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">INFORMACOES GERAIS:</h3>
                      <p>
                        Duração do passeio: De 6 a 7 horas <br></br>
                        Local de saída: Hotel nas regiões de Ponta Negra, via costeira, praia do meio, caso não esteja hospedado nesse perímetro,  informaremos o ponto de embarque mais próximo.
                      </p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE ESTA INCLUSO:</h3>
                      <p>
                        Transporte <br></br>
                        Guia de turismo <br></br>
                        Seguro passageiro <br></br>
                      </p>
                  </div>
              </div>
              <div className='row' style={{ padding: '15px' }}>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">O QUE NAO ESTA  INCLUSO:</h3>
                      <p>Serviços terceirizados</p>
                  </div>
                  <div className='col-lg-6 passeio-modal-description'>
                      <h3 className="title-modal-description">OBSERVACOES:</h3>
                      <p>
                        O veiculo utilizado depende da quantidade de pessoas reservadas no dia, podendo ser VAN, MICRO ÔNIBUS ou ÔNIBUS. <br></br>
                        Recomendações: Roupas leves, roupa para banho, óculos e protetor solar.
                      </p>
                  </div>
              </div>
          </div>
      </Modal>
    </div>
   </section>
 );
}

export default Passeios_Fotos;