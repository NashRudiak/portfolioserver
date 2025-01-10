import "../stylesheets/List.css"
import spacebackground from "../media/backgroundintro.png";
import guelphbackground from "../media/guelphbackground.JPG";

function Sources() {
    return (
        <div class="sectionSpan">
            <div class="fillbar" id="left" />
            <div class="playspace" id="right">
                <ul class="list">
                    <li>
                        <h2>Homepage Space Background</h2>
                        <div class="content">
                            <img src={spacebackground} alt="Space Background" />
                            <div class="textcontent">
                                <p>Credit goes to DenFreezeWolf on Deviantart for the amazing space background used for the introduction page.</p>
                                <a href="https://www.deviantart.com/denfreezewolf/art/Space-966520541">https://www.deviantart.com/denfreezewolf/art/Space-966520541</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Navbar Selection</h2>
                        <div class="content">
                            <div class="textcontent">
                                <p>
                                    To create the border for links when active, the only way I could get it 
                                    to do what I wanted was to use the exact "isActive" function.
                                </p>
                                <a href="https://reactrouter.com/start/library/navigating">https://reactrouter.com/start/library/navigating</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Play on Screen</h2>
                        <div class="content">
                            <div class="textcontent">
                                <p>
                                    One issue I had was with wanting transitions to occur on screen only when seen by the view. 
                                    Fortunately, the answer by coreyward was extremely helpful for getting what I desired. Unfortunately, 
                                    I had to use very similar code to the response as even slightly deviating would completely break the program.
                                </p>
                                <a href="https://stackoverflow.com/questions/63927027/how-to-play-animation-only-when-the-element-is-on-screen">https://stackoverflow.com/questions/63927027/how-to-play-animation-only-when-the-element-is-on-screen</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>React Router</h2>
                        <div class="content">
                            <div class="textcontent">
                                <p>
                                    Ayo Isaiah has a great tutorial for using the react router library, 
                                    which is how react programs create new pages. Due to there being multiple different 
                                    versions, their guide proved to be instrumental into understanding how to navigate in react.
                                </p>
                                <a href="https://pusher.com/blog/getting-started-with-react-router-v4/#wrap-up">https://pusher.com/blog/getting-started-with-react-router-v4/#wrap-up</a>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h2>Guelph Background</h2>
                        <div class="content">
                            <img src={guelphbackground} alt="Johnston Hall" />
                            <div class="textcontent">
                                <p>
                                    The image of the Univeristy of Guelph comes from Wikimedia commons, and has a request to be cited as follows:
                                </p>
                                <a href="https://commons.wikimedia.org/wiki/File:Johnston_Hall_University_of_Guelph.JPG">Oacstudent</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sources;