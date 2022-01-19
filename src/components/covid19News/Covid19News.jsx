import {useState,useEffect,} from "react"
import 'antd/dist/antd.css';
import { Row, Col, Modal} from 'antd';
import http from "../../utils/http";
import SlotHeader from "../slotHeader/SlotHeader";
import './Covid19News.scss'


function CovidNews(props){
    const [covidNews,setCovidNews] = useState([])
    const [detail,setDetail] = useState({
        byline:'',
        title:'',
        abstract:'',
        urlToImage:'',
        url:'',
        created_date:'',

    })

    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(()=>{
        http('get','https://api.nytimes.com/svc/topstories/v2/world.json?api-key=5dLC9eqs2Aw9Jzev0CWpkSSAZbmXjfuV')
            .then(res=>{
                // console.log(res['data']['articles'][0]['content'])
                setCovidNews(res.data.results)
            })
    },[])


    const NewsContent = () => {
        return (
            <Row className='contentRow' gutter={[48, 16]}>
                {
                    covidNews.length > 0 && covidNews.map((item,index)=>{
                        return(
                            index< 8? <Col
                                key={index}
                                className='contentCol'
                                span={6}
                                onClick={()=>{
                                    setDetail({
                                        ...detail,
                                        byline: item.byline,
                                        title:item.title,
                                        abstract:item.abstract,
                                        urlToImage:item['multimedia'][0]['url'],
                                        url:item.url,
                                        created_date:item.created_date
                                    })
                                    setIsModalVisible(true)

                                }}
                            >
                                <div className='img'>
                                    <img src={item['multimedia'][2]['url']} alt=""/>
                                </div>
                                <div className='title'>
                                    <h4>{item['title']}</h4>
                                </div>
                            </Col> : []
                        )
                    })
                }
            </Row>
        )
    }
    return (
        <>
            <SlotHeader>
                <Col className='col1' span={12}><h2>World News </h2></Col>
                <Col className='col2' span={12}><h3>More</h3></Col>
            </SlotHeader>
            <div className='NewsContent'>
                {NewsContent()}
                {/*<newsContext.Provider value={detail}>*/}
                {/*    <CovidModal />*/}
                {/*</newsContext.Provider>*/}
                <Modal
                    title="New Details"
                    visible={isModalVisible}
                    onOk={()=>{setIsModalVisible(false)}}
                    onCancel={()=>{setIsModalVisible(false)}}
                    width={1000}
                    heigth={1000}
                >
                    <h1>{detail.title}</h1>
                    <p>Author: {detail.byline}  | Publish time: {detail.created_date}</p>
                    <h2>{detail.abstract}</h2>
                    <img src={detail.urlToImage} alt="" style={{width:'100%',height:'100%'}}/>
                    <h3>For more information: <a href={detail.url} target={detail.url}>{detail.url}</a></h3>
                </Modal>
            </div>
        </>
    )
}
export default CovidNews