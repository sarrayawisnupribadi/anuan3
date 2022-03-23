import React from 'react'
import Main from './main'
import Navbar from './components/navbar';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <Main/>
            </div>
        )
    }
}