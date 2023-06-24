import { useGoogleLogin } from '@react-oauth/google';
import './Login.css';
import googleicon from '../google-icon.png'
import appleicon from '../apple 1.png';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            navigate("/dashboard");
        },
    });

    return (
        <div className='page'>
            <div >
                <div className='sign-text'>Sign In</div>
                <div className='signAcc-text'>Sign in to your account</div>
            </div>
            <div className='btns'>
                <button onClick={() => login()} className='btn'>
                    <img src={googleicon}/> Sign in with Google 
                </button>
                <button className='btn'>
                    <img src={appleicon}/>Sign in with Apple
                </button>
            </div>
            <div className='form'>
                <form>
                    <div>
                        <div className='label'><label htmlFor="email"><b>Email Address</b></label></div>
                        <div><input className="inputField" type="text" name="email"/></div>
                    </div>
                    <div>
                    <div className='label'><label htmlFor="psw"><b>Password</b></label></div>
                        <div><input className="inputField" type="password" name="psw"/></div>
                    </div>
                    <button className='blueBtn'>Forget Password?</button>
                    <div><button type="submit" className='submitBtn'>Sign In</button></div>
                </form>
            </div>
            <div className='register'>
                Don't have a account? <button className='blueBtn registerBtn'>Register Here</button>
            </div>
        </div>
    )
}