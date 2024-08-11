import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { client, urlFor } from '../../services/sanityClient';
import './Footer.css';

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      const query = '*[_type == "footer"][0]'; // Получить первый документ типа footer
      const data = await client.fetch(query);
      setFooterData(data);
    };

    fetchFooterData();
  }, []);

  if (!footerData) return <div>Loading...</div>;

  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-about">
            <h2 className="footer-title">ДорСтройРент</h2>
            <p className="footer-description">{footerData.description}</p>
          </Col>
          <Col md={4} className="footer-links">
            <h3 className="footer-subtitle">Карта сайта</h3>
            <ul className="footer-list">
              {footerData.siteMap.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col md={4} className="footer-social mb-4">
            <h3 className="footer-subtitle">Социальные сети</h3>
            <div className="footer-social-icons">
              {footerData.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="social-icon"
                  aria-label={link.platform}
                >
                  <img src={urlFor(link.icon).url()} alt={link.platform} />
                </a>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="footer-bottom text-center">
            <p>
              &copy; {new Date().getFullYear()} ДорСтройРент. Все права
              защищены.
            </p>
            <p className="footer-credit">
              Made with <span className="heart">&#9829;</span> by{' '}
              <a
                href="https://profi.ru/profile/DanilovLI"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lev Danilov
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
