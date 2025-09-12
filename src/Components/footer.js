import React from "react";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContainer}>
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
                    <h1 style={styles.logo}>Contact Us</h1>
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
        padding: "10px 200px",
        backgroundColor: "black",
        color: "white",
        
    },

    footerContainer: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
        gap: "100px"
    },

    footerHeadings: {
        
        padding: "20px",
        
        
    },
    navItem: {
        textDecoration: "none",
        color: "white"
    },
    navList: {
        listStyle: "none",
        
    }
};
export default Footer;