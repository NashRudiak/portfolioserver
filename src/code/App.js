import '../stylesheets/App.css';
import Home from "./Home";
import Navigation from "./Navigation";
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </div>
    );
}

export default App;
