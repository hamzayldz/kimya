import React, { useState } from "react";
import { Table, Button, FormControl, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function UserList({ users }) {
  console.log(users);
  const [searchTerm, setSearchTerm] = useState("");
  let navigate = useNavigate();
  const routeChange = (_id) => {
    let path = `${_id}`;
    console.log(path);
    navigate(path);
  };
  return (
    <div>
      <Form className="d-flex">
        <FormControl
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {users
            .sort((a, b) => (a.name > b.name ? 1 : -1))
            .filter((user) => {
                if (searchTerm === '') {
                  return user;
                } else if (user.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return user;
                }
              })
            .map((user) => {
              return (
                <tr key={user._id}>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                  <Button onClick={() => {routeChange(user._id)}} variant="primary" size="sm">
                      Detail
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
