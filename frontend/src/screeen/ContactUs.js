import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Container className="my-5">
      <Row>
        <h1 className="text-center">Contact Us</h1>
        <Col xs={6}>
          <Form.Group controlId="name" className="my-2">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="lastname" className="my-2">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="email" className="my-2">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={6}>
          <Form.Group controlId="subject" className="my-2">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12}>
          <Form.Group controlId="description" className="my-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></Form.Control>
          </Form.Group>
        </Col>
        <div className="d-flex justify-content-end">
          <Button type="submit" variant="primary" className="my-2 ml-auto">
            Save
          </Button>
        </div>
      </Row>
    </Container>
  );
}

export default ContactUs;
