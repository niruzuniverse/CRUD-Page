import React from 'react';
import {Link} from 'react-router-dom';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export const AddUser = () => {
  return (
   <Form>
     <FormGroup>
       <Label>orderNo</Label>
         <Input type="text" placeholder="customer"></Input>
       
     </FormGroup>
     <Button type="submit">submit</Button>
     <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
   </Form>
  )
}
