import React from 'react';
import Input from './Input';

const Form = props => {
  return(
    <div className="card mb-5 pb-5">
      <div className="card-header">
        <div className="d-flex align-items-center justify-content-between">
          <h5 className="mb-0">Change Description</h5>
          <a onClick={props.toggle} href="/" className="text-danger">Toggle Description</a>
        </div>
      </div>
      <div className="card-body">
        <form>
          <Input change={props.change} inputValue={props.inputValue} />
        </form>
      </div>
    </div>
  );
}

export default Form;