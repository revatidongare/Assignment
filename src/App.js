import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MovieList from './Movies/MovieList';
import shawshank from './Movies/shawshank.jpg';
import godfather from './Movies/godfather.jpg';
import godfather2 from './Movies/godfather2.jpg';
import darkknight from './Movies/darkknight.jpg';
import angrymen from './Movies/angrymen.jpg';
import SchindlersList from './Movies/SchindlersList.jpg';
import pulpfiction from './Movies/pulpfiction.jpg';
import movielist from './Movies/MovieList';

class App extends Component{
  
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
      
    }));
  };

  handleDecClick = () => {
    this.setState(({ count }) => ({
      count: count - 1
      
    }));
  };
  render()
  {
    return(
      <div className="App">
        <p>Total Movies: 7 </p>
        <p>No of Movies Reserved :{this.state.count} </p>
       <MovieList
       img = {shawshank}
       title= "The Shawshank Redemption" 
       number="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." 
       onClick={this.handleClick}
       onClickk={this.handleDecClick}/>
      
      <MovieList
       img = {godfather}
       title= "The Godfather" 
      number="The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."
      onClick={this.handleClick}
      onClickk={this.handleDecClick}/>

       <MovieList 
        img = {godfather2}
        title= "The Godfather: Part II" 
       number="The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate."
       onClick={this.handleClick}
       onClickk={this.handleDecClick}/>
       
       <MovieList 
        img = {darkknight}
        title= "The Dark Knight" 
       number="When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice."
       onClick={this.handleClick}
       onClickk={this.handleDecClick}/>

      <MovieList 
       img = {angrymen}
       title= "12 Angry Men" 
      number="A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."
      onClick={this.handleClick}
      onClickk={this.handleDecClick}/> 

       <MovieList 
        img = {SchindlersList}
        title= "Schindler's List" 
       number="In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans."
       onClick={this.handleClick}
       onClickk={this.handleDecClick}/>

      <MovieList 
       img = {pulpfiction}
       title= "Pulp Fiction" 
      number="The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
      onClick={this.handleClick}
      onClickk={this.handleDecClick}/>

        </div>
    );
  }
}
export default App;
