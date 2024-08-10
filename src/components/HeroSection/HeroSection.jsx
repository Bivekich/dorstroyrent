import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactModal from '../ContactModal/ContactModal';
import './HeroSection.css';

const heroImage = '/images/photo1.jpg';

const HeroSection = () => {
  const [modalShow, setModalShow] = useState(false);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  return (
    <section className="hero-section" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="hero-text">
            <h1 className="hero-heading">
              Гранитный щебень напрямую из карьера
            </h1>
            <p className="hero-subtitle">
              Добро пожаловать в торговый дом карьера ДорСтройРент, здесь вы
              сможете приобрести щебень доставкой или самовывозом.
            </p>
            <Button onClick={handleOpenModal} className="hero-button">
              Связаться с нами
            </Button>
          </Col>
          <Col md={6} className="hero-images">
            <img
              src={heroImage}
              alt="Hero"
              className="hero-image hero-image-large"
            />
          </Col>
        </Row>
      </Container>
      <ContactModal show={modalShow} handleClose={handleCloseModal} />
    </section>
  );
};

export default HeroSection;
