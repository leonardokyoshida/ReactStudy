'use strict'

import React, { Component } from 'react'
// import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import Timer from './timer'

class App extends Component {
    constructor() {
        super()
        this.state = {
            value:'Valor iniciar'
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={(e)=>{this.setState({value:e.target.value})}} />
                </form>
            </div>
        )
    }
}

export default App