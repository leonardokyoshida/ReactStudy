'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: null,
            repos: [],
            starred: []
        }
    }
    addBar(text) {
        return `/${text}`
    }
    getGitHubApiUrl(username, type) {
        const internalUser = username ? this.addBar(username) : ''
        const internalType = type ? this.addBar(type) : ''

        return `https://api.github.com/users${internalUser}${internalType}`
    }
    handleSearch(e) {
        const keyCode = e.which || e.keyCode
        const ENTER = 13

        if (keyCode === ENTER) {
            const value = e.target.value
            ajax().get(this.getGitHubApiUrl(value))
                .then((result) => {
                    this.setState({
                        userinfo: {
                            username: result.name,
                            repos: result.public_repos,
                            followers: result.followers,
                            following: result.following,
                            photo: result.avatar_url,
                            login: result.login
                        },
                        repos: [],
                        starred: []
                    })
                })
        }
    }
    getRepos(type) {
        return (e) => {
            const user = this.state.userinfo.login
            ajax().get(this.getGitHubApiUrl(user, type))
                .then((result) => {
                    this.setState({
                        starred: [],
                        repos: [],
                        [type]: result.map((repo) => ({
                            name: repo.name,
                            id: repo.id,
                            link: repo.html_url
                        }))
                    })
                })
        }
    }
    render() {
        return (
            <AppContent
                userinfo={this.state.userinfo}
                repos={this.state.repos}
                starred={this.state.starred}
                handleSearch={(e) => this.handleSearch(e)}
                getRepos={this.getRepos('repos')}
                getStarred={this.getRepos('starred')}
            />
        )
    }
}

export default App