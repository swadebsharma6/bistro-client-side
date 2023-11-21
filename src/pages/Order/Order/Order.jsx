import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../../Hooks/UseMenu';
import orderImg from '../../../assets/shop/banner2.jpg';
import PageCover from "../../Shared/PageCover/PageCover";
import OrderTab from '../OrderTab/OrderTab';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'desert', 'drinks'];

    const {category} = useParams(); // its come from routes components..

    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);

    const [menus] = UseMenu();
    const deserts = menus.filter(item => item.category ==='dessert')
    const soup = menus.filter(item => item.category ==='soup')
    const salad = menus.filter(item => item.category ==='salad')
    const pizzas = menus.filter(item => item.category ==='pizza')
    const drinks = menus.filter(item => item.category ==='drinks')
    
    return (
        <section>
        <Helmet>
        <title>BISTRO | ORDER FOOD</title>
        </Helmet>
        <PageCover
        img={orderImg}
        title={'OUR SHOP'}
        details={'Would you like to try a dish?'}
        ></PageCover>
        {/*Order page upper style*/}
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={deserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
      
        </section>
    );
};

export default Order;