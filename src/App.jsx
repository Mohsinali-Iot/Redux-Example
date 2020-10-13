// import React from 'react';
// import {Header,Logos} from './component/Header';
// import Footer from './component/Footer';
// import './App.css';
// import BasicTextFields from './component/textfield'



// class Header extends React.Component{
//   render(){
//     return(
//       <div className="header">
//         <h1>Header</h1>
//       </div>
//     )
//   }
// }

// class App extends React.Component{
//   render(){
//     let name="Mohsin"
//     let lname="Ali"
//     let arr=[1,2,3,4,5]
//     return(
//       // <div>
//       //   <h1>{`${name} ${lname}`}</h1>
//       //   <h1>{arr}</h1>
//       // </div>
//       <div>
//         {/* component */}
//         <Header/>
//         <h1 style={{color:'red'}}>Main Body</h1>
//         <button type="button" className="btn btn-primary">Primary</button>
//         <BasicTextFields/>
//         <Logos/>
//         <Footer/>
//       </div>
//     )
//   }
// }


// For State

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Mohsin",
//       email:"mohsin@gmail.com",
//       // value:"",     //work for non real time
//     }
//     this.set_name=this.set_name.bind(this)  //bind method
//   }
//   // set_name(){
//   //   console.log(this.state.name)

//   // }
//   //gives error to correct this use arrow function or use bind method with 
//   // simple function

  
//   // it will now take this of parent
//   //arrow function

//     set_name=()=>{
//       this.setState({
//         name:this.state.value
//       })
//     }
//     get_name=()=>{
//       console.log(this.state.name)

//     }
//     changed=(data)=>{
//       this.setState({
//         [data.target.name] : data.target.value,
//         // email:data.target.value,
//       })
//     }


//   render(){
//     return( 
//       <div>
//         <h2>My name is {this.state.name}</h2>
//         <h2>My email is {this.state.email}</h2>
//         {/* work on realtime */}
//         <input name="name"  onChange={(e)=>this.changed(e)} type="text" placeholder="Enter name"></input>
//         <input name="email" onChange={(e)=>this.changed(e)} type="text" placeholder="Enter email"></input>
//         {/* work only when we click set_name button */}
//         {/* <input onChange={(e)=>this.setState({value:e.target.value})} type="text" placeholder="Enter value"></input> */}
//         <button onClick={this.set_name}>SetName</button>
//         <button onClick={this.get_name}>GetName</button>
//       </div>

//     )
//   }
// }

// export default App;












// Props

// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={
//       name:"Mohsin",
//       email:"mohsin@gmail.com",
//       value:""
//     }
//   }
//   changed=(e)=>{
//     this.setState({
//       [e.target.name]:e.target.value,
//     })
//   }
//   set_name=()=>{
//     this.setState({
//       name:this.state.value,
//     })
//   }

//   get_props=(props)=>{
//     console.log(props)

//   }
//   render(){
//     return( 
//       <div>
//         <Header get_props={this.get_props} page="application page" name={this.state.name}/>
//         <input name="name" onChange={(e)=>{this.changed(e)}} type="text" placeholder="Enter your name"></input>
//         <input name="email"  onChange={(e)=>{this.changed(e)}}  type="text" placeholder="Enter your email"></input>
//         <button onClick={this.set_name}>SetName</button>
//       </div>

//     )
//   }
// }

// export default App;






// For practice



// import Child from './component/prac'

// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Parent Element</h1>
//         <Child name="Car" price="500$"/>
//         <Child name="Watch" price="10$"/>
//       </div> 
//     )
//   }
// }
// export default App;






// React Routing and Linking



// import React from 'react';
// import AppRouter from './config/route'

// class App extends React.Component{
//     render(){
//         return(
//               <AppRouter/>
//         )
//     }
// }
// export default App;





// React Life Cycle 

// // get data from API and underdstand concept of Component Did Mount

// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0,
//             data:[],
//         }
//         console.log("Contructor Helllo")
//     }
    
//     static getDerivedStateFromProps(){
//         console.log("getDerivedStateFromProps")
//         return{
//             count:5
//         }

//     }
//     componentDidMount(){
//         fetch('https://jsonplaceholder.typicode.com/todos')
//         .then(response => response.json())
//         .then(data=>{
//             this.setState({
//                 data:data,
//             })
//         })
//         .catch(err=>console.log(err))
//         console.log("componentDidMount")
//     } 
//     render(){
//         console.log("data===>" ,this.state.data)
//         return(
//             <div>
//                 <h2>React LifeCycle</h2>
//                 {this.state.data.map((v,i)=>{
//                     return <h4 key={i}>{v.title}</h4>
//                 })}
//             </div>
//         )
//     }
// }
// export default App;





//underdstand concept of getDeriveStateFromProps

// // understad state in getDerivedStateFromProps
// import React from 'react'

// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0,
//         }
//         // this.state={
//         //     value:12
//         // }
//         console.log("Contructor Helllo")
//     }
    
//     static getDerivedStateFromProps(props,state){
//         console.log("getDerivedStateFromProps",state)
//         return null

//     }
//     componentDidMount(){
//         console.log("componentDidMount")
//     } 
//     render(){
//             return(
//             <div align="center">
//                 <h2>React LifeCycle</h2>
//                 <h4>{this.state.count}</h4>
//                 {/* <h4>{this.state.value}</h4> */}
//                 <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
//                 <button  onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
                
//             </div>
//         )
//     }
// }
// export default App;







// understad props in getDerivedStateFromProps

// first make child component
import React from 'react'
import Child from './component/child'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            count:0,
        }
        // this.state={
        //     value:12
        // }
        console.log("Contructor Helllo")
    }
    
    static getDerivedStateFromProps(props,state){
        // console.log("getDerivedStateFromProps",state)
        return null

    }  // use this in child component
    componentDidMount(){
        // console.log("componentDidMount")
    } 
    shouldComponentUpdate(){
        if (this.state.count<5){
            return true
        }
        else{
            return false
        }
    }
    getSnapshotBeforeUpdate(preProps,preState){
        // console.log("getSnapshotBeforeUpdate" ,preState)
        return 10

    }

    componentDidUpdate(preProps,preState,snapshot){
        // console.log("componentDidUpdate",snapshot)
    }

    // componentWillUnmount(){
    //     console.log("Component Khalas")
    // }  //use this in child.js
    render(){
            return(
            <div align="center">
                <h2>React LifeCycle</h2>
                {this.state.count < 5 &&<Child count={this.state.count}/>}
                <button onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
                <button  onClick={()=>this.setState({count:this.state.count-1})}>Decrement</button>
            
                {/* <h4>{this.state.value}</h4> */}
            </div>
        )
    }
}
export default App;