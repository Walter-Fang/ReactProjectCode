import { Image, } from 'antd';
import { CaretRightFilled,CheckCircleFilled } from '@ant-design/icons';

import 'antd/dist/antd.css';
import './MyCv.scss'
import img1 from '../../static/2.jpg'
function MyCv(props){
    return (
        <>
            <div className='container'>
                <div className="MyCv">
                    <div className='page'>
                        <div className='contact'>
                            <div className='SpecificContact'>
                                <div><h2><b>Name</b>: Chenguang(Walter) Fang</h2></div>
                                <div><span><b>Gender:</b> Male</span></div>
                                <div><span><b>Date of Birth:</b>  March 4, 1997</span></div>
                                <div><span><b>Email:</b>  <a href="mailto:yzth123@gmail.com">yzth123@gmail.com</a></span></div>
                                <div><span><b>Address:</b> Dublin and Galway</span></div>
                            </div>
                            <div className='photo'>
                                <Image
                                    width={200}
                                    src={img1}
                                    style={{width:'100%',height:'100%',objectFit:'cover'}}
                                />
                            </div>
                        </div>
                        <div className='education'>
                            <div className='SpecificEdu'>
                                <div className='title'><h2><b>EDUCATION BACKGROUND</b></h2></div>
                                <div><CaretRightFilled /><span>09/2020 - NOW: National University of Ireland, Galway</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Major and Degree: MSc (Software Design and Development)</span></div>
                                <div><CaretRightFilled /><span>02/2020 - 08/2020: National University of Ireland, Galway</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Course: Pre-Masters English Language Pathway</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Degree: Higher Diploma Level</span></div>
                                <div><CaretRightFilled /><span>09/2015 - 07/2019: Jiangxi University of Technology, Jiangxi, China</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Major: Internet of Things Engineering</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Degree: Degree: Bachelor’s Degree of Engineering</span></div>
                                <div><CaretRightFilled /><span>09/2012 - 07/2015: Jiangsu Yizheng High School, Jiangsu, China</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Qualification: Ordinary High School Diploma</span></div>
                            </div>

                        </div>
                        <div className='internship'>
                            <div className='SpecificIntern'>
                                <div className='title'><h2><b>INTERNSHIPS</b></h2></div>
                                <div><CaretRightFilled /><span>06/11/2017 - 17/11/2017: Jiangxi Seecen Technology Co., Ltd.</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<CheckCircleFilled /> Practiced CSS and HTML</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<CheckCircleFilled />  Wrote code by use of JavaScript and carried off a minigame</span></div>

                                <div><CaretRightFilled /><span>09/04/2018-20/04/2018, Beijing Shangguan Technology Co., Ltd.</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<CheckCircleFilled />  Exercised the operation of HTML and JavaScript</span></div>

                            </div>

                        </div>
                        <div className='internation'>
                            <div className='SpecificInternation'>
                                <div className='title'><h2><b>INTERNATIONAL EXPERIENCE</b></h2></div>
                                <div><CaretRightFilled /><span>15/07/2017 - 15/08/2017: Summer School of University of Nottingham</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<CheckCircleFilled /> Attended summer courses about English , learnt local culture and customs, </span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;learnt local culture and customs, visited local historical sites and famous</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;architectures . Finally, I did a presentation by way of conclusion.</span></div>
                            </div>

                        </div>
                        <div className='working'>
                            <div className='SpecificWorking'>
                                <div className='title'><h2><b>WORKING EXPERIENCE</b></h2></div>
                                <div><CaretRightFilled /><span>20/06/2019 - 01/12/2019: Starbucks Beijing</span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;<CheckCircleFilled /> Junior Barista </span></div>
                                <div><span> &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;Know how to make all kinds of coffee</span></div>

                            </div>

                        </div>
                        <div className='working'>
                            <div className='SpecificWorking'>
                                <div className='title'><h2><b>PROFESSIONAL SKILLS</b></h2></div>
                                <div><CaretRightFilled /><span>Familiar with CSS, HTML and JavaScript. Be able to use framework like bootstrap proficiently.</span></div>
                                <div><CaretRightFilled /><span>Familiar with ReactJS. Know functional component, class component and component development idea.</span></div>
                                <div><CaretRightFilled /><span>Familiar with react-related technologies, including REACT ROUTER, React-Redux and axios</span></div>
                                <div><CaretRightFilled /><span>Familiar with package manager including npm and yarn (using yarn now).</span></div>
                                <div><CaretRightFilled /><span>Familiar with different API like Chart.js.</span></div>
                            </div>
                        </div>
                    </div>
                    <div className='page'>
                        <div className='working'>
                            <div className='SpecificWorking'>
                                <div className='title'><h2><b>OTHER PROFESSIONAL SKILLS</b></h2></div>
                                <div><CaretRightFilled /><span>Know Linux basic command and some bash scripting</span></div>
                                <div><CaretRightFilled /><span>Know basic SQL syntax</span></div>
                                <div><CaretRightFilled /><span>Know how to use wireshark</span></div>
                            </div>
                        </div>

                        <div className='working'>
                            <div className='SpecificWorking'>
                                <div className='title'><h2><b>INTERESTS</b></h2></div>
                                <div><CaretRightFilled /><span>Like hiking and cycling(especially mountain bike)</span></div>
                                <div><CaretRightFilled /><span>Favourite video game: League of Legends and Forza Horizon 4</span></div>
                                <div><CaretRightFilled /><span>Like cooking Chinese food</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MyCv