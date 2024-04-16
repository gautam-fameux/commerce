import React from "react";
import { Layout, Typography, Button } from 'antd';

const { Content } = Layout;

const TitleWords = {
    textAlign: 'left',
    paddingRight: '20px',
    fontFamily: 'Playfair Display, serif',
    paddingLeft: '87px',
}

const TitleWords_second = {
    paddingLeft: '90px',
    fontFamily: 'Satoshi, sans-serif',
    color: '#808080',
    fontweight: 'bold',
}

const btn = {
    marginTop: '23px',
    marginLeft: '88px',
}

const btn_b = {
    padding: '3px 45px 3px 39px',
    textAlign: 'center',
    height: '38px',
    borderRadius: '24px',
    background: 'black',
    fontSize: '14px',
};

const block = {
    fontFamily: 'Satoshi, sans-serif',
    fontSize: '31px',
    marginTop: '28px',
    marginLeft: '90px',
    fontWeight: '700', 
    lineHeight: 'initial' 
};

const block_second = {
    marginTop:'40px',
    marginTop: '-75px',
    marginLeft:'278px'
}

const block_third = {
    marginTop:'40px',
    marginTop: '-75px',
    marginLeft:'480px'
}



const brands = {
    color: '#808080',
    fontSize: '12px'
};

const line = {
    paddingLeft: '17px',
    fontSize: '74px',
    position:'absolute',
    bottom: '130px',
    color:'gray'
}



function LeftContent() {
    return (
        <Content style={{ textAlign: 'left' }}>
            <Content>

                <Typography.Title style={TitleWords}>FIND CLOTHES<br></br>THAT MATCHES<br />YOUR STYLE</Typography.Title>

                <Typography style={TitleWords_second}>Browse through our diverse range of meticulously crafted garments,designed<br /> to bring out your individuality and cater to your sense of style.</Typography>

                <div style={btn}>
                    <Button type="primary" style={{ ...btn_b, textAlign: 'center' }}>Shop Now</Button>
                </div>

                <Typography style={block}>
                    <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>
                        200+
                    </span>
                    <br />
                    <span style={{ ...brands, verticalAlign: 'middle' }}>
                        International Brands
                    </span>
                    &nbsp;
                    <span style={line}>|</span>
                </Typography>

                
                <Typography style={{...block,...block_second}}>
                    <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>
                        2000+
                    </span>
                    <br />
                    <span style={{ ...brands, verticalAlign: 'middle' }}>
                      High-Quality Products
                    </span>
                    &nbsp;
                    <span style={line}>|</span>
                </Typography>


                <Typography style={{...block,...block_third}}>
                    <span style={{ fontSize: '32px', verticalAlign: 'middle' }}>
                        30,000+
                    </span>
                    <br />
                    <span style={{ ...brands, verticalAlign: 'middle' }}>
                      Happy Customers 
                    </span>
                    &nbsp;
                </Typography>

            </Content>
        </Content>
    )
}

export default LeftContent;
