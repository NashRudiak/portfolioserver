import "../../stylesheets/Home.css";
import {useInView} from "react-intersection-observer";

function Graduate() {
    /* want this to be seen from early on */
    const [ref, inView] = useInView({ threshold: 0 });
    const [refdesc, inViewDesc] = useInView({threshold: 0.3});
    return (
        <div class="section">
            <div class="fillbar" id="left" />
            <div class="graduate playspace" id="right">
                <div class="textbox titlebox gradtitle" ref={ref}><div class={inView ? "textanim" : "hidden" }>Honour Bachelor of Computer Science</div></div>
                <div class="textbox graddesc" ref={refdesc}>
                    <div class={inViewDesc ? "textanim" : "hidden"}>
                    As an honours graduate from the University of Guelph, Nash has experience in developing 
                    and producing programs that each have the utmost attention given. Through Guelph, 
                    Nash was given time to understand the various systems to create programs with AI, 
                    cloud computing, compilers, networks, security, databases, and web development. 
                    With experience in C, Python, Java, Javascript, and C++ there is nothing Nash can’t 
                    handle.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Graduate;