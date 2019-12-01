'use strict'

import React from 'react'

const Button = ({ children, style, handleClick }) => (
    <button
        style={style}
        onClick={handleClick}
    >
        {children}
    </button>
)

Button.propTypes = {
 handleClick:  React.PropTypes.func.isRequired
}
export default Button

