import React from 'react'
import {Link} from 'react-router-dom';
import { 
  ListGroup,
  ListGroupItem,
  Button
 } 
 from 'reactstrap';
export const UserList = () => {
  return (
    <ListGroup>
      <ListGroupItem>
            <div className="auto">
              <Link className="btn btn-warning mr-1" to="/edit/1">Edit</Link>
                <Button color="danger">Delete</Button>
            </div>
      </ListGroupItem>
    </ListGroup>
  )
}
