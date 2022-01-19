import { Row, Col, Menu, } from 'antd';
import 'antd/dist/antd.css';
import './GlobalHeader.scss'
import {NavLink} from "react-router-dom";

function GlobalHeader(){
    return (
        <>

            <div className='header'>
                {/*<div className='logo'>*/}
                {/*    <NavLink to='/home'>*/}

                {/*    </NavLink>*/}
                {/*</div>*/}


                {/*<Menu className='menu' theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>*/}
                {/*    <Menu.Item key="1">*/}
                {/*        <NavLink to='/home'>*/}
                {/*            Home*/}
                {/*        </NavLink>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="2">*/}
                {/*        <NavLink to='/api'>*/}
                {/*            Some API*/}
                {/*        </NavLink>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="3">*/}
                {/*        <NavLink to='/comment'>*/}
                {/*            Comment*/}
                {/*        </NavLink>*/}
                {/*    </Menu.Item>*/}
                {/*    <Menu.Item key="4">*/}
                {/*        <NavLink to='/contact'>*/}
                {/*            Contact*/}
                {/*        </NavLink>*/}
                {/*    </Menu.Item>*/}
                {/*</Menu>*/}

                <Row>
                    <Col span={18} push={6}>
                        <Menu className='menu' theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <NavLink to='/home'>
                                    Home
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <NavLink to='/api'>
                                    Some API
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <NavLink to='/comment'>
                                    Comment
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key="4">
                                <NavLink to='/contact'>
                                    Contact
                                </NavLink>
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={6} pull={18}>
                        <div className='logo'>
                            <NavLink to='/home'>

                            </NavLink>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default GlobalHeader