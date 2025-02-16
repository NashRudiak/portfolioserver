import '../stylesheets/App.css';
import Intro from './HomeComp/Intro';
import Graduate from './HomeComp/Graduate';
import Explore from './HomeComp/Explore';

function Home() {
    return (
        <div className="Home">
            <Intro />
            <div class="fillbox" />
            <Graduate />
            <div class="fillbox" />
            <Explore />
        </div>
    );
}

export default Home;
