import React from 'react';
import Person from './Person';
function Greet() {
  const greeting = 'Hello Function Component!';
  const persons = [
    {
      id: 1,
      name: 'jaishree',
      skills: 'React'
    },
    {
      id: 2,
      name: 'vandana',
      skills: 'React-Native'
    }
  ]
  const personList =
    persons.map((person) => (
      <Person key =  {person.id} person={person} />
    ))

  return (<div>
    {personList}
  </div>);
}

export default Greet;