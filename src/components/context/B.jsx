import {Ctx} from './Ctx'

const {Consumer} = Ctx
function B(){
    return (
        <>
            <h1>This is B component</h1>
            <h2>The purpose of this page is to pass data from the 'Context' parent component to the 'B' child component</h2>
            <Consumer>
                {
                    (value) =>{
                        return (
                            <h3>Name: {value.name}, Age: {value.age}</h3>
                        )
                    }
                }
            </Consumer>
        </>
    )
}
export default B