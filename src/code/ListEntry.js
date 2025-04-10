import "../stylesheets/List.css";
import "../stylesheets/App.css";
import {useInView} from "react-intersection-observer";

function ListEntry(title, caption = null, text = "", link = null, img = null, imgText = null) {
    const [ref, inView] = useInView({ threshold: 0 });

    /* While I could have multiple separate functions to perform these actions,
     * it is just easier to do this the quick and dirty way */
    let capComp = "";
    if (caption != null) {
        capComp = <h3>{caption}</h3>;
    }
    let imgComp = ""
    if (img != null && imgText != null) {
        imgComp = <img src={img} alt={imgText} />
    }
    let linkComp = ""
    if (link != null) {
        linkComp = <a href={link} class={inView ? "listlinkanim" : "hidden"}>{link}</a>
    }

    return(
        <li ref={ref} class={inView ? "slideinleft listEntry" : "listEntry hidden"}>
            <h2 class="titlefont">{title}</h2>
            {capComp}
            <div class="content">
                {imgComp}
                <div class={inView ? "textcontent" : "hidden"}>
                    {text}
                    {linkComp}
                </div>
            </div>
        </li>
    );
}

export default ListEntry;