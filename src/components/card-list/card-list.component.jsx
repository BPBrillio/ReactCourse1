import { Component } from "react";

class CardList extends Component{
    render(){
        const {monsters} = this.props; 
        return (
            <div>
            {monsters.map(e => {
                return (<h1 key={e.id}>{e.name}</h1>);
            })
            }
            </div>
        );
        
    }
}
export default CardList;