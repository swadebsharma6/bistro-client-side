

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="text-center md:w-4/12 mx-auto my-8">
           <p className="text-yellow-500 text-lg font-semibold">{subHeading}</p> 
           <h3 className="text-3xl uppercase border-y-4 py-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;