
import { Carousel } from 'antd';
import {useState,useEffect,} from "react"
import './BannerNews.scss'
import http from "../../utils/http";

function BannerNews(props){
    const [banner,setBanner] = useState([])

    useEffect(()=>{
        // http('get','http://www.h5sm.com:8088/banner')
        //     .then(res=>{
        //         console.log(res['banners'])
        //         setBanner(res['banners'])
        //         // setBanner(res['data']['articles'])
        //     })
        // axios.get('http://www.h5sm.com:8088/banner')
        //     .then(res=>{
        //         console.log(res.data['banners'])
        //         setBanner(res.data['banners'])
        //     })



        http('get','https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5dLC9eqs2Aw9Jzev0CWpkSSAZbmXjfuV')
            .then(res=>{
                // console.log(res.data.results)

                setBanner(res.data.results)
            })


    },[])

    //banner default style by Ant Design
    const contentStyle = {
        position:'relative',
        height: '440px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
    };
    const fontStyle = {
        position: 'absolute',
        top:'30px',
        fontSize:'20px',


    }


    return (
        <div className='container'>
            <div className='banner'>
                <Carousel autoplay dotPosition = 'bottom'style={{height:"560px"}}>
                    {
                        banner.length > 0 && banner.map((item,index)=>{

                            return (
                                // <div key={index} style={contentStyle}>
                                //     <img src={item['imageUrl']} alt="" width="100%" height="100%" />
                                //     <div style={fontStyle}>{item['typeTitle']}</div>
                                // </div>

                                index < 10  ? <div key={index} style={contentStyle}>
                                    <img src={item['multimedia'][0]['url']} alt="" width="100%" height="100%" />
                                    <div style={fontStyle}>{item['title']} </div>
                                </div> : []

                            )
                        })
                    }
                </Carousel>

            </div>
        </div>
    )
}

export default BannerNews