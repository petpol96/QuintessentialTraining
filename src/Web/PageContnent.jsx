import React from 'react';
import ContentItem from './ContentItem';

import './Css/MainContent.css';


function PageContnent(props) {
    return (
        <div className='ContentBox'>
            <div className='ContentItemContainer'>
                <ContentItem clr='#C2566D' title='ΕΞΑΓΩΓΗ' comment='Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη' />
                <ContentItem clr='#F0C17D' title='ΜΕΤΑΚΙΝΗΣΗ' comment='Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη' />
                <ContentItem clr='#2BC3A7' title='ΕΙΣΑΓΩΓΗ' comment='Εξαγωγή υλικών ή ρεταλιών απο την αποθήκη' />
            </div>
            
        </div>
    );
}

export default PageContnent;