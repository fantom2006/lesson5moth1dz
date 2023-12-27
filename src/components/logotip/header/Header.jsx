import React from 'react';
import {useState} from 'react'
import './HeaderStyle.css'
const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // Дополнительные действия при нажатии на кнопку
  };
    return (
       <span className="cont">
         <span className='Header'>
         
         <button  className={activeButton === 'All' ? 'active' : ''}
          onClick={() => handleButtonClick('All')}>All</button>
         <button className={activeButton === 'Gaming' ? 'active' : ''}
          onClick={() => handleButtonClick('Gaming')}>Gaming</button>
         <button className={activeButton === 'Live' ? 'active' : ''}
          onClick={() => handleButtonClick('Live')}>Live</button>
         <button className={activeButton === 'Music' ? 'active' : ''}
          onClick={() => handleButtonClick('Music')}>Music</button>
         <button className={activeButton === 'Mobie' ? 'active' : ''}
          onClick={() => handleButtonClick('Mobie')}>Mobie Legeds:Bang Bang</button>
         <button className={activeButton === 'Indie' ? 'active' : ''}
          onClick={() => handleButtonClick('Indie')}>Indie Music</button>
         <button className={activeButton === 'Playlist' ? 'active' : ''}
          onClick={() => handleButtonClick('Playlist')}>Playlist</button>
         <button className={activeButton === 'Grammar' ? 'active' : ''}
          onClick={() => handleButtonClick('Grammar')}>Grammar</button>
         <button className={activeButton === 'React' ? 'active' : ''}
          onClick={() => handleButtonClick('React')}>React routers</button>
         <button className={activeButton === 'Amw' ? 'active' : ''}
          onClick={() => handleButtonClick('Amw')}>Amw</button>
        <div className="y">
            
        </div>
        </span>

       </span>

    );
}

export default Header;
