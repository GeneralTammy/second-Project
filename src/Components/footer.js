import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";
import 'boxicons'
const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContainer}>
                <div style={styles.footerHeadings0}>
                    <h1 style={styles.logo}>Contact Us</h1>
                    <p style={styles.navItem1}>Email: Samkorede007@gmail.com</p>
                    <p style={styles.navItem1}>Phone Number: +2349091433193</p>
                    <p style={styles.navItem1}>No. 1 Prevail Avenue, Paseda Tipper, Ibadan, Nigeria.</p>
                    
                </div>

                <div style={styles.footerHeadings1}>
                    <h1 style={styles.logo}>About Us</h1>
                    <nav>
                        <ul style={styles.navList}>
                            <li><a href="/" style={styles.navItem}>Blog</a></li>
                            <li><a href="/" style={styles.navItem}>Demo</a></li>
                            <li><a href="/" style={styles.navItem}>customers</a></li>
                            <li><a href="/" style={styles.navItem}>investor</a></li>
                        </ul>
                    </nav>
                </div>

                <div style={styles.footerHeadings2}>
                    <h1 style={styles.logo}>Company</h1>
                    <nav>
                        <ul style={styles.navList}>
                            <li><a href="/" style={styles.navItem}>Jobs</a></li>
                            <li><a href="/" style={styles.navItem}>support</a></li>
                            <li><a href="/" style={styles.navItem}>Contact</a></li>
                            
                        </ul>
                    </nav>
                </div>

                <div style={styles.footerHeadings3}>
                    <h1 style={styles.logo}>Social Media</h1>
                    <nav>
                        <ul style={styles.navList}>
                            <li><a href="/" style={styles.navItem}>Facebook</a></li>
                            <li><a href="/" style={styles.navItem}>Youtube</a></li>
                            <li><a href="/" style={styles.navItem}>Whatsapp</a></li>
                            <li><a href="/" style={styles.navItem}>Instgram</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};


const styles = {
    footer: {
        alignItems: "center",
        padding: "50px 50px",
        backgroundColor: "rgb(169, 240, 98)",
        color: "black",
        border: "2px solid rgb(169, 240, 98)"
        
    },

    footerContainer: {
        display: "grid",
        gridTemplateColumns: "25% 25% 25% 25% 25%",
        gap: "10px"
    },

    footerHeadings: {
        
        padding: "0px",
        
        
    },

    navItem: {
        textDecoration: "none",
        color: "black",
        paddingTop: "40px",
        textTransform: "capitalize"
        
        
    },



    
    navList: {
        listStyle: "none",
        
        
        
    },

    logo: {
        color: "white"
    },

    navItem1: {
        fontWeight: "600"
    }
};
export default Footer;