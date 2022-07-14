import React from "react";
import ChildList from "./ChildList";

export  class DemoApp extends React.Component {


    constructor() {
        super();
        this.state = {
            list: [],
            name: 'Vinay Jalalpuram'
        }

       
    }

    componentDidMount() {

        console.log('CLASS >>>  Component mounted >>>> ');
        this.setState({list : [
            {root: "ch1", display:"Child 1 Value 1", filter: "1", required:true}, 
            {root: "ch2", display:"Child 1 Value 2", filter: "1"}, 
            {root: "ch3", display:"Child 1 Value 3", filter: "1"}, 
            {root: "ch4", display:"Child 1 Value 4", filter: "1"}, 
            {root: "ch5", display:"Child 2 Value 1", filter: "2", required:true}, 
            {root: "ch6", display:"Child 2 Value 2", filter: "2"}, 
            {root: "ch7", display:"Child 2 Value 3", filter: "2"}, 
            {root: "ch8", display:"Child 2 Value 4", filter: "2"}, 
            {root: "ch9", display:"Child 3 Value 1", filter: "3", required:true}, 
            {root: "ch10", display:"Child 3 Value 2", filter: "3"}, 
            {root: "ch11", display:"Child 3 Value 3", filter: "3"}, 
     ]});

     document.addEventListener('keypress', this.keyPressCounter);
    }

    componentWillUnmount() {
        console.log('CLASS >>>  Component Unmounted >>>> ');
        document.removeEventListener('keypress', this.keyPressCounter);
    }

    keyPressCounter = () => {
        console.log('CF: Key pressed ..');
    }

    handleClick() {
            console.log('Button clicked');
    }

    popTheList =  (key) => {
        //let exList = this.state.list.filter((x) => { return x.filter !== key});
        let popList = this.state.list.filter((x) => { return x.root !== key});
        //popList.pop();
        //this.setState({list: exList.concat(popList) });
        this.setState({list: popList });
    }

    render() {
        return <div style={{display: "flex"}}> CF
               <div><ChildList members={this.state.list} filterKey="1" popUpFunction={this.popTheList} ></ChildList></div>
               <div ><ChildList members={this.state.list} filterKey="2" popUpFunction={this.popTheList}></ChildList></div>
               <div><ChildList members={this.state.list} filterKey="3" popUpFunction={this.popTheList}></ChildList></div>
               </div>        
    }
}

export default DemoApp;