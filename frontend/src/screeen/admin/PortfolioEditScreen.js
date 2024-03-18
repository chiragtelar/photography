import React, { useEffect, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import {
  useGetPortfolioDetailsQuery,
  useUpdatePortfolioMutation,
  useUploadPortfolioImageMutation,
} from "../../slices/portfolioApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function PortfolioEditScreen() {
  const { id: portfolioId } = useParams();

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState();

  const navigate = useNavigate();

  // Get single portfolio data using redux toolkit query
  const {
    data: portfolio,
    isLoading,
    error,
    refetch,
  } = useGetPortfolioDetailsQuery(portfolioId);

  // update portfolio data using redux toolkit
  const [updatePortfolio, { isLoading: loadingUpdate }] =
    useUpdatePortfolioMutation();

  // upload portfolio image using below redux toolkit
  const [uploadPortfolioImage, { isLoading: loadingUpload }] =
    useUploadPortfolioImageMutation();

  // when click on update button below function is excuted.

  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedPortfolio = {
      portfolioId,
      name,
      description,
      image,
    };

    const result = await updatePortfolio(updatedPortfolio);
    if (result && result.error !== undefined) {
      toast.error(result.error);
    } else {
      toast.success("Slider updated.");
      refetch();
      navigate("/admin/portfoliolist");
    }
  };

  // upload file function
  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
        const res = await uploadPortfolioImage(formData).unwrap();
        toast.success(res.message);
        setImage(res.image)
    } catch (error) {
        toast.error(error?.data?.message || error.error);
    }
  }

  useEffect(() => {
    if (portfolio) {
      setName(portfolio.name);
      setDescription(portfolio.description);
      setImage(portfolio.image);
    }
  }, [portfolio]);

  return (
    <Container>
      <Link to="/admin/portfoliolist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Portfolio</h1>
        {loadingUpdate && <Loader/>}
        {loadingUpload && <Loader/>}

        {isLoading ? ( <Loader/> ) : error ? ( <Message variant='danger'>{error.data.message}</Message>) : (
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="name" className="my-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="description" className="my-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image" className="my-2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image"
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

            <Button type="submit" variant="primary" className="my-2">
              Update
            </Button>
            </Form>
        )}
      </FormContainer>
    </Container>
  );
}

export default PortfolioEditScreen;
