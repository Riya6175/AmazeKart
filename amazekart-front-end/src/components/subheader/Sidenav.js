import React, {useState, useEffect} from 'react';
import SideNavContent from './SideNavContainer';
import SubContainer from './SubContainer';
import {Transition} from 'react-transition-group';
import {useAmazonContext} from '../../Context/AmazonContext';
import CloseIcon from '@material-ui/icons/Close';

export default function Sidenav(props) {
    const {subContainer, setSubContainer} = useAmazonContext();

    return (
        <div className='sidenav' style={props.state === "entering" ? {animation: "moveSideBar .3s forwards"} : props.state === "entered" ?
        {transform: "translateX(-0px)"} : {animation: "moveSideBar .3s reverse backwards"}} >
            <div className="sidenavHeader">
            Hello, Sign In
            </div>
            <Transition
            in={!subContainer}
            timeout={300}
            unmountOnExit
            mountOnEnter>
            {state => (
                <SideNavContent state={state} />
            )}
            </Transition>
            <Transition
            in={subContainer}
            timeout={300}
            unmountOnExit
            mountOnEnter>
            {state => (
                <SubContainer state={state} setSubContainer={setSubContainer} />
            )}
            </Transition>
        </div>
    )
}
