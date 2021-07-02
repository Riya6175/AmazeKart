import React from 'react'
import Header from '../Header'
import MenuHeader from '../subheader2'
import SubHeader from '../subheader'

export default function Layout(props) {
    return (
        <>
            <Header/>
            <SubHeader/>
            <MenuHeader/>
            {props.children}
        </>
    )
}
