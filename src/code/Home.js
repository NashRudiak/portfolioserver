import '../stylesheets/App.css';
import Intro from './HomeComp/Intro';
import Graduate from './HomeComp/Graduate';

function Home() {
    return (
        <div className="Home">
            <Intro />
            <div class="fillbox" />
            <Graduate />
        </div>
    );
}

export default Home;
