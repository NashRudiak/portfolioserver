import '../stylesheets/Footer.css';
import { IconContext } from "react-icons";
import { AiFillLinkedin, AiFillGithub, AiFillPhone } from "react-icons/ai";

/* Unfortunately I have to import the colors from App.css here
 * as there does not seem to be a way to use them from the style sheet */
export const Themes = {
    backEmph: "#e6e6e6",
    backPress: "#c2c2c2",
    backReg: "#d7d7d7",
    textCol: "#383838",
    pageHigh: "#686868",
    textShadow: "#a5a5a5"
};

function Footer() {
    return(
        <footer>
            <IconContext.Provider value={{ color: Themes.pageHigh, size: "2em"}}>
                <div class="contactSpot">
                    <h1 class="test">Contact</h1>
                    <ul class="contactList">
                        <li>rudiaknash@gmail.com</li>
                        <li>
                            <IconContext.Provider value={{size: "1em"}}><AiFillPhone /></IconContext.Provider> (905) 320-0503
                        </li>
                    </ul>
                </div>
                <div class="links">
                    <ul class="linkList">
                        <li>
                            <a href="https://www.linkedin.com/in/nash-rudiak-46ab11346"><AiFillLinkedin /></a>
                        </li>
                        <li>
                            <a href="https://github.com/NashRudiak"><AiFillGithub /></a>
                        </li>
                    </ul>
                </div>
            </IconContext.Provider>
        </footer>
    );
}

export default Footer;