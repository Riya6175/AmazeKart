
import React from 'react'
import Layout from '../../components/layout'

function home(props) {
    return (
        <Layout>
            <div  style={{background: "#E5E7EB", margin:"5%", padding:"3%"}}>
                <center>
                    <h1> Welcome To the AmazeKart</h1>
                    <h2> This Is Admin Dashboard</h2>
                    <h4> Admin have the rights to add and delete the categories 
                    from here. 
                    </h4>
                </center>
            </div>  
        </Layout>
    )
}

export default home
