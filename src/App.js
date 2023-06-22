import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <GoogleOAuthProvider clientId="646436992804-tleglrtvnt8fg7lkag4kmpjqn91i7edu.apps.googleusercontent.com">
      <div className="App">
        <LoginPage/>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
