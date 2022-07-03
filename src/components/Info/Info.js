import profilePic from "../../images/profile.jpg";

const Info = () => {
  const icon = {
    width: "20px",
  };

  const img = {
    borderTopRightRadius: "14px",
    borderTopLeftRadius: "14px",
  };

  const link = {
    textDecoration: "none",
    color: "#f5f5f5",
  };

  const email = () => {
    window.open("mailto:jnay.oe14@gmail.com");
  };

  const linkedIn = () => {
    window.open("https://www.linkedin.com/in/rayan-c-oxales-22559a240/");
  };

  return (
    <header>
      <nav>
        <div className="person-profile">
          <img style={img} src={profilePic} alt="profile" width="100%" />
        </div>
        <div className="profile-info">
          <div>
            <h2>Rayan C. Oxales</h2>
            <h4>Front-End Developer</h4>
            <small>
              <a
                style={link}
                href="https://www.linkedin.com/in/rayan-c-oxales-22559a240/"
                target="_blank"
                rel="noreferrer"
              >
                jnay.oe14@gmail.com
              </a>
            </small>
          </div>
          <div>
            <button onClick={email}>
              <i  className="fa fa-envelope" style={icon}></i> Email
            </button>
            <button onClick={linkedIn}>
              <i className="fa fa-linkedin" style={icon}></i> LinkedIn
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Info;
