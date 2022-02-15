import React from "react";
import './cardlist-style.css'

import Card from '../card/Card'

function CardList(props) {
    return (
        <div className="card-list">
            {props.usersData.map((user) => <Card key={user.id} user={user} /> )} 
        </div> 
     )
}   
  
export default CardList;

// props -- properties

// class CardList extends React.Component {
//     render() {
//         return (
//            <div>
//                {this.props.usersData.map((user) => <h1 key={user.id}>{user.name}</h1>)} 
//            </div> 
//         )
//     }
// }