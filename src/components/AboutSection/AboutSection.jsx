import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { client, urlFor } from '../../services/sanityClient';
import './AboutSection.css';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      const query = '*[_type == "about"][0]';
      const data = await client.fetch(query);
      setAboutData(data);
    };

    fetchAboutData();
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <section className="about-section" id="about">
      <Container>
        <h2 className="about-heading">О нас</h2>
        <Row>
          <Col md={6} className="about-text">
            <p className="about-description">{aboutData.description}</p>
          </Col>
          <Col md={6} className="about-carousel">
            <Carousel>
              {aboutData.images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={urlFor(image).url()}
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
