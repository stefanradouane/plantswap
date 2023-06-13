import styles from "./navtoggle.module.scss";

const NavToggle = ({ toggleNav, navOpen }) => {
  return (
    <div className={styles.navtoggle}>
      <span></span>
      <span></span>
    </div>
  );
};

export default NavToggle;
