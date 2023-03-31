import React from 'react';
import './Home.css';
import pic from '../../assets/img/Pages.png';
import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>
      <video autoPlay='autoplay' loop='loop' muted className='Video'>
        <source src={videoSource} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='Content'>
        <div className='SubContent'>
          <h1>Knowledge Awaits</h1>
          <p>Academic Materials of all Domains</p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
          <img src={pic} alt='profile' />
        </div>
      </div>
    </div>
  );
};

export default Home;