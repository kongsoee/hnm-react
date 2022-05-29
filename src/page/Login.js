import React from 'react'
import { Container } from 'react-bootstrap'
import {useNavigate} from "react-router-dom";

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser =(event)=>{
  
    event.preventDefault();
    setAuthenticate(true);
    navigate('/');
  }
  return (

      <Container className='login-box col-6'>
        <h1 className='loglog'>로그인</h1>
        <form onSubmit={(event)=>loginUser(event)}>
            <input type="text" placeholder='아이디 입력'/>
            <input type="text" placeholder='비밀번호 입력'/>
            <button type='submit'>로그인 하기</button>
          </form>
      </Container>
  )
}

export default Login