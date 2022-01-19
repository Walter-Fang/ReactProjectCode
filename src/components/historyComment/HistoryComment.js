import {Button,Row,Col} from "antd";
import {useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import http from "../../utils/http";
function HistoryComment(props){

    const [historyComment,setHistoryComment] = useState([])
    useEffect(()=>{
        http('get','https://us-central1-my-cool-web-fcg.cloudfunctions.net/getcomments')
            .then(res=>{
                setHistoryComment(res.data)
            })
    },[])
    const handleFresh = ()=>{

        http('get','https://us-central1-my-cool-web-fcg.cloudfunctions.net/getcomments')
            .then(res=>{
                setHistoryComment(res.data)
            })

    }


    return (
        <>
          <div style={{margin:'5px auto'}}>
              <div>
                  <h1>Here are some historical comments</h1>
              </div>
              <div>
                  <Button type="primary" onClick={handleFresh}>Refresh</Button>
              </div>
              <div style={{margin:'auto 5px'}}>
                  {
                      historyComment.length>0 && historyComment.map((item,index)=>{
                          return(
                              <Row key={index} style={{margin: '10px auto',textAlign:'start'}}>
                                  <Col span={24}>
                                      Nickname: {item.handle} <br/>
                                      Comment: {item.comment} <br/>
                                  </Col>
                              </Row>
                          )
                      })
                  }

              </div>
          </div>

        </>
    )
}
export default HistoryComment