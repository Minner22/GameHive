import React from 'react';
import Login from './components/Login';
import Register from './components/Register';

const App: React.FC = () => {
    return (
        <div>
            <h1>GameHive - Logowanie i Rejestracja</h1>
            <Login />
            <hr />
            <Register />
        </div>
    );
};

export default App;
