![](MoviesApp.gif)

# Movie-full-stack-app
A full stack web application where user can create genre, movies update/delete movies,genre showall genre/movies with category as genre.



# dependencies used

1. express
2. nodemon
3. body-parser
4. cors
5. Mongoose



# Routes
1. /movies/create 
2. /movies 
3. /movies/:id/update 
4. /movies/:id/delete 
5. /movies/:id/show 
6. /movies/:genre/showByGenre
7. /genre/create
8. /genre
9. /genre/:id/update
10. /genre/:id/delete
11. /genre/:id/show

# setup
1. clone https://github.com/1709abhishek/movie-full-stack-app
2. cd movie-API
3. run nodemon index.js, port should be 8000
4. open postman and visit above routes
5. data models are:
--genre: name,movies array
--movie: title, year, director, genre refrence
6. go into frontend folder to see react app
7. cd frontend
8. npm start

# Project structure
.

    ├── index.js
    ├── package.json
    ├── config
        ├── mongoose.js
        
    ├── controllers
    |    ├── api
    |        ├── v1
    |            ├── movie_controller.js  
    |            ├── genre_controller.js  
  
    ├── models
        ├── movie.js
        ├── genre.js
    ├── routes
    |    ├── api
    |        ├── v1
    |            ├── index.js  
    |            ├── movies.js
                 ├── genres.js
    ├── frontend
    │   ├── public
    │   ├── src
    |        ├── components
    |            ├── App.js  
    |            ├── Form.js
                 ├── MovieDetails.js    
                 ├── Movie.js    
    ├── .gitignore

# Routes and body Table
Routes | Request Body | Method | Description | Response
|---|---|---|---|---|
| [/movies/:genre/showByGenre] | No | Get | show by genre movies  | Yes
| [/movies/:id/show] | No | Get | show movie | Yes
| [/movies/:id/delete] | No | delete | delete movie | Yes
| [/movies/:id/update] | (title, director, year) | PUT | update movie | Yes
| [/movies/create] | (title, director, year) | Post | create movie | Yes
| [/genre/] | No | get | get all genres |Yes
| [/genre/:id/show] | No | GET | show particular genre | Yes
| [/genre/:id/delete] | No | delete | delete genre | Yes
| [/genre/:id/update] | (name) | put | update genre | Yes
| [/genre/create] | (name) | post | create genre | Yes