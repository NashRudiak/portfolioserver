import '../stylesheets/App.css';
import Home from "./Home";
import Navigation from "./Navigation";
import Sources from "./Sources";
import Projects from "./Projects"
import { Routes, Route } from 'react-router-dom';
import Footer from "./Footer";

function App() {
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="projects" element={<Projects />} />
                <Route path="sources" element={<Sources />} />
            </Route>
        </Routes>
        <Footer />
    </div>
    );
}

export default App;
