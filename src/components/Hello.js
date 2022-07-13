import React from 'react';

const Hello = (props) => {
    console.log(props)
    return (
    <div>
         <h1>Hello {props.children}</h1>
      </div>
    );


   //without jsx
   //return  React.createElement('div', null, React.createElement('h1', null, 'Hello Vinay from non jsx'));   
}

export default Hello;