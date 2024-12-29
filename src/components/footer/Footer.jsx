import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="mainFooter container">
          <div className="footerContact">
            <h4 className="footerTitle">Contact</h4>
            <p className="address">Sadat City, Menoufia Governorate, Egypt</p>
            <p className="tel">Tel: +201092406581</p>
          </div>

          <div className="otherPages">
            <h4 className="footerTitle">Pages</h4>
            <ul>
              <li>
                <Link to={"/"}>home</Link>
              </li>
              <li>
                <Link to={"/contact"}>contact us</Link>
              </li>
              <li>
                <Link to={"/privacy"}>privacy policy</Link>
              </li>
              <li>
                <Link to={"/terms"}>terms and conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="secFooter">
        <div className="secFooterContent container flexCenterSpace">
          <p className="cpyRight">
            &copy; All Right Reserved <span>
              ZA<span>H</span>E<span>R</span>
            </span> 2024
          </p>

          <div className="icons">
            <a href="https://www.facebook.com/profile.php?id=61570315196385" target='_blank'><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com/company/zaher-hr/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_company%3By0tLxCwQSHyUDT1aGTL%2FTw%3D%3D" target='_blank'><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer