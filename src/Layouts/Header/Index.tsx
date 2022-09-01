import styles from "./Header.module.scss";
import logo from "../../Assets/SVG/Logo.svg";
import Input from "../../Components/Input/Index";
import bell from "../../Assets/SVG/bell-light.svg";
import cart from "../../Assets/SVG/cart-shopping-light (2).svg";
import globe from "../../Assets/SVG/globe-light.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <img src={logo} alt={"Doc-Sta Academy"} className={styles.logo} />
        <div className={styles.categories}>
          <span>Categories</span>
        </div>
        <Input
          type={"search"}
          placeholder={"Search anything"}
          className={styles.input}
        />
        <div className={styles.categories}>
          <span>Be our Instructor</span>
        </div>
        <div className={styles.categories}>
          <span>My Courses</span>
        </div>

        <div className={styles.control_icons}>
          <img src={globe} alt={"globe"} />
          <img src={bell} alt={"bell"} />
          <img src={cart} alt={"cart"} />
          <div className={styles.avatar}>JW</div>
        </div>
      </div>
    </header>
  );
};
