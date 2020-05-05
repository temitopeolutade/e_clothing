import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();

        this.state ={
            sections:[{
                title : 'hats',
               imageUrl: 'https://ibb.co/0rbgYZ6',
                id: 1
            },
            {
                title : 'jackets',
                imageUrl: 'https://ibb.co/LpDKFgv',
                id: 2
            },
            {
                title : 'sneakers',
                imageUrl: 'https://ibb.co/581mw46',
                id: 3
            },
            {
                title : 'womens',
                imageUrl: 'https://ibb.co/3vDfjvQ',
                size:'large',
                id: 4
            },
            {
                title : 'mens',
                imageUrl: 'https://ibb.co/qkD3gnZ',
                size:'large',
                id: 5
            }

            ]
        }
    }
  

render(){
    return(
        <div className='directory-menu'>
            {this.state.sections.map(({title,imageUrl,id,size}) =>(

                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            
            ))}

        </div>
    )
}

}

export default Directory;