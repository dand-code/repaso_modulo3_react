import React from 'react';
import Club from './Club';

class ClubList extends React.Component {
  
    render() {
        console.log(this.props.clubs[0].name);
        const item = this.props.clubs.map((clubItem, i) => {
            return (
                <li key={i} id={i}>
                    <Club pepino={clubItem}/>
                </li>
            )
        });
    return (
      <div>
       <ul>
        {item}   
       </ul>
      </div>
    );
  }
}

export default ClubList;