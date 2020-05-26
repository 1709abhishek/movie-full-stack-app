import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';

export class Movie extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataOne: {
                movies: [

                ]
            },
            showMovie: false,
            stopUpdating: true
        }
    }


    componentDidMount(props) {
        const url = `http://localhost:8000/movies/${this.props.genre}/showByGenre`;
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
                        dataOne: data.movies
                    })
                    return;

                }
                console.log("failure")
            })
    }

    handleMovieDetails = (e) => {

        this.setState({
            showMovie: true,
            stopUpdating: false
        });

    }



    render() {
        console.log("dataOne", this.state.dataOne);
        const x = this.state.dataOne;
        return (
            <Router>
                <div className="movie-list">
                    {x.movies.map(p => (
                        <div>
                            {this.state.showMovie ? null : <div>
                                <Link to={`/movies/${p._id}/show`} >
                                    <div className="movie-queue">
                                        <div className="movie-poster">
                                            <button onClick={this.handleMovieDetails}><div><img src="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fscottmendelson%2Ffiles%2F2019%2F03%2FPayoff_1-Sht_Online_v6_Domestic_Lg-1200x675.jpg" className="image"></img></div></button>
                                            <div className="black-color">{p.title}</div>
                                        </div>
                                    </div></Link></div>}


                            <Route path={`/movies/${p._id}/show`} component={MovieDetails} />
                        </div>
                    ))}

                </div>
            </Router>
        )
    }
}

export default Movie
