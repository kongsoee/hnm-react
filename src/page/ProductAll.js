import React, { useEffect, useState } from 'react'
import { Container,Row, Col } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [query,setQuery]=useSearchParams();
//getproducts를 ui로 보여주기위함
  const [products,setProducts]=useState([]);

  //
    const getProducts =async()=>{
      //q라고 시작되는것을 get
      let searchQuery=query.get('q') || "";


    let url = `https://my-json-server.typicode.com/kongsoee/hnm-react/products?q=${searchQuery}`;
      let response = await fetch(url);
      let data=await response.json();
      setProducts(data);
    };


  //api호출
  useEffect(()=>{
    getProducts();
  },[query]); //배열안에 쿼리 넣어줘서 호출

  return (
    <div>
      <Container>
        <Row>
          {products.map((item)=>(
          <Col lg={3}>
            <ProductCard item={item} />
          </Col>
         ))}

        </Row>
      </Container>
        <ProductCard />
    </div>
  )
}

export default ProductAll