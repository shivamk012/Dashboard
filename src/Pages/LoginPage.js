import Login from "../Components/Login"
import LeftSide from "../Components/LeftSide"
import "./LoginPage.css"

export default function LoginPage(){
    return(
        <div className="loginPage">
            <div className="left"><LeftSide quote="Board."/></div>
            <div className="right"><div className="centered"><Login/></div></div>
        </div>
    )
}