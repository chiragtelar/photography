import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import {
  useGetPortfolioQuery,
  useCreatePortfolioMutation,
  useDeletePortfolioMutation,
} from "../../slices/portfolioApiSlice";

function PortfolioList() {
  // Create Portfolio using redux toolkit query
  const [createPortfolio, { isLoading: loadingCreate }] =
    useCreatePortfolioMutation();

  //Get Portfolio data using redux toolkit query
  const { data, isLoading, error, refetch } = useGetPortfolioQuery();

  // Delete Portfolio using redux toolkit query
  const [deletePortfolio, { isLoading: loadingDelete }] =
    useDeletePortfolioMutation();

  const createPortfolioHandler = async () => {
    if (window.confirm("Are you sure want to create a new portfolio.")) {
      try {
        await createPortfolio();
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  const deleteHandler = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deletePortfolio(id);
        toast.success("Slider deleted!");
        refetch();
      } catch (error) {
        toast.error(error?.data?.message || error.error);
      }
    }
  };

  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>Portfolio List</h1>
        </Col>
        <Col className="text-end">
          <Button className="btn-sm m-3" onClick={createPortfolioHandler}>
            <FaEdit /> Create Portfolio
          </Button>
        </Col>
      </Row>
      {loadingCreate && <Loader />}
      {loadingDelete && <Loader />}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error.data.message}</Message>
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
              {data.map((portfolio) => (
                <tr key={portfolio._id}>
                  <td>{portfolio._id}</td>
                  <td>{portfolio.name}</td>
                  <td>{portfolio.description}</td>
                  <td><img src={`../${portfolio.image}`} alt="" height='75px'/></td>
                  <td>
                    <LinkContainer
                      to={`/admin/portfolio/${portfolio._id}/edit`}
                    >
                      <Button variant="success" className="btn-sm mx-2">
                        <FaEdit style={{ color: "white" }} />
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(portfolio._id)}
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

export default PortfolioList;
