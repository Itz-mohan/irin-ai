import React from 'react';

import '../styles/header.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='title'>Irin</div>
        <div className='title1'>company</div>
        <div className='title2'>help</div>

        <div className='web-logo'>
          <img src='/logos/Group-1.svg' />
        </div>
        <div className='web'>En</div>

        <div className='product-logo'>
          <img src='/logos/Group-2.svg' />
        </div>
        <div className='product'>Product</div>

        <div className='login'>Login</div>

        <button className='sign-up'>Sign Up</button>
      </div>
    </div>
  );
}
