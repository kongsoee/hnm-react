import React, { useEffect, useState } from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
  
//getproducts를 ui로 보여주기위함
  const [products,setProducts]=useState([]);

  //
    const getProducts =async()=>{
    let url = `https://my-json-server.typicode.com/kongsoee/hnm-react/products`
      let response = await fetch(url);
      let data=await response.json();
      setProducts(data);
    };


  //api호출
  useEffect(()=>{
    getProducts();
  },[]);

  return (
    <div>
      <Container>
        <Row>
          {products.map((item)=>(
          <Col lg={3}>
            <ProductCard item={item} />
          </Col>
         ))};

        </Row>
      </Container>
        <ProductCard />
    </div>
  )
}

export default ProductAll