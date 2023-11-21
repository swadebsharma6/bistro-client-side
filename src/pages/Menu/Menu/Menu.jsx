import { Helmet } from "react-helmet-async";
import UseMenu from "../../../Hooks/UseMenu";
import menuImg from '../../../assets/menu/banner3.jpg';
import desertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import PageCover from "../../Shared/PageCover/PageCover";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menus] =UseMenu();
    const deserts = menus.filter(item => item.category ==='dessert')
    const soup = menus.filter(item => item.category ==='soup')
    const salad = menus.filter(item => item.category ==='salad')
    const pizzas = menus.filter(item => item.category ==='pizza')
    const offered = menus.filter(item => item.category ==='offered')

    return (
        <section>
      <Helmet> <title>BISTRO | MENU</title></Helmet>
    <PageCover img={menuImg} title={'OUR MENU'} details={'Would you like to try a dish?'}></PageCover>
    <SectionTitle subHeading={'---Do not miss---'} heading={'TODAYS OFFER'}></SectionTitle>  
    <MenuCategory items={offered}></MenuCategory>
    {/*DESERT*/}
    <MenuCategory
    items={deserts}
    title={'dessert'}
    coverImg={desertImg}
    details={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ></MenuCategory>
    {/*PIZZA*/}
    <MenuCategory
    items={pizzas}
    title={'pizza'}
    coverImg={pizzaImg}
    details={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ></MenuCategory>
    {/*Salad*/}
    <MenuCategory
    items={salad}
    title={'salad'}
    coverImg={saladImg}
    details={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ></MenuCategory>
    {/*SOUP*/}
    <MenuCategory
    items={soup}
    title={'soup'}
    coverImg={soupImg}
    details={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
    ></MenuCategory>

        </section>
    );
};

export default Menu;