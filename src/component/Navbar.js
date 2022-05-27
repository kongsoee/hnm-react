import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

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
    
  return (
    <div>
        <div>
            <div className='login-btn'>
                <FontAwesomeIcon icon={faUser} />
                <div>로그인</div>
            </div>
        </div>
        
        <div className='logo'>
        <img width={100}src='https://blog.kakaocdn.net/dn/Yt80C/btqDeJAYUBo/JQbTuukRladq2AUOeqgiEK/img.jpg'></img>
        </div>

        <div class="nav-menu-area">
            <ul className='menuList'>
                {MenuList.map((menu)=>(
                     <li>{menu}</li>
                 ))}
            </ul>

            <div className='search'>
                <FontAwesomeIcon icon={faSearch}/>
                    <input type="text" placeholder='제품 검색하기'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar