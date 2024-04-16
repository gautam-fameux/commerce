import React from 'react';
import { Layout, Menu, theme ,Input} from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Pages } from './style'
import './LeftMenu.css';



const { Header } = Layout;
const { Search } = Input;


const LeftMenu = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

   


    const items = [
        {
            key: 'Title',
            label: <a href="#" className='menuTitle'>SHOP.CO</a>,

        },
        {
            key: '1',
            label:
             <Pages className="menu-item-label">
             <a href='#'>Shop</a>    
             </Pages>
        },
        {
            key: '2',
            label: 
            <Pages className="menu-item-label">
                 <a href='#'>On Sale</a>   
                </Pages>
        },
        {
            key: '3',
            label: <Pages className="menu-item-label">
                 <a href='#'>New Arrivals</a>   
                </Pages>
        },
        {
            key: '4',
            label: 
            <Pages className="menu-item-label">
                  <a href='#'>Brands</a>   
                </Pages>
        },
        {
            key: 'SearchBar',
            label: (
                <Search
                    placeholder="Search for Products..."
                    style={{ width: 460, marginTop: '15px', marginLeft: '30px' }}
                />
            ),
        },
        {
            key: 'Cart',
            icon: <span className='icon1'><ShoppingCartOutlined style={{ fontSize: '20px',color:'black' }} /></span>,
        },
        {
            key: 'User',
            icon: <span className='icon2'><UserOutlined style={{ fontSize: '20px',color:'black' }} /></span>,
        },
    ];



    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    background:'white'
                }}
            >
                <Menu
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                    items={items} 
                    className="custom-menu"
                ></Menu>
            </Header>
        </Layout>
    );

};

export default LeftMenu;
