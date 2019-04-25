import React from 'react';

function Person({person}) {

    return (<div>  <p>Hello, {person.name} your skill is {person.skills}!</p></div>);
}
export default Person;