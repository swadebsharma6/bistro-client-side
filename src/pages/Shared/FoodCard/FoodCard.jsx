



const FoodCard = ({item}) => {
    const {name, recipe, image,price}= item;
    return (
        <section>
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-2 rounded" >Price: ${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Recipe: {recipe}</p>
          
          <div className="card-actions justify-center">
            <button className="btn btn-primary bg-orange-300 btn-outline border-0 border-b-4">Add to Cart</button>
          </div>
        </div>
      </div> 
        </section>
    );
};

export default FoodCard;