import {useState} from 'react'
import {Ctx} from './Ctx'
import A from "./A";

const {Provider} = Ctx
function Context(){
    const contextStyle = {
        borderBottom:'1px solid black',
        borderRight:'1px solid black'
    }
    const [state,setState] = useState({name:'Walter',age:24})

    return (
        <div style={contextStyle}>
            <h1>Parent component 'Context'</h1>
            <button onClick={()=>{
                setState({
                    ...state,
                    age:state.age+1
                })
            }}>change age</button>
            <Provider value={state}>
                <A />
            </Provider>
        </div>
    )
}

export default Context