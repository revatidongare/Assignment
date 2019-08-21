import React,{Component} from 'react';
import './MovieList.css';


const movielist = (props)=>{
   
        return(
            <div className="MovieList">
                <img src={props.img}/>
        <h5>{props.title}</h5>
        <p>{props.number}</p><br/>
     <button onClick={props.onClick}>Reserve</button>
     <button onClick={props.onClickk}>Return</button>
        
        </div>
        );
    
}

export default movielist;