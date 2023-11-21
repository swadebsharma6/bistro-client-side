import UseMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItems/MenuItem";


const PopularMenu = () => {

    const [menus] =UseMenu();

    const popular = menus.filter(item => item.category ==='popular')

    // const[menus, setMenus] = useState([]);
    // useEffect(()=>{
    //     fetch('./menu.json')
    //     .then(res =>res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item =>item.category ==='popular');
    //         setMenus(popularItems)
    //     })
    // },[]);


    return (
        <section className="mb-20">
        <SectionTitle
        subHeading={'---Check it out---'}
        heading={'FROM OUR MENU'}
        ></SectionTitle>

        <div className="grid md:grid-cols-2 gap-6">
            {
                popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
            }
        </div>
        <div className="text-center mt-5">
            <button className="btn btn-outline border-0 btn-secondary border-b-4">View Full Menu</button>
        </div>
            
        </section>
    );
};

export default PopularMenu;