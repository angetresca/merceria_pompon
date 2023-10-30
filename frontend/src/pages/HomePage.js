import React from 'react';
import pompon_grande from '../assets/pompon_grande.jpeg';
import '../assets/css/HomePage.css';

function Home() {
    return (
        <div className='HomePage'>
            <img className='pompon_grande_img' src={pompon_grande} alt="Pompon Grande" />
        </div>
    );
}

export default Home;
