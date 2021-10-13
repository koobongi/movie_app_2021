import React from "react"
import axios from "axios"
import Movie from "./Movie"

class App extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }

    getMovies = async () => {
        const {
            data: {
                data: {movies}
            }
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json')
        // const movies 
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovies()
    }
    render() {
        const { isLoading, movies } = this.state
        return (
            <section class='container'>
                { isLoading ?(
                    <div class='loader'>
                        <span class='loaderText'>Loading...</span>
                    </div>
                ) : (
                  <div>
                      {
                         movies.map((movie) => {
                             console.log(movie);
                             return (
                                <Movie
                                  key = {movie.id}
                                  id = {movie.id}
                                  year = {movie.year}
                                  title = {movie.title}
                                  summary = {movie.summary}
                                  poster = {movie.poster} 
                                />
                )})}    
                  </div>
                )}
                </section>
        )
    }
}

export default App