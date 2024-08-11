import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { client, urlFor } from '../../services/sanityClient';
import './CatalogSection.css';

const CatalogSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const query = '*[_type == "category"]';
      const data = await client.fetch(query);
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <section className="catalog-section" id="catalog">
      <Container>
        <h2 className="catalog-heading">Каталог</h2>
        <Row>
          {categories.map((category) => (
            <Col md={3} sm={6} key={category._id} className="mb-4">
              <Card className="catalog-card">
                <a
                  href={`/category/${category.slug.current}`}
                  className="catalog-card-link"
                >
                  <Card.Img
                    variant="top"
                    src={urlFor(category.image).url()}
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
