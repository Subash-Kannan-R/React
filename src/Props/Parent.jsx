import React from 'react';
import Child from './Child';


const Parent =() => {
  return (
    <div>
      <Child name="Alice" />
      <Child name="Bob" />
      <Child name="Charlie" />
    </div>
  );
}

export default Parent;