import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItems/MenuItem";
import PageCover from "../../Shared/PageCover/PageCover";


const MenuCategory = ({items, title, coverImg, details}) => {
    return (
        <section className="mb-20">
    { title &&
        <PageCover img={coverImg} title={title} details={details}></PageCover>
    }
        <div className="grid md:grid-cols-2 gap-6">
        {
            items.map(item => <MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
        }
    </div>
    <div className="text-center my-5">
       <Link to={`/order/${title}`}> 
       <button className="btn btn-outline btn-primary border-0  border-b-4">ORDER YOUR FAVOURITE FOOD</button>
       </Link>
    </div>
        </section>
    );
};

export default MenuCategory;