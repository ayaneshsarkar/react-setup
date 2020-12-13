import React, { useEffect, useRef } from 'react';

const Jumbotron = props => {
  const btnRef = useRef(null);

  // Component Did Mount in Functional Component
  useEffect(() => {
    // console.log('Component Mounted!');
    btnRef.current.click();
    // Component Will Unmount
    return () => console.log('Component Will Unmount!');
  }, []);

  // Component Did Update in Functional Component (Nearly)
  useEffect(() => {
    // console.log('Description Mounted or Changed!');
  }, [props.desc]);

  return (
    <div className="jumbotron mb-5">
      <h1 className="display-4 text-center mb-3">{props.title}</h1>
      <p className="lead text-center mb-3">{props.desc}</p>
      <p class="lead text-center">
        <a ref={btnRef} onClick={props.handleClick} class="btn btn-primary btn-lg" href="/">
          Try Out
        </a>
      </p>
    </div>
  );
}

export default Jumbotron;