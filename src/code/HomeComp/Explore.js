import "../../stylesheets/Home.css";
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

function Explore() {
    const [proj1, inView1] = useInView({ threshold: 0.5 });
    const [proj2, inView2] = useInView({ threshold: 0.5 });
    const [proj3, inView3] = useInView({ threshold: 0.5 });
    return(
        <div class="section">
            <div class="fillbar" id="right" />
            <div class="playspace projectoverview" id="left">
                <div class="suggestbox">
                    <div class="titlefont emphtext">Explore</div>
                    <div class="textbox">See the various projects Nash has collaborated/contributed to</div>
                    <NavLink to="/projects"><button class="button">View Projects</button></NavLink>
                </div>
                <div class="projectbox">
                    <ul>
                        <li ref={proj1}>
                            <div class={inView1 ? "" : "hidden"}>
                                proj1test
                            </div>
                        </li>
                        <li ref={proj2}>
                            <div class={inView2 ? "" : "hidden"}>
                                proj2hehe
                            </div>
                        </li>
                        <li ref={proj3}>
                            <div class={inView3 ? "" : "hidden"}>
                                proj3
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Explore;