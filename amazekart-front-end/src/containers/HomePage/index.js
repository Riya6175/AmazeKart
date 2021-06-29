import React,{useState} from 'react'
import {Transition} from 'react-transition-group'
import Header from '../../components/Header'
import SubHeader from '../../components/subheader'
import Sidenav from '../../components/subheader/Sidenav'
import MenuHeader from '../../components/subheader2'
import { AmazonContextProvider } from '../../Context/AmazonContext';

export default function HomePage(props) {

    return (
        
        <div>
            <Header/>
            <SubHeader/>
            <MenuHeader/>
        </div>
        
        
    )
}
