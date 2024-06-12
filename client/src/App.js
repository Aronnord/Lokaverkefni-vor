import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopMenu from './components/TopMenu';
import Logo from './components/Logo';
import Carousel from './components/Carousel';
import EmailForm from './components/EmailForm';

const App = () => {
    return (
        <Router>
            <div>
                <Logo />
                <TopMenu />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pick-dish" element={<PickDish />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Carousel />
            </div>
        </Router>
    );
};

const Home = () => (
    <div>
        <h1>Home Page</h1>
        <EmailForm />
    </div>
);

const PickDish = ({ location }) => {
    const userInfo = location.state?.userInfo || {};

    return (
        <div>
            <h1>Pick Dish Page</h1>
            <p>Welcome, {userInfo.name}!</p>
            {/* Pre-fill information here using userInfo */}
        </div>
    );
};

const Contact = () => <div><h1>Contact Page</h1></div>;

export default App;