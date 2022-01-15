import './Header.css'
import React from 'react'


class Header extends React.Component {
    render() {
        return (
            <div className="navbar">

                <div className="menu_items">

                    <div className="menu_items_1">
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Experience</a></li>
                        </ul>
                    </div>

                    <div className="menu_items_2">
                        <ul>
                            <li><a href="">Projects</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>

                </div>

            </div>

        );
    }

}


export default Header
