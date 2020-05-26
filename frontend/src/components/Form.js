import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { addMovie } from '../actions/posts';
import { getFormBody } from '../helpers/utils'


class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            year: 0,
            director: ""
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        const { title, director, year } = this.state;

        if (title && year && director) {
            console.log("*****", this.props.location.pathname)
            const url = `http://localhost:8000${this.props.location.pathname}/create`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: getFormBody({ title, year, director }),
            })
                .then(response => response.json())
                .then((data) => {
                    console.log('data', data)
                    if (data) {
                        console.log("success")
                        return;
                    }
                    console.log("failure")
                })

        }
    }

    handleTitleChange = (e) => {
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    handleYearChange = (e) => {
        e.preventDefault();
        this.setState({
            year: e.target.value
        })
    }

    handleDirectorChange = (e) => {
        e.preventDefault();
        this.setState({
            director: e.target.value
        })
    }



    render() {

        return (

            <div>
                <form className="login-form">
                    <span className="login-signup-header">Add Movie</span>
                    <div className="field">
                        <input
                            type="text"
                            placeholder="Title"
                            required
                            onChange={this.handleTitleChange}
                            value={this.state.title}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="year"
                            placeholder="year"
                            required
                            onChange={this.handleYearChange}
                            value={this.state.year}
                        />
                    </div>
                    <div className="field">
                        <input
                            type="director"
                            placeholder="director"
                            required
                            onChange={this.handleDirectorChange}
                            value={this.state.director}
                        />
                    </div>
                    <div className="field">
                        <button onClick={this.handleFormSubmit} >Add Movie</button>
                    </div>
                </form>
            </div >
        )
    }
}

export default Form;