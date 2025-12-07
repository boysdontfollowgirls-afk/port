import React,{useState,useRef} from 'react'
import './navbar.css'
import underline_img from '../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from  '../../assets/menu.png'
import menu_close from '../../assets/cross.png'

const Navbar = () => {
  const [menu,setMenu]=useState('home');

  const menuRef=useRef();

  const openMenu=()=>{
    menuRef.current.style.right='0';
  }
  const closeMenu=()=>{
    menuRef.current.style.right='-350px';
  }

  return (
    <div className='navbar'>
      <h1>Sudeep</h1>
      <img src={menu_open} onClick={openMenu} height={'40px'} width={'40px'} className='nav-mob-open' alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} height={'30px'} width={'30px'} alt="" className="nav-mob-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>{setMenu('home')}}>Home</p> </AnchorLink>{menu==='home'?<img src={underline_img} height={'5px'} width={'50px'}/>:<></>}</li>
        <li> <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>{setMenu('about')}}>About Me</p></AnchorLink>{menu==='about'?<img src={underline_img}  height={'5px'} width={'50px'}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>{setMenu('services')}}>Services</p></AnchorLink>{menu==='services'?<img src={underline_img}  height={'5px'} width={'50px'}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>{setMenu('work')}}>Portfolio</p></AnchorLink>{menu==='work'?<img src={underline_img}  height={'5px'} width={'50px'}/>:<></>}</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>{setMenu('contact')}}>Contact</p></AnchorLink>{menu==='contact'?<img src={underline_img}  height={'5px'} width={'50px'}/>:<></>}</li>
      </ul>
      <div className='nav-connect'> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with Me </AnchorLink></div>
    </div>
  )
}

export default Navbar
