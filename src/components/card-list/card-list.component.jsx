import { Component } from "react";

import Card from "../card/card.components";

import './card-list.styles.css';


class CardList extends Component{
    render(){
        const {monsters} = this.props; 
        return (
            <div className="card-list">
            {monsters.map(e => {
                const {id, name, email} = e;
                return (
                <Card monster={{id:id, name:name, email:email}}/>
                );
            })
            }
            </div>
        );
        
    }
}
export default CardList;