import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactModal from '../ContactModal/ContactModal';
import { client, urlFor } from '../../services/sanityClient';
import './HeroSection.css';

const HeroSection = () => {
  const [modalShow, setModalShow] = useState(false);
  const [bannerData, setBannerData] = useState(null);

  useEffect(() => {
    const fetchBannerData = async () => {
      const query = '*[_type == "banner"][0]';
      const data = await client.fetch(query);
      setBannerData(data);
    };

    fetchBannerData();
  }, []);

  const handleOpenModal = () => setModalShow(true);
  const handleCloseModal = () => setModalShow(false);

  if (!bannerData) return <div>Loading...</div>;

  return (
    <section className="hero-section mt-5" id="home">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="hero-text">
            <h1 className="hero-heading">{bannerData.heading}</h1>
            <p className="hero-subtitle">{bannerData.subtitle}</p>
            <Button onClick={handleOpenModal} className="hero-button">
              Связаться с нами
            </Button>
          </Col>
          <Col md={6} className="hero-images">
            <img
              src={urlFor(bannerData.image).url()}
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
