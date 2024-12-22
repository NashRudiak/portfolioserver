import "../stylesheets/List.css"
import spacebackground from "../media/backgroundintro.png";

function Sources() {
    return (
        <div class="sectionSpan">
            <div class="fillbar" id="left" />
            <div class="playspace" id="right">
                <ul class="list">
                    <li>
                        <img src={spacebackground} alt="Space Background" />
                        <div class="content">
                            <p>Credit to DenFreezeWolf for the background image</p>
                            <a href="https://www.deviantart.com/denfreezewolf/art/Space-966520541">https://www.deviantart.com/denfreezewolf/art/Space-966520541</a>
                        </div>
                    </li>
                    <li>
                        <div class="content">
                            <p>
                                To create the border for links when active, the only way 
                                I could get it to do what I wanted was to use the exact
                                "isActive" function.
                            </p>
                            <a href="https://reactrouter.com/start/library/navigating">https://reactrouter.com/start/library/navigating</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Sources;