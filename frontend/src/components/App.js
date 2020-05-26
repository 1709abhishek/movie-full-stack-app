
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import Navbar from './Navbar';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import BackspaceIcon from '@material-ui/icons/Backspace';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import Form from './Form';
import Movie from './Movie';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showForm: false
    }
  }


  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleAddMovie = () => {
    this.setState({
      showForm: true
    })
  }

  handleBackspace = (e) => {
    e.preventDefault();
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render() {
    const { posts } = this.props;
    console.log('PROPS is', this.props);
    console.log(posts);
    return (
      <div>
        <Navbar />
        <Router>
          <div className="movie-container">
            {posts.map(post => (
              < div className="genre-container" >
                {this.state.showForm ? null :
                  <div>
                    <div className="genre-name">
                      <div className="genre-name-title">
                        {post.name}
                      </div>
                      <div className="add-button">
                        <Link to={`/movies/${post.name}`} > <button onClick={this.handleAddMovie}>
                          <AddCircleIcon /></button></Link>
                      </div>

                    </div>
                    <div>
                      <Movie genre={post.name} />
                    </div></div>}


                {/* <div>
                  {this.state.showForm ? <div><button onClick={this.handleBackspace}><BackspaceIcon /></button><Route path={`/movies/${post.name}`} component={Form} /> </div> : null}

                </div> */}
                <Route path={`/movies/${post.name}`} component={Form} />
              </div>

            ))}

          </div>
        </Router>

      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
export default connect(mapStateToProps)(App);
