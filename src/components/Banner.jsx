 
 import img from '../assets/banner.jpg'
 
const Banner = () => {
    return (
    <div className="text-center items-center py-2 bg-purple-700 w-11/12 mx-auto h-96"> 
        {/* Banner */}
        <div className='relative'>
        <h1 className=" text-4xl text-white font-bold pb-3">Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories</h1>
            <p className="pb-2 text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
            <button className="btn bg-white text-purple-700 rounded">Shop Now</button>
            
        </div>
        <div className='absolute left-[400px] py-10 rounded-sm'>
             <img className=' w-[562px] h-[350px]   border-8' src={img} alt="" />
        </div>
        
            {/* Catagories */}
    </div>
    );
};

export default Banner;