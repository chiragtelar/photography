import React, { useState } from "react";
import { Container, Accordion, Row, Col, Form, Button } from "react-bootstrap";

function ConfigurationScreen() {
  const [image, setImage] = useState("");
  const [landingImage, setLandingImage] = useState("");
  const [landingDescription, setLandingDescription] = useState("");

  const uploadFileHandler = () => {};

  return (
    <Container style={{ marginTop: "20px" }}>
      <Row>
        <h1>System Configuration</h1>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Header</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <Form.Group controlId="image" className="my-2">
                      <Form.Label>Header Logo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Choose header logo"
                        value={image}
                        readOnly
                        onChange={(e) => setImage(e.target.value)}
                      ></Form.Control>
                      <Form.Control
                        type="file"
                        label="Choose file"
                        onChange={uploadFileHandler}
                      ></Form.Control>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button
                        type="submit"
                        variant="primary"
                        className="my-2 ml-auto"
                      >
                        Update
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Home</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <h1>Section 1</h1>
                  <Col>
                    <Form.Group controlId="image" className="my-2">
                      <Form.Label>Landing Image</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Choose header logo"
                        value={landingImage}
                        readOnly
                        onChange={(e) => setLandingImage(e.target.value)}
                      ></Form.Control>
                      <Form.Control
                        type="file"
                        label="Choose file"
                        onChange={uploadFileHandler}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="landingDescription" className="my-2">
                      <Form.Label>Landing Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter landing description"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <h1>Section 2</h1>
                  <Col>
                    <Form.Group controlId="image" className="my-2">
                      <Form.Label>Left Image</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Choose header logo"
                        value={landingImage}
                        readOnly
                        onChange={(e) => setLandingImage(e.target.value)}
                      ></Form.Control>
                      <Form.Control
                        type="file"
                        label="Choose file"
                        onChange={uploadFileHandler}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="rightDescription" className="my-2">
                      <Form.Label>Right Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter right description"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <h1>Section 3</h1>
                  <Col>
                    <Form.Group controlId="qouteTitle" className="my-2">
                      <Form.Label>Quote Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter qoute title"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="quoteDescription" className="my-2">
                      <Form.Label>Quote Description</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter qoute description"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <div className="d-flex justify-content-end">
                    <Button
                      type="submit"
                      variant="primary"
                      className="my-2 ml-auto"
                    >
                      Update
                    </Button>
                  </div>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Footer</Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col xs={6}>
                    <Form.Group controlId="footerLogo" className="my-2">
                      <Form.Label>Footer Logo</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Choose footer logo"
                        value={image}
                        readOnly
                        onChange={(e) => setImage(e.target.value)}
                      ></Form.Control>
                      <Form.Control
                        type="file"
                        label="Choose file"
                        onChange={uploadFileHandler}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="address" className="my-2">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter address"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group controlId="emailAddress" className="my-2">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter email address"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col> 
                  <Col xs={6}>
                    <Form.Group controlId="phoneNumber" className="my-2">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter phone number"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col> 
                  <Col xs={6}>
                    <Form.Group controlId="facebookLink" className="my-2">
                      <Form.Label>Facebook Link</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter facebook link"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col> 
                  <Col xs={6}>
                    <Form.Group controlId="instagramLink" className="my-2">
                      <Form.Label>Instagram Link</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter instagram link"
                        value={landingDescription}
                        onChange={(e) => setLandingDescription(e.target.value)}
                      ></Form.Control>
                    </Form.Group>
                  </Col> 
                  <div className="d-flex justify-content-end">
                    <Button
                      type="submit"
                      variant="primary"
                      className="my-2 ml-auto"
                    >
                      Update
                    </Button>
                  </div>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

export default ConfigurationScreen;
