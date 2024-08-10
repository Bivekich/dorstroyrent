import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './ContactModal.css';

const ContactModal = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const botToken = '7223043525:AAFj6CZwFhBHZgNoEQOk1Rjs11LpM8uM7x4';
    const chatId = '-1002152724675';

    const message = `
      Новая заявка:
      ФИО: ${formData.name}
      Номер телефона: ${formData.phone}
      Комментарий: ${formData.comment}
    `;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      handleClose(); // Закрываем модальное окно
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Связаться с нами</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-image-container">
          <img
            src="/images/contact-photo.jpg"
            alt="Contact"
            className="modal-image"
          />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName" className="mb-2">
            <Form.Label>ФИО</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Введите ваше ФИО"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formPhone" className="mb-2">
            <Form.Label>Номер телефона</Form.Label>
            <Form.Control
              type="tel"
              name="phone"
              placeholder="Введите ваш номер телефона"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formComment" className="mb-2">
            <Form.Label>Комментарий</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="comment"
              placeholder="Введите ваш комментарий"
              value={formData.comment}
              onChange={handleChange}
            />
          </Form.Group>
          <Button className="mt-2" variant="dark" type="submit">
            Отправить
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactModal;
