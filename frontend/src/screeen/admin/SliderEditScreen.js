import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import FormContainer from "../../components/FormContainer";
import {
  useGetSliderDetailsQuery,
  useUpdateSliderMutation,
  useUploadSliderImageMutation,
} from "../../slices/sliderApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

function SliderEditScreen() {
  const { id: sliderId } = useParams();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  // Get single slider using redux toolkit query
  const {
    data: slider,
    isLoading,
    error,
    refetch,
  } = useGetSliderDetailsQuery(sliderId);

  // Update Slider data using redux toolkit query
  const [updateSlider, { isLoading: loadingUpdate }] =
    useUpdateSliderMutation();

  // upload a slider image using the below redux toolkit query
  const [uploadSliderImage, { isLoading: loadingUpload }] =
    useUploadSliderImageMutation();

  // when click on update button below function is excute.
  const submitHandler = async (e) => {
    e.preventDefault();
    const updatedSlider = {
      sliderId,
      name,
      description,
      image,
    };

    const result = await updateSlider(updatedSlider);
    if (result && result.error !== undefined) {
      toast.error(result.error);
    } else {
      toast.success("Slider updated.");
      refetch();
      navigate("/admin/sliderlist");
    }
  };

  // when file input on select image then below function is excute.
  const uploadFileHandler = (e) => {
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    try {
    } catch (error) {}
  };

  // load data and set in our existing value in input.
  useEffect(() => {
    if (slider) {
      setName(slider.name);
      setDescription(slider.description);
      setImage(slider.image);
    }
  }, [slider]);

  return (
    <Container>
      <Link to="/admin/sliderlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Slider</h1>
        {loadingUpdate && <Loader />}

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danger"}>{error.data.message}</Message>
        ) : (
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

export default SliderEditScreen;
