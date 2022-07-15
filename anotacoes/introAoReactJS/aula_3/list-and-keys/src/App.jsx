import React from "react";

const listCustomer = [
  {
    id: 1,
    name: 'Matheus Prates',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Bill Gates',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Steve no Jobs',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'Pedrinho',
    skills: ['Reason']
  }
]

const App = () => {

  const renderCustomers = (customer, index) => {
    return (
      <div key={`customer-${customer.id}`}>
        <li>{customer.name}</li>
        {customer.skills.map(renderSkills)}
      </div>
    )
  }

  const renderSkills = (skill, index) => {
    return (
      <div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
        <li>{skill}</li>
      </div>
    )
  }

  return (
    <div>
      <p>Matheus Prates</p>
      <p>Hi there</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;