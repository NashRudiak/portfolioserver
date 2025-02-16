import '../stylesheets/Navigation.css';
import { Outlet, NavLink } from 'react-router-dom';

/* Unfortunately this is the cleanest way I could add a border at the bottom on the
 * current page.
 * https://reactrouter.com/start/library/navigating */
function Linker(dest, text) {
    return(
        <NavLink to={dest} className={({isActive}) => isActive ? "active" : ""}>
            {text}
        </NavLink>
    )
}

function Navigation() {
    return (
        <div class="Navigation">
            <header>
                <h1 class="titlefont">Nash Rudiak Portfolio</h1>
                <nav>
                    <ul>
                        <li>{Linker("/", "Home")}</li>
                        <li>{Linker("/projects", "Projects")}</li>
                        <li>{Linker("/sources", "Sources")}</li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    );
}

export default Navigation;