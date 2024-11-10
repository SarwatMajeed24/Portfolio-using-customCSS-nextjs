import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";


export default function About(){
    return(
        <div className="hero-container">
           <div className="hero-box-container">
            <div>
              <Image src={"/images/my pic.jpeg"}
                width={200}
                height={200}
                alt="Profile Pic" 
                className="hero-image"
                />
                <div className="social-icon">
                <Link target="blank" href="https://www.linkedin.com/feed/"> <FaLinkedin className="icon1" /></Link>
               <Link target="blank" href="https://vercel.com/sarwat-majeeds-projects"><IoLogoVercel className="icon2" /></Link>                               
                <Link target="blank" href="https://github.com/SarwatMajeed24"><FaGithub className="icon3" /></Link>
                </div>
                
            </div>
            <div className="hero-right-div">
                <h1 className="title-hero">About me
                    </h1>
                      <p className="description">
                        Welcome to my portfolio! I am a dedicated Mathematics educator and a versatile developer with a passion for leveraging mathematical principles to solve complex problems. Proficient in a wide range of programming languages—including TypeScript, JavaScript, HTML, and CSS—as well as frameworks like React, Next.js, Tailwind CSS, and Bootstrap, I thrive at the intersection of mathematics and technology.
                       <br />
                       <br />
                          I enjoy using my technical knowledge to bridge the gap between theory and practice. This unique combination allows me to create engaging learning experiences and robust applications that address real-world challenges.
                        <br />
                       <br />
                      My journey in the tech world has equipped me with the skills to develop sophisticated applications and algorithms while harnessing the analytical power of mathematics. I take pleasure in tackling challenges and transforming abstract concepts into practical solutions that deliver meaningful impact.
                     <br />
                    <br />
                   I am committed to continuous learning and staying at the forefront of emerging technologies, always seeking new ways to integrate my mathematical expertise into my development work. Thank you for exploring my portfolio; I look forward to sharing my journey and collaborating on exciting projects!
                  </p>                 
                </div>
           </div>
         </div>
    )
}