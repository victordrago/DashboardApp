import React from 'react'
import { NavLink} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import { NavDropdown } from 'react-bootstrap';


export const Sidebar = () => {
    return (
        <div className="sidebar bg-light">
            <ul>
                <li><br /><br /><br />
                    <NavLink to="/" exact className="text-dark rounded py-2 w-100 d-inline-block px-6" activeClassName="active">
                        <FaIcons.FaHome className="me-2"/> Dashboard</NavLink>
                </li>
                <li>
                    <FaIcons.FaUserAlt className="me-2"/>
                    <NavDropdown title="User" exact className="text-dark rounded  py-2 w-50 d-inline-block px-6" activeClassName="active">
                    <FaIcons.FaUserPlus className="me-3"/>
                    <NavDropdown.Item href="/new_user" exact className="text-dark rounded  py-1 w-50 d-inline-block px_6" activeClassName="active">New User</NavDropdown.Item>
                    </NavDropdown>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;
