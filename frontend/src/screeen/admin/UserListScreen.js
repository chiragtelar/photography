import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { FaTimes, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
import Message from "../../components/Message";
import Loader from "../../components/Loader"; 
import { toast } from "react-toastify";
import { useGetUsersQuery,useDeleteUserMutation } from "../../slices/usersApiSlice";

function UserListScreen() {
    const { data: users, refetch, isLoading, error } = useGetUsersQuery();

    const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();

    const deleteHandler = async (id) => {
       if(window.confirm('Are you sure?')){
        try {
            await deleteUser(id);
            refetch();
            toast.success("Delete successfully")
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
       }
    }


    return (
      <>
        <h1>Users</h1>

        { loadingDelete && <Loader/> }

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant={"danget"}>{error}</Message>
        ) : (
          <Table striped border hover responsive className="table-sm">
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Admin</th> 
                    <th></th>
                  </tr>
              </thead>
              <tbody>
                { users.map((user) => (
                  <tr key={user._id}>
                      <td>{user._id}</td>
                      <td>{user.name}</td>
                      <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                      <td>{user.isAdmin ? (
                        <FaCheck style={{ color:'green'}}/>
                      ) : (
                        <FaTimes style={{ color:'red'}}/>
                      ) }</td> 
                      <td>
                        <LinkContainer to={`/admin/user/${user._id}/edit`} style={{  marginRight : '5px'}}>
                          <Button variant="success" className="btn-sm" >
                              <FaEdit/>
                          </Button>
                        </LinkContainer>
                        <Button variant="danger" className="btn-sm" onClick={() => deleteHandler(user._id)}>
                            <FaTrash style={{color:'white'}}/>
                        </Button>
                      </td>
                  </tr>
                ))}
              </tbody>
          </Table>
        )}
      </>
    );
}

export default UserListScreen