import './SlotHeader.scss'
import {Row} from "antd";
import 'antd/dist/antd.css';

function SlotHeader(props){
    const {children} = props
    // console.log(children)
    function handleChildPosition(className){
        return children.map((item) =>{
            // console.log(item.props.className)
            if (item.props.className === className) return item
            return []
        })
    }
    return (

        <div className='NewsType'>
            <Row className='titleRow'>
                {handleChildPosition('col1')}
                {handleChildPosition('col2')}
            </Row>
        </div>
    )
}

export default SlotHeader