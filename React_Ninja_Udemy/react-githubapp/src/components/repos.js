'use strict'

import React, {PropTypes} from 'react'

const Repos = ({ className, title, repos }) => (
    <div className={className}>
        <h1>{title}</h1>
        <ul>
            {repos.map((repo) => (
                <li key={repo.id}>
                    <a href={repo.link}>{repo.name}</a>
                </li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps = {
    className:'',
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos:  PropTypes.array
}
export default Repos