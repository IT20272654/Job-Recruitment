import proPic from "../assets/profile.png";
const About = () => {
  return (
    <div className="lg:mx-12 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2"> 
          <img src={proPic} alt="" className="w-full sm:w-11/12" />
        </div>
        <div className="sm:w-1/2">
          <p className="text-xl text-headingcolor font-semibold mb-5">
            
          </p>
          <h3 className="md:text-5xl text-4xl text-headingcolor font-bold">About Us</h3>
          <p className="mt-8 md:pr-8 mb-8">
          we specialize in connecting talented individuals with leading companies across diverse industries. Our team's expertise lies in creating innovative solutions that streamline the job recruitment process, providing both job seekers and employers with a platform that is intuitive, efficient, and effective. With a deep understanding of the evolving needs of the job market, coupled with cutting-edge technology and personalized service, we're committed to helping you achieve your hiring or career goals. Trust in our expertise to navigate the ever-changing landscape of employment with confidence and success.
            <br /> <br />
            Join us and experience the difference that our expertise can make in your job recruitment journey.
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default About;
