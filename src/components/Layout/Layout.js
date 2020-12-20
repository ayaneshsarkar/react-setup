import React from 'react';
import Aux from './../../hoc/Auxilary';

const layout = props => (
  <Aux>
    <div className="">Header</div>
    <main className="p-3">{ props.children }</main>
  </Aux>
);

export default layout;