import React, { useState, ChangeEvent, FormEvent } from 'react';
import AuthService from '../services/AuthService';

const Register: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleRegister = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await AuthService.register(username, password);
            alert('Zarejestrowano pomyślnie!');
            // Można przekierować do strony logowania po rejestracji
        } catch (error) {
            setErrorMessage('Błąd rejestracji. Sprawdź dane i spróbuj ponownie.');
        }
    };

    return (
        <div>
            <h2>Rejestracja</h2>
            <form onSubmit={handleRegister}>
                <div>
                    <label>Nazwa użytkownika:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Hasło:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                <button type="submit">Zarejestruj się</button>
            </form>
        </div>
    );
};

export default Register;
