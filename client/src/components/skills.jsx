const skills = [
    {
      id: 1,
      name: "Industry Knowledge",
      description:
        "With years of experience in the job market, our team possesses in-depth knowledge of various industries and sectors, enabling us to understand the unique needs and requirements of both job seekers and employers",
      image: "src/assets/skills-1.png",
    },
    {
      id: 2,
      name: "Cutting-Edge Technology",
      description:
        "Leveraging the latest advancements in technology, we employ state-of-the-art tools and platforms to optimize the job recruitment process. Our expertise in utilizing innovative technologies enhances the efficiency and effectiveness of our services, providing a seamless experience for all users",
      image: "src/assets/skills-2.png",
    },
    {
      id: 3,
      name: "Exceptional Customer Service",
      description:
        "At the heart of our expertise is our commitment to delivering exceptional customer service. We prioritize responsiveness, professionalism, and integrity in all our interactions, building trust and fostering long-term relationships with our clients.v",
      image: "src/assets/skills-3.png",
    },
    {
      id: 4,
      name: "Strategic Partnerships",
      description:
        "We have established strategic partnerships with leading companies, organizations, and industry experts to further enrich our expertise and expand our reach. These collaborations enable us to offer additional resources, support, and opportunities to our clients, enhancing the value of our services.",
      image: "/src/assets/skills-4.png",
    },
  ];

const Skills = () => {

  return (
    <div className="lg:mx-12 mx-4 py-32" id="skills">
      <div className="mb-20">
        <p className="text-xl text-headingcolor font-semibold mb-5">
          our skills
        </p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">Our Expertise</h2>
      </div>


      {/* skillis card */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            skills.map( skill => <div key={skill.id} className="bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300">
                <img src={skill.image} alt="" className="w-14 h-14 p-3 bg-white bg-white rounded-lg shadow-md mb-7"/>
                <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                <p>{skill.description}</p>
            </div>)
        }
      </div>
    </div>
  );
};

export default Skills;
