import Image from "next/image";
import "../style/hero.css";
import Link from "next/link";


export default function Hero(){
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
            </div>
            <div className="hero-right-div">
                <h1 className="title-hero"> This is Sarwat Majeed
                    <br />
                       Educationist and Front-end Developer
                    </h1>

                    <p className="description">
                         Hello! I am Sarwat Majeed, a passionate Mathematics teacher and a dedicated developer.
                         With a love for numbers and a knack for problem-solving, I strive to make complex concepts accessible and engaging for my students.
                         </p>
                        <br />
                        <p className="description">
                            In addition to teaching, I enjoy developing applications that simplify everyday tasks and enhance learning experiences.
                             My goal is to bridge the gap between education and technology, inspiring students to embrace the world of mathematics and coding.
                           </p>
                          <br />
                          <p className="description">
                          I have knowledge about HTML5, CSS3, TypeScript, Next.js, React, TailwindCSS, and Bootstrap.
                          </p>
                          <br />
                          <p className="description">
                        Join me on this journey of exploration and growth as we navigate the fascinating realms of mathematics and development together!
                      </p>
                   
                    <Link target="blank" href="/Resume/Resume.pdf">
                    <button className="btn">Hire Me</button>
                    </Link>
                   
            </div>
           </div>
           
        </div>
    )
}