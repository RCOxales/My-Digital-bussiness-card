import twitterIcon from "../../images/twitter.png";
import facebookIcon from "../../images/facebook.png";
import instagramIcon from "../../images/instagram.png";
import githubIcon from "../../images/github.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://twitter.com/OxalesC"><img src={twitterIcon} alt="twitter icon" /></a>
        <a href="https://web.facebook.com/yanj.EO.0914/"><img src={facebookIcon} alt="facebook icon" /></a>
        <a href="https://www.instagram.com/yhanslexo/"><img src={instagramIcon} alt="instagram icon" /></a>
        <a href="https://github.com/RCOxales"><img src={githubIcon} alt="github icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;
