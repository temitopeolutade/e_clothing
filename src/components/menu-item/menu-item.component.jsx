import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl ,size}) => (

   <div 
    // style takes an object that has prop value to css values we might want to apply 
    className={`${size} menu-item`}>

    <div  
        className='background-image'  
        style ={{
       backgroundImage: `url(${imageUrl})` 
    }}
    />

    <div className='content'>

        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>

    </div>
</div>


);

export default MenuItem;