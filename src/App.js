import React, {useState} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'



function App() {

  const [state, changeState] = useState({
    person: {name: 'Mike'}
  });

  const nameChangedHandler = (event) => {
    changeState({
      person: {name: event.target.value}
    });
  }

  const switchNameHandler = (newName) => {
    changeState({
      person: {name: newName}
    })
  }

  return (
    <div className="App">
      <h1>Hello!</h1>
      <UserInput changed={nameChangedHandler} click={switchNameHandler.bind(this, 'Ronald')} name={state.person.name}/>
      <UserOutput username={state.person.name}/>
      <UserOutput />
      <UserOutput />
    </div>
  );
}

export default App;
