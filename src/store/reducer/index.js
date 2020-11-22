const data={
    name:"Mohsin",
    email:"mohsinali481997@gmail.com",
    age:23,
}
export default(state=data,action)=>{
    switch(action.type){
        case "SETDATA":
            {
                return({
                    ...state,
                    name:action.payload.name,
                })
            }
    }
    // return state

}