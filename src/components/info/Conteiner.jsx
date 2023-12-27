import React from 'react';
import './ConteinerStyle.scss'

const Conteiner = ({time,img,glawnoe,kanal,views,description}) => {
    return (
        <div className='conteiners'>
            <div className="Conteiner">
                <div className="Img">
                    <img src={glawnoe} alt="" />
                    <span>{time}</span>
                </div>
                <div className="foot">
                <img src={img} alt="" />
                    <div className="rex">
                        <p id='kanal'>{kanal}</p>
                        <p id='des'>{views}</p>
                        <p id='des'>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conteiner;
