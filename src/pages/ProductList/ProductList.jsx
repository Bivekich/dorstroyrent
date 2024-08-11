import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { client, urlFor } from '../../services/sanityClient';
import { useParams } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const { categorySlug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "product" && category->slug.current == $categorySlug]`;
        const data = await client.fetch(query, { categorySlug });
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Unexpected data format:', data);
          setProducts([]);
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [categorySlug]);

  return (
    <section className="product-list-section">
      <Container>
        <h2 className="product-list-heading">Товары в категории</h2>
        <Row>
          {products.length > 0 ? (
            products.map((product) => (
              <Col md={4} sm={6} key={product._id} className="mb-4">
                <Card className="product-card">
                  <a
                    href={`/product/${product.slug.current}`}
                    className="product-card-link"
                  >
                    <Card.Img
                      variant="top"
                      src={urlFor(product.image).url()}
                      className="product-card-image"
                    />
                    <Card.Body>
                      <Card.Title className="product-card-title">
                        {product.name}
                      </Card.Title>
                      <Card.Text className="product-card-price">
                        {product.price} руб.
                      </Card.Text>
                    </Card.Body>
                  </a>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p>Нет товаров в данной категории.</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default ProductList;
