import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from 'react-redux';

const ProductItem = ({i}) =>{
  const dispatch = useDispatch();
  

  return (
    <Card className="m-5">
          <Card.Body className="d-flex justify-content-between align-items-center">
          <Card.Body>
          <Card.Title>{i?.name}</Card.Title>
          <Card.Title>{i?.company}</Card.Title>
        </Card.Body>
          
            
            <Button variant="primary" onClick=
              {i?.isCart ? 
                ()=>dispatch({
              type:'REMOVE_CART',
              payload:i?.id
            })
            :()=> dispatch({
              type:"ADD_CART",
              payload:i?.id,
            })
          
              }>
                {i?.isCart ?  'REMOVE':'Add to cart'}
              </Button>
              </Card.Body>
        </Card>
  )
}

export default ProductItem