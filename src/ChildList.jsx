import React, {Component} from "react";

class ChildList extends Component {

    constructor(props) {
        super(props);
        this.handlePop = this.handlePop.bind(this);
    }


    handlePop(key, required) {
        if(required) {
            alert('This is a mandatory item, It cannot be deleted.');
            return;
        }
        this.props.popUpFunction(key);
    }

    render() {
        return (
            <div>
            <ul>
                {this.props.members.filter((x) => {
                    return x.filter === this.props.filterKey;
                }).map(
                    (value, index) => {
                          
                           return <li onClick={() => this.handlePop(value.root, value.required)}  key={index} value={value.display}>{value.display}</li>
                    }    
                )}               
            </ul>

             
            </div>
        );
    }
}

export default ChildList;