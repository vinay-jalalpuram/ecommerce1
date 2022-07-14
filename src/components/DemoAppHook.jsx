import React, {useState, useEffect} from 'react'
import ChildList from '../ChildList';

function DemoAppHook() {

  const[list, setList] = useState([]);
  const[name, setName] = useState('Vinay jalalpuram');
  const[show, setShow] = useState(false);

  useEffect(() => {
     // mount code to be executed
     console.log('FUNCTIONAL  Component mounted >>>> ');
     setList([
      {root: "ch1", display:"Child 1 Value 1", filter: "1", required:true}, 
      {root: "ch2", display:"Child 1 Value 2", filter: "1"}, 
      {root: "ch3", display:"Child 1 Value 3", filter: "1"}, 
      {root: "ch4", display:"Child 1 Value 4", filter: "1"}, 
      {root: "ch5", display:"Child 2 Value 1", filter: "2", required:true}, 
      {root: "ch6", display:"Child 2 Value 2", filter: "2"}, 
      {root: "ch7", display:"Child 2 Value 3", filter: "2"}, 
      {root: "ch8", display:"Child 3 Value 1", filter: "2"}, 
      {root: "ch9", display:"Child 3 Value 1", filter: "3", required:true}, 
      {root: "ch10", display:"Child 3 Value 2", filter: "3"}, 
      {root: "ch11", display:"Child 3 Value 3", filter: "3"} 
]);
  
    return () => {
       // unmount code
       console.log(' FUNCTIONAL Component Unmounted...');
    }
  }, []);
  

  const popTheList =  (key) => {
    //let exList = this.state.list.filter((x) => { return x.filter !== key});
    let popList = list.filter((x) => { return x.root !== key});
    //popList.pop();
    //this.setState({list: exList.concat(popList) });
    setList(popList);
}

  return (
        <div style={{display: "flex"}}> FC
        <div><ChildList members={list} filterKey="1" popUpFunction={popTheList} ></ChildList></div>
        <div ><ChildList members={list} filterKey="2" popUpFunction={popTheList}></ChildList></div>
        <div><ChildList members={list} filterKey="3" popUpFunction={popTheList}></ChildList></div>
        </div>        
     );
}

export default DemoAppHook;