import React, { useState } from 'react';
import '@/components/flipcard.css'; 
import heroImage from '@/assets/images/hero_image.jpg';

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="flip-card-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          <img src={heroImage.src} alt="Front" className='border rounded-xl '/>
        </div>
        <div className="flip-card-back border rounded-xl overflow-clip text-stone-900" >
          <h2 className='text-2xl mb-8 font-extrabold'>Education</h2>
          <p className='text-sm font-base'>
            &bull; Bachelor of Technology CSE <br></br> Amrita Vishwa Vidyapeetham, Chennai<br></br> 2024 - 2028<br></br>
            Current CGPA: 8.94<br></br><br></br>
            &bull; Intermediate (PUC) <br></br> Ascent Classes, Visakhapatnam<br></br> 2022 - 2024<br></br>
            CGPA: 9.59<br></br><br></br>
            &bull; Standard X (SSC) <br></br> Sri Chaitanya School, Visakhapatnam<br></br> 2021 - 2022<br></br>
            CGPA: 9.71
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
