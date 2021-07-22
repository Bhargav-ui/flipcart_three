import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <>
            <div >
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active" to="/home2">
                            Home2
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link className="nav-link active" to="/input">
                            input
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default Nav;