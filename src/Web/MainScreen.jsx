import React,{useState} from 'react';
import '../App.css';
import Headerline from './Headerline';
import PageContnent from './PageContnent';
import SideBar from './SideBar';


function MainScreen(props) {

    const [headline, setheadLine] = useState('Loading...');
    return (
        <div style={{width:'1366px',height:'768px'}}>

            <SideBar headline={setheadLine}/>
            <div className='LineY' />
            <div className='LineX' />
            <Headerline headline={headline}/>
            <PageContnent/>


        </div>

        
    );
}

export default MainScreen;