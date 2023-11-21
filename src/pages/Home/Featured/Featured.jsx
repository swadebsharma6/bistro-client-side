import featured from '../../../assets/home/featured.jpg';
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './Featured.css';


const Featured = () => {
    return (
        <section className='mb-20 bg-fixed featured-item text-white pt-10'>
        <SectionTitle
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
        ></SectionTitle>
            <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-25 py-20 px-36'>
                <div><img src={featured} alt="" /></div>
                <div className='md:ml-10'>
                <h3>March 20, 2023</h3>
                <h4>WHERE CAN I GET SOME?</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                <button className="btn mt-10 btn-outline btn-primary border-0 border-b-4">Order Now</button>
                </div>
            
            </div>
        </section>
    );
};

export default Featured;