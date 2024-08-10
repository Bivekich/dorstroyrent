import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './DeliverySection.css';

const deliveryOptions = [
  {
    title: 'Доставка',
    description:
      'Мы предлагаем быструю и надежную доставку прямо к вашему объекту. Наши профессиональные водители гарантируют своевременную доставку и высокое качество обслуживания.',
    image: '/images/delivery.jpg',
  },
  {
    title: 'Самовывоз',
    description:
      'Вы можете самостоятельно забрать товар из нашего склада. Мы обеспечим удобное время для самовывоза и предоставим всю необходимую информацию для вашего визита.',
    image: '/images/self-pickup.jpg',
  },
];

const DeliverySection = () => {
  return (
    <section className="delivery-section" id="delivery">
      <Container>
        <h2 className="delivery-heading">Варианты доставки</h2>
        <Row>
          {deliveryOptions.map((option, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="delivery-card">
                <Card.Img
                  variant="top"
                  src={option.image}
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
