import React from 'react';

const Jumbotron = props => {
  return (
    <div className="jumbotron mb-5">
      <h1 className="display-4 text-center mb-3">{props.title}</h1>
      <p className="lead text-center mb-3">{props.desc}</p>
      <p class="lead text-center">
        <a onClick={props.handleClick} class="btn btn-primary btn-lg" href="/" role="button">Try Out</a>
      </p>
    </div>
  );
}

export default Jumbotron;