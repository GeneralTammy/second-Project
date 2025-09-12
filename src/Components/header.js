import React from 'react';

const Header = () => {
    return (
        <header style={styles.header}>
            <img style={styles.logo} src="/logo192.png"></img>
            <nav>
                <ul style={styles.navList}>
                    <li><a href="/Home" style={styles.navItem}>Home</a></li>
                    <li><a href="/About" style={styles.navItem}>About</a></li>
                    <li><a href="/Sevices" style={styles.navItem}>Service</a></li>
                    <li><a href="/Contact" style={styles.navItem}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: 'flex',
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "black",
        color: "white"
    },
    navList: {
        display: "flex",
        listStyle: "none",
        padding: "0",
        margin: "0",
        gap: "20px",
    },
    navItem: {
        textDecoration: "none",
        color: "white"
    },
    logo: {
        width: "50px"
    }
};

export default Header;
