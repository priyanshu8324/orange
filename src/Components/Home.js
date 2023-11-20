import React from 'react';
import OrangeImage from './cat is cat.jpeg';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '36px' }}>Welcome to Orange Delights</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
        Discover the juiciest and most delicious oranges brought to you by Orange Delights. Our oranges are handpicked for their freshness and flavor, ensuring a delightful experience with every bite.
      </p>
      
      <img src={OrangeImage} alt="Oranges" style={{ maxWidth: '30%', marginTop: '20px' }} />

      <div style={{ marginTop: '40px', backgroundColor: '#ffcc80', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{ color: '#ff6600', marginBottom: '20px', fontSize: '28px' }}>Why Choose Orange Delights?</h2>
        <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'left' }}>
          <li style={{ marginBottom: '10px', fontSize: '18px' }}>Premium quality, handpicked oranges</li>
          <li style={{ marginBottom: '10px', fontSize: '18px' }}>Freshness guaranteed for every order</li>
          <li style={{ marginBottom: '10px', fontSize: '18px' }}>Sourced from the finest orchards</li>
          <li style={{ marginBottom: '10px', fontSize: '18px' }}>Delicious taste that will keep you coming back for more</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
