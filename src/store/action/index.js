const display=(data)=>{
    return(dispatch)=>{
        console.log("Ruuing")
        dispatch(
            {type:"SETDATA" , payload:{name:"Mohsin Ali"}})
    }
}
export {
    display,
}