import photo from "../media/Testphoto.jpeg";
import "../stylesheets/Intro.css";
import {useInView} from "react-intersection-observer";

// https://stackoverflow.com/questions/63927027/how-to-play-animation-only-when-the-element-is-on-screen

//https://pusher.com/blog/getting-started-with-react-router-v4/#wrap-up

function Intro() {
    const [ref, inView] = useInView({ threshold: 0.5 })
    return (
        <div class="section">
            <div class="fillbar" id="right" />
            <div class="intro playspace" id="left" ref={ref}>
                <img src={photo} class={inView ? "headshot" : "hidden"} alt="Nash Rudiak" />
                <div class={inView ? "textbox titlebox" : "hidden" }>Nash A. Rudiak</div>
                <div class={inView ? "textbox captionbox" : "hidden" }>Junior Computer Scientist</div>
            </div>
        </div>
    );
}

export default Intro;