import IconText from "./IconText.tsx";
import styles from "./Header.module.css";

interface HeaderInfo{
  iconRef: string;
  text: string;
}
const headerInfo: Array<HeaderInfo> = [
  {
    iconRef: "LuClock4",
    text: "Mon-Fri 8:00 am-6:00 pm",
  },
  {
    iconRef: "LuPhone",
    text: "+91-213-666-0027",
  },
  { 
    iconRef: "LuMail", 
    text: "info@example.com" 
  }
];

// the container that holds the similar elements
// function Information__container() {
//   return () => {
//     return headerInfo.map((data, index) => {
//       return (
//         <li key={index}>
//           <i className={data.icon}></i>
//           {data.data}
//         </li>
//       );
//     });
//   };
// };

function Header__top() {
  return (
    <div className={styles.header__top}>
      {headerInfo.map(({ iconRef, text }) => (
        <IconText key={text} iconsrc={iconRef} text={text}></IconText>
      ))}

      {/* <Information__container></Information__container> */}
      {/* <div className="auto-container ">
        <div className="top-inner">
          <div className="top-left">
            <ul className="info clearfix">
              <li>
                <i class="icon-1"></i>Mon-Fri 8:00 am-6:00 pm
              </li>
              <li>
                <i class="icon-2"></i>
                <a href="tel:912136660027">+91-213-666-0027</a>
              </li>
              <li>
                <i class="icon-3"></i>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div className="top-right">
            <div class="login">
              <a href="index.html">Login</a>
            </div>
            <ul class="social-links clearfix">
              <li>
                <a href="index.html">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

function Header() {
  return (
    <section className={styles.header__container}>
      <Header__top></Header__top>
    </section>
  );
}

export default Header;
