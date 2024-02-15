import banner from "../assets/banner.png";

const Home = () => {
    return (
         <div className="mt-20 bg-bgShade ">
            <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5 ">
                 <div className="md:w-1/2 w-full mt-5">
                    <h3 className="text-xl text-headingcolor font-semibold mb-5">Hey, We are here for you</h3>
                    <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">Our platform offers a <span className="text-primary"> seamless experience </span> tailored to your needs</h1>
                    <p className="text-2xl text-body leading-9 mb-8">Welcome to job Eka, your go-to destination for finding and posting job opportunities across diverse industries.We are your trusted partner in navigating the world of employment. Start your journey with us today!</p>
                    <button className="bg-primary px-8 py-4 hover:bg-body transition-all duration-300 hover:-translate-y-4 text-white text-x1 rounded-md">Get in Touch</button>{/* bouncing btn*/}
                 </div>
            </div>
            <div className="md:w-1/2 w-full">
                <img src={banner} alt="" className="w-full"/>
            </div>
         </div>    
    );
};

export default Home;