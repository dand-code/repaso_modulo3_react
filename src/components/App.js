import React from 'react';
import clubs from '../data/data.json';
import ClubList from './ClubList';


class App extends React.Component {
  
  render() {
    console.log(clubs);
    return (
      <div className="page">
        <ClubList clubs={clubs}/>
      </div>
    );
  }
}

export default App;