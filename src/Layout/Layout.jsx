import React from 'react';
import Nav from '../components/nav/nav';
import Footer from '../components/footer/footer';

const Layout = (props) => (
    <div>
        <nav>
            <Nav/>
        </nav>
        <main>
            {props.children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>
)

export default Layout;