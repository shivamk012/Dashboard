import './navbar.css'
import {BiBell} from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import UserImage from '../image 1.png'

export default function Navbar() {
  return (
    <div className='navbar'>
        <p className='leftnav'><b>Dashboard</b></p>
        <div className='rightnav'>
            <div className='input-container'><input className="searchinput" placeholder='search'/></div>
            <div className='icon'><BiBell/></div>
            <div><img  className='usericon' src={UserImage} /></div>
        </div>
    </div>
  )
}
