import './App.css';
import './Movie.css';
import React, { Component } from 'react';
import Movie from './Movie';
import axios from "axios";


class App extends Component{
  state={
    isLoading: true,
    movies:[]
  };

  getMovies= async ()=>{
    const {data:{data:{movies}}}=
    await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    console.log(movies[0].id);
    this.setState({movies, isLoading:false});

  }
  componentDidMount(){
    this.getMovies();

  }

  render(){
      const { isLoading,movies }=this.state;
    return(
      <section className="container">
          <div>
            {isLoading ? (
              <div><h2>Loading...</h2></div>
            ):(
              <div className="movies">
                {movies.map((movie)=>{
                    console.log(movie.id);
                    console.log(movie.year);
                  return(
                    <Movie 
                    key={movie.id}
                    year={movie.year}
                    title={movie.title}
                    summary={movie.summary}
                    poster={movie.medium_cover_image}
                    genres={movie.genres}
                    />
                  )

                })}

              </div>

            )}
            
              
          </div>

      </section>
    )
  }
}


export default App;
