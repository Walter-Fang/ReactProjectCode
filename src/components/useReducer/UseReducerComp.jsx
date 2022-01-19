import {useReducer} from 'react'
import {Button} from 'antd'
import 'antd/dist/antd.css';
const initState = {count:0}

function reducer(state,action){
    console.log(action)
    const {type,payload:{n}} = action
    switch (type){
        case 'increment':
            return {count:state.count + n}

        case 'decrement':
            return {count: state.count - n}

        default:
            throw new Error();
    }
}




function UseReducerComp(){
    const [state,dispatch] = useReducer(reducer,initState);

    return (
        <div>
            <h1>useReducer Demo</h1>
            <h3>Number: {state.count}</h3>
            <Button onClick={()=>{
                dispatch({type:'increment',payload:{n:100}})
            }}> increment </Button>
            <Button onClick={()=>{
                dispatch({type:'decrement',payload:{n:50}})
            }}> decrement </Button>
        </div>
    )
}

export default UseReducerComp