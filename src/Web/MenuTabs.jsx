import React,{useState,useEffect} from 'react';
import '../App.css';

function MenuTabs(props) {
    const [txtColor, setTextColor] = useState('#C4C4C4');
    const [backColor, setBackColor] = useState('#FFFFFF');

 

        useEffect(() => {
            if(props.id==props.enable){
                setBackColor('#072C5E')
                setTextColor('#FFFFFF')
                props.headline(props.text)
            }
            else{
                setBackColor('#FFFFFF')
                setTextColor('#C4C4C4')
                
            }
          },[props.enable]);
        

    
    return (
        <div className='MainTab' style={{backgroundColor:backColor}} onClick={props.click}>
            <img className='MainImageTabs' src={props.img}></img>
            <span className='MainTabsText' style={{color:txtColor}}>{props.text}</span>
        </div>
    );
}

export default MenuTabs;