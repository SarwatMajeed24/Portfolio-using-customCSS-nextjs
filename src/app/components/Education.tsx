import "../style/education.css"

export default function Education(){
   return(
<main className="education-main">
    <div className="education-text">
        <h1 className="heading1">Education</h1>
    </div>
       <div className="box-container-education">
        <div>
        <h1 className="uni-names">Governor House</h1>
        <span className="year">Student</span>
        </div>
        <div className="degree">
            <h1>GIAIC</h1>
            <p> I am a student of Generative inititative Artificial Intelligence Cloud Web 3.0Frontend Development Stack and MetaVerse in governor house</p>
        </div>
    </div>

    <div className="box-container-education">
        <div>
        <h1 className="uni-names">Government College of Education</h1>
        <span className="year">2014-2016</span>
        </div>
        <div className="degree">
            <h1>Masters in Educational Administration and Management </h1>
            <p>I have done Masters in Educational Administration and Management with A-one grade</p>
        </div>
    </div>

    <div className="box-container-education">
        <div>
        <h1 className="uni-names">Raana Liaquat Ali Khan Government College of Education</h1>
        <span className="year">1998-2000</span>
        </div>
        <div className="degree">
            <h1>Bachlor in Art and craft</h1>
            <p>I have done Bachlor in Art and Craft</p>
        </div>
    </div>

</main>
   )
}