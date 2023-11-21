

const MenuItem = ({item}) => {
    const {name, recipe, image,price}= item;
    return (
        <div className="flex space-x-4">
           <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" /> 
           <div>
                <h3 className="uppercase">{name} --------------</h3>
                <p>{recipe}</p>
           </div>
           <h5 className="text-yellow-500">Price: ${price}</h5>
        </div>
    );
};

export default MenuItem;