import React,{useState} from 'react';
import '../App.css';
import Logo from '../Images/Logo.svg'
import TableImg from '../Images/table.svg'
import MenuTabs from './MenuTabs';
import One from '../Images/one.svg'
import Two from '../Images/two.svg'
import Three from '../Images/three.svg'
import Four from '../Images/four.svg'
import Home from '../Images/Home.svg'
import Dots from '../Images/Dots.svg'
import Items from '../Images/items.svg'

function SideBar(props) {

    const [enableId, setEnableId] = useState(1);

    let enableHandler=(a)=>{
        setEnableId(a)
    }

    return (
    <div className='SideBar'>
                <div className='MainLogo'>
                    <img src={Logo}></img>
                    <span className='MainLogoText'>Warehouse management</span>
                    
                </div>
                <div className='MainLogoMenu'>
                    <img src={TableImg} ></img>
                    <span className='MainMenuText' >ΜΕΝΟΥ ΕΠΙΛΟΓΩΝ</span>
                </div>
                <div className='MainTabBox'>
                    <MenuTabs text='Κεντρική Σελίδα' click={()=>{setEnableId(1)}} id={1} enable={enableId} img={Home} headline={props.headline} />
                    <MenuTabs text='Αποθήκη 1' click={()=>{setEnableId(2)}} id={2} enable={enableId} img={One}  headline={props.headline}/>
                    <MenuTabs text='Αποθήκη 2' click={()=>{setEnableId(3)}} id={3} enable={enableId} img={Two}  headline={props.headline}/>
                    <MenuTabs text='Αποθήκη 3' click={()=>{setEnableId(4)}} id={4} enable={enableId} img={Three}  headline={props.headline}/>
                    <MenuTabs text='Αποθήκη 4' click={()=>{setEnableId(5)}} id={5} enable={enableId} img={Four} headline={props.headline}/>
                </div>

                <div className='MainLogoMenu' style={{top:'466px',}}>
                    <img src={TableImg}></img>
                    <span className='MainMenuText' >ΚΑΤΑΧΩΡΙΣΗ ΥΛΙΚΩΝ ΚΑΙ ΚΩΔΙΚΩΝ</span>
                </div>

                <div className='MainTabBox' style={{top:'501px'}}>
                    <MenuTabs text='Καταχώριση' click={()=>{setEnableId(6)}} id={6} enable={enableId} img={Dots} headline={props.headline}/>
                </div>

                <div className='MainLogoMenu' style={{top:'734px'}}>
                    <img src={Items}></img>
                    <span className='MainMenuText' >ΡΥΘΜΙΣΕΙΣ</span>
                </div>

            </div>
    );
}

export default SideBar;