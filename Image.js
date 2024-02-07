//following a tutorial from create-react-app.dev 

import React from 'react';
import Garden from './Gardens.png';
import './image.css';

console.log(Garden);

function LaurelImg(){
    return <img src={Garden} alt = "Laurel in front of her plot" />;
}
export default LaurelImg;