import { Parallax } from 'react-parallax';


const PageCover = ({img,title, details}) => {
    return (
        <section className='mb-10'>
        <Parallax
        blur={{ min: -50, max: 50}}
        bgImage={img}
        bgImageAlt="Banner"
        strength={-200}
    >
    <div className="hero h-[600px]" >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className=" md:max-w-2xl mx-auto bg-gray-800 bg-opacity-40 px-28 py-10">
        <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
        <p className="mb-5 text-lg">{details}</p>
      </div>
    </div>
  </div>  
    </Parallax>

      
        </section>
    );
};

export default PageCover;