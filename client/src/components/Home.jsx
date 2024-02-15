import banner from "../assets/banner.png";



const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5">
      <div className="md:w-1/2 w-full">
          <img src={banner} alt="" className="w-full" />
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5">Get in touch with us – we're just a click away!</p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
          Our platform offers a <span className="text-primary">seamless experience</span> tailored to your needs
          </h1>
          <p className="text-2xl text-body leading-9 mb-8">Have a question or need assistance? Don't hesitate to reach out to us! Whether you're a job seeker looking for guidance or an employer seeking support, our team is here to help. 
          </p>
          {/*<button className="btn-primary">Get In Touch</button>*/}
        </div>
        {/* rigth side */}
        
      </div>
    </div>
  );
};

export default Home;
