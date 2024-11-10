import Link from "next/link"
import "../style/header.css"
import Image from "next/image"


export default function Header(){
    return(
           <div className="header">
             <div className="logo-div">
                <Image src={"/images/my pic.jpeg"}
                width={50}
                height={50}
                alt="Profile Pic" 
                className="logo-image"
                />
                <h1 className="logo">SM</h1>
                  </div>
                 <div className="right-header">
                    <ul className="header-links">
                     <li>
                       <Link className="nav-links" href={"/"}>Home</Link>
                      </li>
                    <li>
                  <Link className="nav-links" href={"/about"}>About</Link>
                 </li>
                <li>
             <Link className="nav-links" href={"/contact"}>Contact</Link>
        </li>
      </ul>
        </div>
        </div>
    )
}