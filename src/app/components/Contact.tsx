import "../style/contact.css"
export default function Contact(){
    return(
        <main className="contact-main">
            <div className="form-container">
            <h1 className="contact-title">Contact Us</h1>
                <form action="" className="form">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder="abc@gmail.com"/>
                    <input type="text" placeholder="Your message" className="msg"/>
                </form>
                <div className="btn">
                <button className="btn-format">Submit</button>
                </div>
                
            </div>
        </main>
    )
}