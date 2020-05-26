# SARS-COV-2
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
6. /:genre/showByGenre
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

# testing
---- used mocha as a server and chai for assertion library
3 tests :- 
1. to check for /register-patients
2. to check for /patients/:id/create-report
3. to check for /patients/:id/all-reports
all three are authenticated use token to authorise.
obtain the token by registering the doctor in test DB itself and then login and get the token
paste it in registerPatient.js file
------ clearing the test database beforehand everytime tests are ran-------