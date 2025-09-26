import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <img style={styles.logo} src="/logo192.png" alt="Logo" />
      <nav>
        <ul style={styles.navList}>
          <li><a href="/Home" style={styles.navItem}>Home</a></li>
          <li><a href="/About" style={styles.navItem}>About</a></li>
          <li><a href="/Services" style={styles.navItem}>Service</a></li>
          <li><a href="/Contact" style={styles.navItem}>Contact</a></li>
        </ul>
      </nav>
      <box-icon style={styles.cartItem0} type="solid" name="cart" color="black" size="m"></box-icon>
      <box-icon style={styles.cartItem2} type="solid" name="user" color="black" size="m"></box-icon>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "black",
    position: "fixed",
    zIndex: 10,  
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: "borderBox"
  },
  navList: {
    display: "flex",
    listStyle: "none",
    padding: "10px 150px",
    margin: 0,
    gap: "20px",
  },
  navItem: {
    textDecoration: "none",
    color: "black",
    fontWeight: 600,
    fontSize: "16px",
    paddingLeft: "599%"
  },
  logo: {
    width: "50px",
    padding: "10px 70px"
  },
  cartItem0: {
    marginRight: "20px",
    paddingLeft: "40%"
  },
  cartItem2: {
    marginRight: "100px"
  }
};



const style = document.createElement('style');
style.textContent = `
  a:hover {
    background-color: rgba(33, 55, 11, 0.1);
    color: rgb(139, 210, 78);
  }
`;
document.head.appendChild(style);



export default Header;
