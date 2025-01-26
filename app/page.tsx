import React from 'react';

const WelcomePage: React.FC = () => {
  return (
    <div>
      <h1 className='font-bold'>Welcome to my website</h1>
      <p className='mt-4 font-bold'>Click on the Blockbuster Chat V3 link to get started.</p>
      <p className='mt-4'>
        Follow me on Instagram: 
        <a 
          href="https://www.instagram.com/dominiquereyntjens" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline ml-1"
        >
          @dominiquereyntjens
        </a>
      </p>
    </div>
  );
}

export default WelcomePage;