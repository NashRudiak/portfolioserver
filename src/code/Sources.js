import "../stylesheets/List.css";
import ListEntry from "./ListEntry";
import spacebackground from "../media/backgroundintro.png";
import guelphbackground from "../media/guelphbackground.JPG";
import codebackground from "../media/pexels-photo-276452.webp";
import provarchive from "../media/Provincial_Archives.jpg";
import projectbackground from "../media/projectBackground.jpeg";

function Sources() {
    return (
        <div class="sectionSpan">
            <div class="fillbar" id="left" />
            <div class="playspace sourcesBackground" id="right">
                <ul class="list">
                    {ListEntry(
                        "Homepage Space Background",
                        null,
                        <>
                        <p>
                            Credit goes to DenFreezeWolf on Deviantart for the amazing space background used for the introduction page.
                        </p>
                        </>,
                        "https://www.deviantart.com/denfreezewolf/art/Space-966520541",
                        spacebackground,
                        "Space Background"
                    )}
                    {ListEntry(
                        "Navbar Selection",
                        null,
                        <>
                        <p>
                            To create the border for links when active, the only way I could get it 
                            to do what I wanted was to use the exact "isActive" function.
                        </p>
                        </>,
                        "https://reactrouter.com/start/library/navigating"
                    )}
                    {ListEntry(
                        "Play on Screen",
                        null,
                        <>
                        <p>
                            One issue I had was with wanting transitions to occur on screen only when seen by the view. 
                            Fortunately, the answer by coreyward was extremely helpful for getting what I desired. Unfortunately, 
                            I had to use very similar code to the response as even slightly deviating would completely break the program.
                        </p>
                        </>,
                        "https://stackoverflow.com/questions/63927027/how-to-play-animation-only-when-the-element-is-on-screen"
                    )}
                    {ListEntry(
                        "React Router",
                        null,
                        <>
                        <p>
                            Ayo Isaiah has a great tutorial for using the react router library, 
                            which is how react programs create new pages. Due to there being multiple different 
                            versions, their guide proved to be instrumental into understanding how to navigate in react.
                        </p>
                        </>,
                        "https://reactrouter.com/start/library/navigating"
                    )}
                    {ListEntry(
                        "Guelph Background",
                        null,
                        <>
                        <p>
                            The image of the Univeristy of Guelph comes from Wikimedia commons, and has a request to be cited as follows:
                        </p>
                        <p>
                        <a href="https://commons.wikimedia.org/wiki/File:Johnston_Hall_University_of_Guelph.JPG">Oacstudent</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
                        </p>
                        </>,
                        "https://commons.wikimedia.org/wiki/File:Johnston_Hall_University_of_Guelph.JPG",
                        guelphbackground,
                        "Johnston Hall, University of Guelph, Ontario"
                    )}
                    {ListEntry(
                        "Code Background",
                        null,
                        <>
                        <p>
                            For the image of code used in the background of the projects, an image created by 
                            Pixabay was used which was posted on Pexels
                        </p>
                        </>,
                        "https://www.pexels.com/photo/computer-c-code-276452/",
                        codebackground,
                        "Background image of code from Pexels"
                    )}
                    {ListEntry(
                        "Chalk Board Background",
                        null,
                        <>
                        <p>
                            The background of the sources page comes from Wikimedia by the user Htm, titled 
                            "Provincial Archives of Hämeenlinna", which has an additional request to have the 
                            following included alongside the link:
                        </p>
                        <p>
                            Htm, CC BY-SA 3.0 via Wikimedia Commons
                        </p>
                        </>,
                        "https://commons.wikimedia.org/wiki/File:Provincial_Archives_of_H%C3%A4meenlinna_1.jpg",
                        provarchive,
                        "Provincial Archives of Hämeenlinna by Htm"
                    )}
                    {ListEntry(
                        "Hosting a VPS server",
                        null,
                        <>
                        <p>
                            To actually host the react app on the cloud server, I ended up needing to look up how
                            as I couldn't find a good file path for the React website to host anything.
                        </p>
                        <p>
                            Fortunately, J Karelins made an excellent guide on hosing a React app on a website. It
                            goes through not only the actual process of hosting the app but also getting a SSL certificate
                        </p>
                        </>,
                        "https://medium.com/swlh/react-app-deployment-to-vps-cloud-server-2de4387f59f4"
                    )}
                    {ListEntry(
                        "Explore Background",
                        null,
                        <>
                        <p>
                            For the background of the project I needed something that associated with code. 
                            I ended up finding this following image on Rawpixel which was what I wanted.
                        </p>
                        <a href="https://www.rawpixel.com/image/5941864">https://www.rawpixel.com/image/5941864</a>
                        <p>
                            However, on closer inspection I found multiple different sites hosting the image and no author 
                            attributed, not even an AI. The best source I found was on the Rawpixel site it had a origin of
                            image under the liscense that linked back to pxhere, but still no author.
                        </p>
                        </>,
                        "https://pxhere.com/en/photo/918274#google_vignette",
                        projectbackground,
                        "Macbook coding by Rawpixel"
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Sources;