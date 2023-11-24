
import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai';
import { RiFacebookFill } from 'react-icons/ri';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import './footer.css'
const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='about'>
                <div className='logo'>
                <img src='https://th.bing.com/th/id/OIP.M6UoWTtftVqxfNGMCz08-QHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='logo' width='50%' height='80%'>
</img>
                </div>
                <div className='detail'>
                    <p>"Indulge in the perfect blend of flavors at our cozy cafe, where every sip and bite is a taste of delight."</p>
                    <div className='icon'>
                        <li><RiFacebookFill /></li>
                        <li><AiOutlineInstagram /></li>
                        <li><AiOutlineTwitter /></li>
                        <li><BsYoutube /></li>
                    </div>
                </div>
            </div>
            <div className='account'>
                <h3>My Account</h3>
                <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Cart</li>
                    <li>shipping</li>
                    <li>return</li>
                </ul>
            </div>
            <div className='page'>
                <h3>Pages</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Terms & Condition</li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer