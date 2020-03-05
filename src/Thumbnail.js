import React from 'react'; // Import the Component component from React
import './Thumbnail.css';

function Thumbnail(props) {
    return (
        <div class="col-md-6">
            <img src={props.image} alt={props.name} />
            <div class="middle">
                <h1>{props.name}</h1>
    <div class="text">{props.text}</div>
                <a href={props.link} target="_blank" class="card-link">Link</a>
                <a href={props.github} target="_blank" class="card-link">Github</a>
            </div>
        </div>
    );
}

export default Thumbnail;