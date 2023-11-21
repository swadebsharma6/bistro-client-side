import FoodCard from "../../Shared/FoodCard/FoodCard";


const OrderTab = ({items}) => {
    return (
        <section>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          items.map(item => <FoodCard
              key={item._id}
              item={item}
              ></FoodCard>)
       }
        </div>
        </section>
    );
};

export default OrderTab;