import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faBars} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({authenticate,setAuthenticate}) => {

    //메뉴
    const MenuList =["여성",
     "Divided",
     "남성",
     "신생아/유아",
     "아동",
     "H&M Home",
     "Sale",
     "지속가능성" 
    ];
    let [width,setWidth]=useState(0);
    let navigate = useNavigate();

    const search =(event)=>{
        if(event.key === "Enter"){
            //입력한 검색어 읽어와서
            let keyword = event.target.value;
            //url을 바꿔준다
            navigate(`/?q=${keyword}`);
        }
    };
  return (
    <div>
        <div className='side-bar' style={{ width: width }}>
            <button className='close-btn' onClick={()=>setWidth(0)}>x</button>
            <div className="side-menu-list" id="menu-list">{
            MenuList.map((menu, index) => (
            <button key={index}>{menu}</button>
            ))}
            </div>
        </div>

        <div className='nav-header'>
            <div className='burger-menu hide'>
                <FontAwesomeIcon icon={faBars} onClick={()=>setWidth(250) } />
            </div>
            {authenticate?
                (<div className='login-btn' onClick={()=>setAuthenticate(false)}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className='log-tt'>로그아웃</span>
                </div>
                ):(
                <div className='login-btn' onClick={()=>navigate('/login')}>
                    <FontAwesomeIcon icon={faUser} />
                    <span className='log-tt'>로그인</span>
                </div>
                )}
        </div>
        
        <div className='logo'>
        <img width={100} onClick= {()=>navigate("/") } src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>

        <div class="nav-menu-area">
            <ul className='menuList'>
                {MenuList.map((menu)=>(
                     <li>{menu}</li>
                 ))}
            </ul>

            <div className='search'>
                <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder='제품 검색하기' onKeyPress={(event)=>search(event)}/>
            </div>
        </div>
    </div>
  )
}

export default Navbar