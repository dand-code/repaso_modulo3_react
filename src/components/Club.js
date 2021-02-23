

const Club = (props) => {
    const itemMembers = props.pepino.members.map((member, i) => {
        return (
            <li key={i}>
                {member}
            </li>
        )
    });
    return(
            <article>
                <h2>{props.pepino.name}</h2>
            <i className={props.pepino.fa}></i>
            <h4>Members:</h4>
            <ul>
                {itemMembers}
            </ul>
            </article>
       
    )
} 

export default Club;