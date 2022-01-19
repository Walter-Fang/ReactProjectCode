import {useState} from 'react'
import {Button, Form, Input, message,Row,Col} from 'antd';
import axios from "axios";
import 'antd/dist/antd.css';



function CommentContent(props){

    const [form] = Form.useForm();
    // const [content,setContent] = useState([{n:'',c:''}])

    const [inputs, setInputs] = useState({});
    // const [finish,setFinish] = useState({
    //     handle:'',
    //     comment:''
    // })

    const success = () => {
        message['success']('Thank you for your suggestion');

    };

    const handleSubmit = (event) => {
        // if (event) {
        //     event.preventDefault();
        // }
        console.log(inputs)
        axios.post('https://us-central1-my-cool-web-fcg.cloudfunctions.net/postcomments', {
            handle: inputs.handle,
            comment: inputs.comment
        })
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        setInputs({
            'nickName':'',
            'comment':''
        })

        success()




    }
    const handleInputChange = (event) => {

        event.persist();

        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));

    }

    // useEffect(()=>{
    //     const handleSubmit = function (){
    //         setContent([
    //             ...content,
    //             {
    //                 n:handleName.current['state']['value'],
    //                 c:commentContent.current['state']['value']
    //             }
    //         ])
    //     }
    //     submitBtn.current['addEventListener']('click',handleSubmit)
    //
    //     console.log(content)
    //     submitBtn.current['addEventListener']('click',success)
    //     return ()=>{
    //         console.log('hello')
    //     }
    // },[content])

    const formLayout = {
        labelCol: {
            span: 8,
        },
    }

    return (
        <>
            {/*<form action="" onSubmit={handleSubmit}>*/}
            {/*    <div>*/}
            {/*        <label>First Name</label>*/}
            {/*        <input type="text" name="handle" required onChange={handleInputChange} value={inputs.firstName}/>*/}
            {/*        <label>Last Name</label>*/}
            {/*        <input type="text" name="comment" required onChange={handleInputChange} value={inputs.lastName}/>*/}
            {/*    </div>*/}
            {/*    <button type="submit">Sign Up</button>*/}
            {/*</form>*/}
            <Row style={{}}>
                <Col span="24">
                    <Form onFinish={handleSubmit} form={form} {...formLayout}>
                        <Form.Item label="Nickname" >
                            <Input
                                placeholder="input the nickname"
                                name="handle"
                                required
                                onChange={handleInputChange}
                                value={inputs.nickName}

                            />
                        </Form.Item>
                        <Form.Item  label="Comment">
                            <Input.TextArea
                                placeholder="write some suggestions"
                                showCount
                                maxLength={280}
                                name="comment"
                                required
                                onChange={handleInputChange}
                                value={inputs.comment}
                                rows="6"

                            />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Col>

            </Row>



        </>
    )
}

export default CommentContent