import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginPage from '../Pages/LoginPage';

export default function GoogleAuth() {
  return (
    <GoogleOAuthProvider clientId="277151666562-q2esfeec0ihh3o4b61qh4j86skm4v3tt.apps.googleusercontent.com">
      <div className="App">
        <LoginPage/>
      </div>
    </GoogleOAuthProvider>
  )
}
