import React from 'react';
import Search from '../Images/search.svg'
import '../App.css';
function Headerline(props) {
    return (
        <div className='MainHeadline'>
            <span className='MainHeadlineText'>{props.headline}</span>
            <img src={Search} className='MainHeadlineSearchIcon'/>
            <input src={Search} type='text' placeholder='Αναζήτηση υλικού, έλεγχος αποθεμάτων' className='MainHeadlineInput'/>
        </div>   
        
    
    );
}

export default Headerline;