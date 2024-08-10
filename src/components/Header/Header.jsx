import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './Header.css';

const vkIcon = '/icons/vk.svg';
const tgIcon = '/icons/tg.svg';

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <Navbar.Brand href="/#home">ДорСтройРент</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#about">О нас</Nav.Link>
            <Nav.Link href="/#delivery">Доставка</Nav.Link>
            <Nav.Link href="/#catalog">Каталог</Nav.Link>
          </Nav>
          <div className="ml-auto d-flex align-items-center">
            <Button
              variant="link"
              href="https://vk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <div className="social-icon-container">
                <img src={vkIcon} alt="VK" className="social-icon" />
                <span className="social-text">ВКонтакте</span>
              </div>
            </Button>
            <Button
              variant="link"
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="social-button"
            >
              <div className="social-icon-container">
                <img src={tgIcon} alt="Telegram" className="social-icon" />
                <span className="social-text">Telegram</span>
              </div>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
