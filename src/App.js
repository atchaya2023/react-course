import { Component } from "react";
import axios from "axios"
import { BrowserRouter, Routes } from "react-router-dom";
//import home from "./home";
//import about from "./about";
//import contact from "./contact";
import Counter from "./redux/counter";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
    return (
        <div className="app">
            { }
            { }
            <Provider store={store}>
                <counter />
            </Provider>

        </div>
    )
}
//class ClassExample extends Component {
    //constructor() {
       // super()
        //this.state = {
           // data: []
        //}
    //}
   // changeholder() {
       // this.setState({
            //data: "welcome"
       // })
   // }
   // componentDidMount() {
       // axios.get("https://jsonplaceholder.typicode.com/users")
        //.then((res)=>{
            //this.setState({
                //data:res.data
          // })
      // })
        //.catch(()=>{
           // this.setState({
//data:[]
          //  })
        //})//
    //}
      //  render() {
          //  return <>
              //  {/* <h1> {this.state.data} </h1> */}
               // {
                //    this.state.data.map((ele)=>{
                  //      return <p>{ele.id} {ele.username}</p>
                  //  })
              //  }
               // <button onClick={() => this.changeholder()}> button </button>
          //  </>

       // }
   // }
export default App;