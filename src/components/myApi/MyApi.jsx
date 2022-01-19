import './MyApi.scss'
import {NavLink,Route,Redirect} from 'react-router-dom'
import Gmap from "../gMap/Gmap";
import ChartJs from "../chartJs/ChartJs";
import Context from "../context/Context";
import UseReducerComp from "../useReducer/UseReducerComp";

function MyApi(props){
    return (
        <>
            <div className='container'>
                <div className='MyApi'>
                    <div className='menu'>
                        <div className='nav'>
                            <ul>
                                <li><NavLink to='/api/googleMap'>Google Map</NavLink></li>
                                <li><NavLink to='/api/chartJs'>Chart JS</NavLink></li>
                                <li><NavLink to='/api/context'>React Context</NavLink></li>
                                <li><NavLink to='/api/useReducer'>React useReducer</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className='content'>
                        <Redirect from='/' to='/api/googleMap'/>
                        <Route path='/api/googleMap' component={Gmap}/>
                        <Route path='/api/chartJs' component={ChartJs}/>
                        <Route path='/api/context' component={Context}/>
                        <Route path='/api/useReducer' component={UseReducerComp}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyApi