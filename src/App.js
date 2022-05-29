import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import common from './common.css'
import Login from './page/Login';
import ProductAll from './page/ProductAll';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

//1.전체 상품 페이지. 로그인. 상품상세페이지
//2 전체 상품페이지에서 전체 상품 볼 수 있다
//로그인 버튼 -> 로그인 페이지
//상품 디테일 눌렀으나 로그인 안되어있으면 로그인 페이지
//로그인 되어있을경우 상품 디테일 페이지 볼 수 있다
//로그아웃 버튼을 클릭하면 로그아웃이 된다
//로그아웃이 되면 상품 디테일 페이지를 볼수없음, 다시 로그인 페이지 보임
//로그인하면 로그아웃, 로그아웃하면 로그인이 보인다
// 상품 검색 가능 


function App() {

  //로그인 유무
  const [authenticate,setAuthenticate]=useState(false); //false=안됨 true=됨

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate} />} />
        <Route path="/products/:id" element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
