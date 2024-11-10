import "../style/services.css"
import { FaLaptopCode } from "react-icons/fa";
import { SiAffinityphoto } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { TfiWrite } from "react-icons/tfi";
import { PiGraphicsCardBold } from "react-icons/pi";

export default function Services(){
    return (
      <main className="main">
        <div className="service-container">
            <div className="top-div-services">
                <h2 className="heading-services">My Services</h2>
              </div>
            <div className="boxes-container">
                <div className="box"><FaLaptopCode className="service-icon" />
                <h3 className="icon-heading">Web Developer</h3>
                <span>Portfolio and resume builder</span>
                </div>
              
                <div className="box"><SiAffinityphoto className="service-icon" />
                <h3 className="icon-heading">UI/UX Designer</h3>
                <span>Website Design</span>
                </div>

                <div className="box"><GiTeacher className="service-icon" />
                <h3 className="icon-heading">Tutor</h3>
                <span>TypeScript, Nextjs, TailwindCSS</span>
                </div>

                <div className="box"><TfiWrite className="service-icon" />
                <h3 className="icon-heading">Content Writer</h3>
                <span>English and Urdu</span>
                </div>

                  <div className="box"><PiGraphicsCardBold  className="service-icon" />
                <h3 className="icon-heading">Graphic Designer</h3>
                <span>Logo Designer</span>
                </div>
                
            </div>

        </div>
      </main>
    )
}