import "../../stylesheets/Home.css";
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

function Explore() {
    const [suggestcap, inViewCap] = useInView({ threshold: 0.5 });
    const [proj1, inView1] = useInView({ threshold: 0.1 });
    const [proj2, inView2] = useInView({ threshold: 0.1 });
    const [proj3, inView3] = useInView({ threshold: 0.1 });
    return(
        <div class="section">
            <div class="fillbar" id="right" />
            <div class="playspace projectoverview" id="left">
                <div class="suggestbox" ref={suggestcap}>
                    <div class="titlefont emphtext">Explore</div>
                    <div class={inViewCap ? "textbox suggestcaption textanim" : " suggestcaption textbox suggesthide"}>See the various projects Nash has contributed towards</div>
                    <NavLink to="/projects"><button class="button">View Projects</button></NavLink>
                </div>
                <div class="projectbox">
                    <ul>
                        <div ref={proj1}>
                            <li class={inView1 ? "slidein" : "hidden"}>
                                <div class={inView1 ? "textlist" : "hidden"}>
                                    A custom compiler which translates C- code into a file which can be used by turing machine simulators.
                                </div>
                            </li>
                        </div>
                        <div ref={proj2}>
                            <li class={inView2 ? "slidein" : "hidden"}>
                                <div class={inView2 ? "textlist" : "hidden"}>
                                    Two programs designed to use Azure and Google Cloud Platform to launch and create custom Virtual Machines
                                </div>
                            </li>
                        </div>
                        <div ref={proj3}>
                            <li class={inView3 ? "slidein" : "hidden"}>
                                <div class={inView3 ? "textlist" : "hidden"}>
                                    This very website designed from scratch using the React framework, with personally designed CSS stylesheet from scratch.
                                </div>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Explore;