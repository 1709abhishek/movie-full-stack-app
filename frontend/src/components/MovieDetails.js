import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export class MovieDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataOne: {
                movies: {

                }
            },
            delete: false
        }
    }


    componentDidMount() {
        if (this.state.stopUpdating) {
            const url = `http://localhost:8000${this.props.location.pathname}`;
            fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            })
                .then(response => response.json())
                .then((data) => {
                    console.log('data', data)
                    if (data) {
                        console.log("success")
                        this.setState({
                            dataOne: data,
                            stopUpdating: false
                        })
                        return;

                    }
                    console.log("failure")
                })
        }
    }

    handleMovieDelete = (e) => {
        console.log(this.props.location.pathname.split('/')[1]);
        const url = `http://localhost:8000/${this.props.location.pathname.split('/')[1]}/${this.props.location.pathname.split('/')[2]}/delete`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
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
        this.setState({
            delete: true
        })
    }

    render() {
        console.log("dataone iss new", this.state.dataOne)
        return (
            <div>{
                this.state.delete ? <h1>deleted</h1> :
                    <div className="movie-page">
                        <h1>Movie Title</h1>
                        <h3><div className="black-color">{this.state.dataOne.movies.title}</div></h3>
                        <h1>Movie Year</h1>
                        <h3><div className="black-color">{this.state.dataOne.movies.year}</div></h3>
                        <h1>Movie director</h1>
                        <h3><div className="black-color">{this.state.dataOne.movies.director}</div></h3>
                        <div className="delete"><button onClick={this.handleMovieDelete}><DeleteIcon /></button></div>
                    </div>}</div>
        )
    }
}

export default MovieDetails
