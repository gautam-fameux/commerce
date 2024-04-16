import React from "react";
import { Content } from "antd/es/layout/layout";
import { Layout } from 'antd';
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function MainContent() {
    return (
        <div>
            <Content>
                <Layout style={{ padding: '40px 0' }}>
                    <Content style={{ padding: '0 24px', minHeight: 420 }}>
                       <LeftContent/>
                       <RightContent/>
                    </Content>
                </Layout>
            </Content>
        </div>
    )
}


export default MainContent;
