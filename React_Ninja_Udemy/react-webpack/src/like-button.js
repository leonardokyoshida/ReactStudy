'use strict'

import React from 'react'
import Button from './button'

const LikeButton = ({ color }) => (
    <Button
        handleClick={()=>{alert('like')}}
        style={{
            background: color,
            fontSize: 34,
            color: 'orange'
        }}>
        Curtir
    <span> ()</span>
    </Button>
)

LikeButton.defaultProps = {
    color: 'blue'
}
export default LikeButton;