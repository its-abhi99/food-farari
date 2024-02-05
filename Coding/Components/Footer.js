// Footer component for footer section
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By
      <i className="fa-solid fa-heart"></i>
      <a
        href="https://www.linkedin.com/in/abhishek99kumar/"
        target="_blank"
        title="Abhishek Kumar's Linkedin Profile"
      >
        Abhishek Kumar
      </a>
      <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Farari</span>
        </strong>
    </div>
  );
};

export default Footer;
