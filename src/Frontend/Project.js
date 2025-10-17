import SMS from "./image/SMS.png";
import IC from "./image/IC.png";
import SWM from "./image/SWM.png";
import RB from "./image/RB.png";
import "./Project.css";

function Project() {
    return (
        <>
            <h1>Porject</h1>
            <div className="porject-card">
                <img src={SMS} alt="Sutdent Management" />
            </div>
            <div className="centener">
                <h1>Student Management System</h1>
                <p>Developed a full-featured web application for managing student records using HTML, CSS, JavaScript, TypeScript, and PostgreSQL.
                    The system enables administrators to add, edit, delete, and view student details, as well as manage attendance and academic records.
                    Implemented TypeScript for type safety and maintainability, and PostgreSQL for secure, relational data storage.
                    Focused on responsive design for usability across devices and clean, intuitive UI for efficient navigation.

                </p>
            </div>

            <div className="porject-card">
                <img src={IC} alt="Income calcuater" />
            </div>
            <div className="centener">
                <h1></h1>
                <h1>Income Calculator</h1>
                <p>A simple, interactive web application built using HTML, CSS, and JavaScript to help users quickly calculate their total income based on daily, weekly, or monthly earnings. The tool features a clean and responsive UI, real-time calculations as values are entered, and clear output formatting for easy understanding. This project showcases DOM manipulation, event handling, and basic arithmetic operations in JavaScript, along with a user-friendly layout created with CSS.

                </p>
            </div>

            <div className="porject-card">
                <img src={SWM} alt="Steel Waste Manegent" />
            </div>
            <div className="centener">
                <h1>Steel Waste Management</h1>
                <p>Steel Waste Management is a responsive React.js web page designed to showcase sustainable practices for tracking and handling steel waste. It highlights waste categories, recycling benefits, and eco-friendly solutions through a clean, user-friendly interface.</p>
            </div>

            <div className="porject-card">
                <img src={RB} alt="Recipe Book" />
            </div>
            <div className="centener">
                <h1>Recipe Book</h1>
                <p>Recipe Book is a simple, static web page built using HTML and CSS to showcase various recipes in an organized and visually appealing layout. It features recipe titles, ingredients, and preparation steps, styled with a clean and responsive design for an enjoyable browsing experience.</p>
            </div>
        </>
    )
}

export default Project;