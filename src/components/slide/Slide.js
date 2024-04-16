import React from "react";
import { Layout} from 'antd';

const { Content } = Layout;

const slide = {
    background: 'black'
}

const font = {
    color: 'white',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '35px',
    fontSize: '32px'
}

function Slide() {
    return (
        <Content>
            <Content style={{ ...slide, padding: '0 24px', minHeight: 100 }}>
                <div style={font}>
                    <span style={{ fontFamily: 'Noto Sans, sans-serif' }}>VERSACE</span>
                    <span style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ZARA</span>
                    <span style={{ fontFamily: "Raleway, sans-serif",fontWeight: "10" }}>GUCCI</span>
                    <span style={{ fontFamily: "PT Serifserif",fontWeight:"400" }}>PRADA</span>
                    <span style={{ fontFamily: "Roboto, sans-serif" ,fontWeight: "100"}}>Calvin Klein</span>
            </div>
        </Content>
        </Content >
    )
}

export default Slide;