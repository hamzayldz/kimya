import { Button, Table, Card, ListGroup, ListGroupItem, } from 'react-bootstrap';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';




function Detail() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  console.log(users);
  const currentUser = users.filter((user) => user._id === id);
  console.log(id);
  console.log(currentUser);

  const navigate = useNavigate()

  const routeChange = () => {
    let path = `/candidates`;
    navigate(path);
  };

  return (
    <div style={{ textAlign: 'center' }}>



      {currentUser
        ?.map((user) => {
          return (
            <Card style={{ width: '50rem', textAlign: 'center', alignItems: 'd-flex justify-content-center', justifyContent: 'center', margin: 'auto', marginTop: '50px' }}>
              <Card.Img variant="top" src="https://source.unsplash.com/random/1600x901" />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  <Table striped bordered>
                  <tr>
                    <td>id:</td>
                    <td>{user.id}</td>
                  </tr> 
                  <tr>
                    <td>name:</td>
                    <td>{user.name}</td>
                  </tr>
                </Table >
                </ListGroupItem>
                <ListGroupItem>
                   <Table >
                 
                </Table></ListGroupItem>
                <ListGroupItem>e-mail: {user.email}</ListGroupItem>
                <ListGroupItem>phone: {user.phone}</ListGroupItem>
                <ListGroupItem><Button onClick={routeChange} variant="info">back</Button>{' '}</ListGroupItem>
              </ListGroup>
            </Card>);
        })}


    </div>
  )
}

export default Detail

// {currentUser
//   ?.map((user) => {
//     return (
//       <tr key={user.id}>
//         <td>{user.id}</td>
//         <td>{user.name}</td>
//         <td>{user.email}</td>
//         <td>{user.phone}</td>
//         <td>
//         <Button variant="primary" size="sm">
//             Detail
//           </Button>
//         </td>
//       </tr>
//     );
//   })}