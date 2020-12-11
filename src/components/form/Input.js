import React from 'react';

const Input  = props => {
  return (
    <div className="form-group p-3">
      <label htmlFor="desc">Desc <span className="text-danger">*</span></label>
      <input className="form-control form-control-lg" onChange={props.change} type="text" name="desc" 
      placeholder="Enter Description"
      defaultValue={props.inputValue} />
    </div>
  );
}

export default Input;