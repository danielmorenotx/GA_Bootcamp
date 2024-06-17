import List from "../List/List";
import "./Footer.css"

const Footer = () => {
  const listObjects = [
    {href: "#", name: "Twitter", desc: "twitter link"},
    {href: "#", name: "LinkedIn", desc: "linkedin link"},
    {href: "#", name: "GitHub", desc: "GitHub link"},
  ]

  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: john.doe@example.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Social</h4>
          <ul>
            {
              listObjects.map((list, index) => <List key={index} name={list.name} href={list.href} desc={list.desc}/>
              )
            }
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer