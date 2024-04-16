import React from "react";
import { Layout} from 'antd';
import img from './img/profile.png';
import starimg from './img/star.png';

const { Content } = Layout;




function RightContent() {
    return (
        <Content style={{ textAlign: 'right' }}>
            <Content>


                <div style={{ marginTop:'-409px',marginRight:'193px' }}>
                    <img src={img} width="320px"></img>
                </div>

                <div style={{ marginTop:'-450px',marginRight:'50px' }}>
                    <img src={starimg} width="140px"></img>
                </div>

                <div style={{ marginTop:'10px',marginRight:'523px' }}>
                    <img src={starimg} width="100px"></img>
                </div>

            </Content>
        </Content>
    )
}

export default RightContent;