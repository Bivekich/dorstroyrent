import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import './AboutSection.css';

const images = [
  '/images/photo1.jpg',
  '/images/photo2.jpg',
  '/images/photo3.jpg',
];

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="about-heading">О нас</h2>
        <Row>
          <Col md={6} className="about-text">
            <p className="about-description">
              Добро пожаловать в нашу компанию, специализирующуюся на продаже
              щебня! Мы предоставляем качественные строительные материалы и
              гарантируем высокие стандарты продукции и обслуживания. Наша
              команда с многолетним опытом готова предложить вам лучшие решения
              и честные цены. Используем только экологически чистые сорта щебня
              и обеспечиваем своевременные поставки. Присоединяйтесь к довольным
              клиентам и воспользуйтесь нашими услугами уже сегодня!
            </p>
          </Col>
          <Col md={6} className="about-carousel">
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
