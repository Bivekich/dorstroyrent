import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { client, urlFor } from '../../services/sanityClient';
import './DeliverySection.css';

const DeliverySection = () => {
  const [deliveryData, setDeliveryData] = useState(null);

  useEffect(() => {
    const fetchDeliveryData = async () => {
      const query = '*[_type == "delivery"][0]';
      const data = await client.fetch(query);
      setDeliveryData(data);
    };

    fetchDeliveryData();
  }, []);

  if (!deliveryData) return <div>Loading...</div>;

  return (
    <section className="delivery-section" id="delivery">
      <Container>
        <h2 className="delivery-heading">Варианты доставки</h2>
        <Row>
          {deliveryData.options.map((option, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="delivery-card">
                <Card.Img
                  variant="top"
                  src={urlFor(option.image).url()}
                  className="delivery-card-image"
                />
                <Card.Body>
                  <Card.Title className="delivery-card-title">
                    {option.title}
                  </Card.Title>
                  <Card.Text className="delivery-card-text">
                    {option.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DeliverySection;
