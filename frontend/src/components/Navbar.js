import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';


export default class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav className="nav">
                    <Link to="/"><HomeIcon /></Link>
                    <div className="icons">
                        <SearchIcon />
                        <AccountCircleIcon />
                    </div>

                </nav>
            </Router>
        )
    }
}
