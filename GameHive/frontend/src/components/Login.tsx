import React, { useState, ChangeEvent, FormEvent } from 'react';
import AuthService from '../services/AuthService';

const Login: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleLogin = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await AuthService.login(username, password);
            alert('Zalogowano pomyślnie!');
            // Można przekierować do innej strony po udanym logowaniu
        } catch (error) {
            setErrorMessage('Błąd logowania. Sprawdź dane i spróbuj ponownie.');
        }
    };

    return (
        <div>
            <h2>Logowanie</h2>
            <form onSubmit={handleLogin}>
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
                <button type="submit">Zaloguj się</button>
            </form>
        </div>
    );
};

export default Login;
