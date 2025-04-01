import photo from "../../media/personalshot.jpeg";
import "../../stylesheets/Home.css";
import {useInView} from "react-intersection-observer";

/* Website section for name and image of me */

function Intro() {
    const [ref, inView] = useInView({ threshold: 0.1 });
    return (
        <div class="section">
            <div class="fillbar" id="right" />
            <div class="intro playspace" id="left" ref={ref}>
                <img src={photo} class={inView ? "headshot" : "hidden"} alt="Nash Rudiak" />
                <div class={inView ? "textbox titlebox introtitle" : "hidden" }>Nash A. Rudiak</div>
                <div class={inView ? "textbox titlebox captionbox" : "hidden" }>Junior Computer Scientist</div>
            </div>
        </div>
    );
}

export default Intro;