import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import vkIcon from '/icons/vk.svg';
import telegramIcon from '/icons/tg.svg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4} className="footer-about">
            <h2 className="footer-title">ДорСтройРент</h2>
            <p className="footer-description">
              Мы предоставляем качественные строительные материалы и гарантируем
              высокие стандарты продукции и обслуживания.
            </p>
          </Col>
          <Col md={4} className="footer-links">
            <h3 className="footer-subtitle">Карта сайта</h3>
            <ul className="footer-list">
              <li>
                <a href="#home">Главная</a>
              </li>
              <li>
                <a href="#about">О нас</a>
              </li>
              <li>
                <a href="#catalog">Каталог</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="footer-social mb-4">
            <h3 className="footer-subtitle">Социальные сети</h3>
            <div className="footer-social-icons">
              <a href="https://vk.com" className="social-icon" aria-label="VK">
                <img src={vkIcon} alt="VK" />
              </a>
              <a
                href="https://t.me"
                className="social-icon"
                aria-label="Telegram"
              >
                <img src={telegramIcon} alt="Telegram" />
              </a>
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
