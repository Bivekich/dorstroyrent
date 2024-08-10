import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './CatalogSection.css';

const categories = [
  {
    name: 'Гранитный щебень',
    link: '/category1',
    image: '/images/category1.jpg',
  },
  { name: 'Щебень', link: '/category2', image: '/images/category2.jpg' },
  {
    name: 'Еврофракция щебня',
    link: '/category3',
    image: '/images/category3.jpg',
  },
  { name: 'ЩПС', link: '/category4', image: '/images/category4.jpg' },
  { name: 'Отсев', link: '/category5', image: '/images/category5.jpg' },
];

const CatalogSection = () => {
  return (
    <section className="catalog-section" id="catalog">
      <Container>
        <h2 className="catalog-heading">Каталог</h2>
        <Row>
          {categories.map((category, index) => (
            <Col md={3} sm={6} key={index} className="mb-4">
              <Card className="catalog-card">
                <a href={category.link} className="catalog-card-link">
                  <Card.Img
                    variant="top"
                    src={category.image}
                    className="catalog-card-image"
                  />
                  <Card.Body>
                    <Card.Title className="catalog-card-title">
                      {category.name}
                    </Card.Title>
                  </Card.Body>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default CatalogSection;
