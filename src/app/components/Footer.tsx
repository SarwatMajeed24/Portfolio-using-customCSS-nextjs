import "../style/footer.css";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="footer">
            <h1 className="heading">Made by: Sarwat Majeed</h1>
            <p className="para">@All right reserved</p>
            <div className="social-icon">
                <Link target="blank" href="https://www.linkedin.com/feed/"> <FaLinkedin className="icon1" /></Link>
               <Link target="blank" href="https://vercel.com/sarwat-majeeds-projects"><IoLogoVercel className="icon2" /></Link>                
                <Link target="blank" href="https://github.com/SarwatMajeed24"><FaGithub className="icon3" /></Link>
                </div>
        </div>
    )
}