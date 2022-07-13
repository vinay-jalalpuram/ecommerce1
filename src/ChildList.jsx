import React, {Component} from "react";

class ChildList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <ul>
                {this.props.members.filter((x) => {
                    return x.filter === this.props.filterKey;
                }).map(
                    (value, index) => {
                           console.log(value + ' : ' + index); 
                           return <li  key={index} value={value.display}>{value.display}</li>
                    }    
                )}               
            </ul>

             <button onClick={() => this.props.popUpFunction(this.props.filterKey)}> Pop List1 </button>       
            </div>
        );
    }
}

export default ChildList;