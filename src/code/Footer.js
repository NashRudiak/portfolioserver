import '../stylesheets/Footer.css';
import { IconContext } from "react-icons";
import { AiFillLinkedin, AiFillGithub, AiFillPhone, AiFillMail } from "react-icons/ai";

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
                <div class="footerTitleWrapper footerSection">
                    <h1 class="titlefont">Nash Rudiak</h1>
                </div>
                <div class="contactSpot footerSection">
                    <IconContext.Provider value={{size: "1em"}}>
                        <h1 class="contactHeader titlefont">Contact</h1>
                        <ul class="contactList">
                            <li><AiFillMail /> rudiaknash@gmail.com</li>
                            <li>
                                <AiFillPhone /> (905) 320-0503
                            </li>
                        </ul>
                    </IconContext.Provider>
                </div>
                <div class="footerSection linksWrap">
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