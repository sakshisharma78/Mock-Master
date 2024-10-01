import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Navbar/Footer";
import A from './About.module.css';
import member1 from './team1.jpeg';
import member2 from './member2.jpeg'

const teamMembers = [
  {
    name: "Sakshi Sharma",
    title: "Full Stack Web Developer",
    photo: member1,
    github: "https://github.com/sakshisharma78",
    linkedin: "https://www.linkedin.com/in/sakshi-sharma-a6a122271/"
  },
  {
    name: "Saurav Suman",
    title: "Full Stack Web Developer",
    photo: "https://avatars.githubusercontent.com/u/117572833?s=400&u=b81f494fd8f1bb3e33476f748b98c9978146970d&v=4",
    github: "https://github.com/sauravsuman12210691",
    linkedin: "https://www.linkedin.com/in/saurav-suman-62966624a/"
  },
  {
    name: "Harshita Agrawal",
    title: "Full Stack Web Developer",
    photo: member2,
    github: "https://github.com/harshita3459",
    linkedin: "https://www.linkedin.com/in/harshita-agrawal-1185402b1/"
  },
  {
    name: "Sushant Singh",
    title: "Full Stack Web Developer",
    photo: "https://media.licdn.com/dms/image/v2/D4D03AQETVamt6fwjXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1666282795357?e=1733356800&v=beta&t=KbmPtb0EOvx2KC12ijtCYjrUocyvroijVPasQRtT-So",
    github: "https://github.com/Sushant48",
    linkedin: "https://linkedin.com/in/sushant48/"
  }
];

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className={A.aboutcontainer}>
        <h1 className={`${A.aboutcontainerh1} ${A.animated} ${A.fadeInLeft}`}>About Us</h1>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>
          Welcome to Mock-master, your ultimate partner in mastering the art of job interviews through tailored mock questions designed to enhance your confidence and competence.
        </p>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}> Company’s Journey</h2>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>
          Founded in 2024, Mock-master began as a small startup with a singular vision: to empower students and job seekers to excel in their interview processes. Recognizing the gap between academic knowledge and real-world interview expectations, our founders, a group of career coaches and HR professionals, devised a platform that simulates the interview environment. Over the years, we've grown from a modest blog sharing interview tips to a comprehensive platform offering personalized mock interview experiences across various industries.
        </p>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}> Purpose and Goals</h2>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>
          Our primary purpose at Mock-master is to demystify the job interview process and equip candidates with the tools they need to succeed. We aim to bridge the gap between being a qualified candidate and presenting oneself as the best possible choice in an interview. Our goals include expanding our reach to include more industries and job levels, continuously updating our question bank with the latest trends in hiring, and enhancing our technology to provide a more immersive mock interview experience.
        </p>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}> Introduction to the Team</h2>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>
          At the heart of Mock-master is a diverse team of experts dedicated to your interview success. Our team comprises seasoned HR consultants, experienced career coaches, and technical experts who work collaboratively to ensure our content and simulations are current and effective. Each member brings a wealth of knowledge and a unique perspective on what makes an interview successful, ensuring that our users receive well-rounded preparation.
        </p>
        <div className={A.team}>
          {teamMembers.map((member, index) => (
            <div key={index} className={`${A.teamMember} ${A.animated} ${A.fadeIn}`}>
              <img src={member.photo} alt={`${member.name}'s photo`} className={A.teamPhoto} />
              <div className={A.teamInfo}>
                <h3 className={A.teamName}>{member.name}</h3>
                <p className={A.teamTitle}>{member.title}</p>
                <p>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">GitHub</a> | <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}>Offerings</h2>
        <ul className={`${A.aboutcontainerul} ${A.animated} ${A.fadeInLeft}`}>
          <li className={A.aboutcontainerli}><strong>Customizable Mock Interviews:</strong> Users can select interviews based on specific job roles and industries.</li>
          <li className={A.aboutcontainerli}><strong>Real-Time Feedback:</strong> Receive constructive feedback from industry experts to improve your responses and demeanor.</li>
          <li className={A.aboutcontainerli}><strong>Interview Tips and Resources:</strong> Access articles, videos, and guides to help prepare for interviews.</li>
          <li className={A.aboutcontainerli}><strong>AI-Driven Analytics:</strong> Utilize our AI tools to analyze your performance and identify areas for improvement.</li>
        </ul>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}> Customer Opinions</h2>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>We value the feedback of our users, and it’s their success stories that keep us motivated. Here’s what some of our users have to say:</p>
        <blockquote className={`${A.aboutcontainerblockquote} ${A.animated} ${A.fadeInLeft}`}>
          <p className={A.aboutcontainerp}>&quot;Mock-master was instrumental in helping me land my dream job. The personalized questions and feedback were spot on!&quot; - Emily R.</p>
          <p className={A.aboutcontainerp}>&quot;Thanks to Mock-master, I went into my interviews feeling prepared and confident. Highly recommend their platform!&quot; - Rajesh K.</p>
        </blockquote>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}> Achievements</h2>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>Since our inception, Mock-master has achieved several milestones:</p>
        <ul className={`${A.aboutcontainerul} ${A.animated} ${A.fadeInLeft}`}>
          <li className={A.aboutcontainerli}><strong>Over 100,000 Users:</strong> Our platform has helped over 100,000 individuals prepare for their job interviews.</li>
          <li className={A.aboutcontainerli}><strong>Top Rated:</strong> Rated as one of the top platforms for interview preparation by various career websites.</li>
          <li className={A.aboutcontainerli}><strong>Global Reach:</strong> Our user base spans across continents, assisting candidates from different cultural backgrounds.</li>
        </ul>

        <h2 className={`${A.aboutcontainerh2} ${A.animated} ${A.fadeInLeft}`}>Call to Action</h2>
        <p className={`${A.aboutcontainerp} ${A.animated} ${A.fadeInLeft}`}>
          Ready to ace your next job interview? Join thousands of successful job seekers by signing up for Mock-master today! Explore our services, utilize our resources, and start your journey to interview success. <a href="Register" className={A.aboutcontainera}>Sign up now</a> and transform your interview preparation with Mock-master.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
