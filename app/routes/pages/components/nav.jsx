import React from 'react';
import { Link } from 'react-router';

class Nav extends React.Component {
    render() {
        const pages = [
            [ 'page1', 'Page1' ],
            [ 'page2', 'Page2' ]
        ]

        return (
            <nav>
                {pages.map((page, index) => (
                    <Link
                        key={page[0]}
                        to={`/page/${page[0]}`}
                        >{page[1]}</Link>
                ))}
            </nav>
        )
    }
}

export default Nav