import {connect} from "react-redux";

import {isPlaying} from "./store/actions/clickAction";
import HomePage from "./pages/HomePage";
import GlobalHeader from "./components/header/GlobalHeader";

import FooterInfo from "./components/footerInfo/FooterInfo";
import { Layout } from 'antd';
import {Route,Redirect} from 'react-router-dom'
import CacheRoute from 'react-router-cache-route'
import MyApiPage from "./pages/MyApiPage";
import MyCommentPage from "./pages/MyCommentPage";
import MyContactPage from "./pages/MyContactPage";

const { Header, Footer, Content } = Layout;
function App(props) {

    // console.log(props)
      return (
            <>
                <Layout>

                    <Header>
                        <GlobalHeader />
                    </Header>

                    <Content>
                        {/*<Redirect from='/' to='/home'/>*/}
                        {/*<Route path='/home' component={HomePage}/>*/}
                        {/*<Route path='/api' component={MyApiPage}/>*/}
                        {/*<Route path='/comment' component={MyCommentPage}/>*/}
                        {/*<Route path='/contact' component={MyContactPage}/>*/}

                            <Redirect from='/' to='/home'/>
                            <Route path='/home' component={HomePage}/>
                            <Route path='/api' component={MyApiPage}/>
                            <Route path='/comment' component={MyCommentPage}/>
                            <Route path='/contact' component={MyContactPage}/>

                    </Content>

                    <Footer>
                        <FooterInfo />
                    </Footer>

                </Layout>
            </>
      );
}

export default connect(
    state => state,
    {isPlaying}
)(App);
