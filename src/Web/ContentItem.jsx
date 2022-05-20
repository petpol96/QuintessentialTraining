import React from 'react';
import './Css/MainContent.css'

import { ReactComponent as Ellipse } from '../Images/Ellipse.svg';
function ContentItem(props) {
    return (
        <div className='ContentItem'>
        <Ellipse className='ContentItemCircle' style={{ color: props.clr }} />
        <div className='ContentItemTextBox'>
            <span className='ContentItemHeader'>{props.title}</span>
            <span className='ContentItemComment'>{props.comment}</span>
        </div>
        
    </div>
    );
}

export default ContentItem;