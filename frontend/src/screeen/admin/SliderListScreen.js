import React from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  useGetSliderQuery,
  useCreateSliderMutation,
  useDeleteSliderMutation,
} from "../../slices/sliderApiSlice";
function SliderListScreen() {
  // Create Slider using redux toolkit query
  const [createSlider, { isLoading: loadingCreate }] =
    useCreateSliderMutation();

  // Get slider data using redux toolkit query
  const { data, isLoading, error, refetch } = useGetSliderQuery();

  // Delete Slider using redux toolkit query
  const [deleteSlider, { isLoading: loadingDelete }] =
    useDeleteSliderMutation();

  const createSliderHandler = async () => {
    if (window.confirm("Are you sure want to create a new slider.")) {
      try {
        await createSlider();
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are yous sure?")) {
      try {
        await deleteSlider(id);
        toast.success("Slider deleted!");
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };
  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <h1>Slider</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={createSliderHandler}>
            <FaEdit /> Create Slider
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>{error.data.message}</Message>
      ) : (
        <>
          <Table striped hover responsive className="table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((sld) => (
                <tr key={sld._id}>
                  <td>{sld._id}</td>
                  <td>{sld.name}</td>
                  <td>{sld.description}</td>
                  <td><img src={`../${sld.image}`} alt="" height='75px'/></td>
                  <td>
                    <LinkContainer to={`/admin/slider/${sld._id}/edit`}>
                        <Button variant="success" className="btn-sm mx-2">
                            <FaEdit style={{ color: "white"}} />
                        </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(sld._id)}
                    >
                      <FaTrash style={{ color: "white" }} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
}

export default SliderListScreen;
