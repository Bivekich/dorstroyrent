import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal, Button, Card } from 'react-bootstrap';
import { client, urlFor } from '../../services/sanityClient';
import { useParams } from 'react-router-dom';
import ContactModal from '../../components/ContactModal/ContactModal';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productSlug } = useParams();
  const [product, setProduct] = useState(null);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const query = `*[_type == "product" && slug.current == $productSlug][0]`;
      const data = await client.fetch(query, { productSlug });
      setProduct(data);
    };

    fetchProduct();
  }, [productSlug]);

  const handleCloseModal = () => setModalShow(false);
  const handleOpenModal = () => setModalShow(true);

  if (!product) return <div>Loading...</div>;

  return (
    <section className="product-detail-section">
      <Container>
        <Row>
          <Col md={6} className="product-detail-images">
            <img
              src={urlFor(product.image).url()}
              alt={`${product.name}`}
              className="product-detail-image"
            />
          </Col>
          <Col md={6}>
            <h2 className="product-detail-heading">{product.name}</h2>
            <p className="product-detail-description">{product.description}</p>
            <p className="product-detail-price">
              Цена: {product.price} руб. за 1 тонну
            </p>
            <Button className="order-button" onClick={handleOpenModal}>
              Заказать
            </Button>
          </Col>
        </Row>
      </Container>

      <ContactModal show={modalShow} handleClose={handleCloseModal} />
    </section>
  );
};

export default ProductDetail;
