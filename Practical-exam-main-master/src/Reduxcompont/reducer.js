const initialValue = []

const reducer = (state=initialValue,action)=>{
    switch(action.type){
        case "ADD":
            return [...state,action.payload]

        case "DELETE":
            return state.filter((ele,index)=>index !== action.payload)

        case "EDIT":
            const {index,newValue}=action.payload;
            return state.map((ele,i)=>(index === i ? newValue :ele))

        default :
        return state
    }
}

export default reducer