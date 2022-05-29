
import React,{useEffect, useState} from 'react'
import { Container,Row,Col,Dropdown } from 'react-bootstrap';
import { useParams } from 'react-router-dom'



const ProductDetail = () => {
  let {id}=useParams();
  const [product,setProduct]=useState(null);
  const getProductDetail=async()=>{
    let url= `https://my-json-server.typicode.com/kongsoee/hnm-react/products/${id}`
    let response = await fetch(url);
    let data= await response.json();
    setProduct(data);

  }
  useEffect(()=>{
    getProductDetail();
  },[

  ])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img}/>
        </Col>

        <Col>
          <div className='product-info'>{product?.title}</div>
          <div className='product-info'>{product?.price}</div>
          <div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className='btn-area'>
          <hr/>
          <button type="button" class="add-button btn btn-dark" id="choicebtn">장바구니 추가하기</button>
          <button type="button" class="add-button btn btn-dark" id="choicebtn"> 구매하기</button>
        </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
