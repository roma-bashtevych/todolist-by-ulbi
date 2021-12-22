import './Navbar.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className={'navbar'}>
            <div className="navbar__links">
                <NavLink className={'navbar__link'} to={'/about'}>Про...</NavLink>
                <NavLink className={'navbar__link'} to={'/posts'}>Пости</NavLink>
            </div>
        </div>
    )
}
