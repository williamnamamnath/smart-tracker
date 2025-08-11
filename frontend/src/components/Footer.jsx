const Footer = () => {

    return (
        <>
    <footer className="mt-auto py-3" style={{ backgroundColor: "#76C893" }}>

  <div className="container py-3">
    <div className="row justify-content-center">
      <div className="col-md-4 mx-5">
        <h5>About Us</h5>
        <p>SmartTracker is a budgeting app that lets you plan your finances efficiently in a proactive manner. Click <a href="/about" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">here</a> to learn more about our brand.</p>
      </div>

      <div className="col-md-4 mx-5">
        <h5>Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/faq" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">FAQs</a></li>
          <li><a href="/contact" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contact Us</a></li>
          <li><a href="/tos" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Terms of Services</a></li>
        </ul>
      </div>
    </div>

    <hr className="mb-4" />
    <div className="row">
      <div className="col-md-12">
        <h6 className="text-center">&copy; 2025 SmartTracker. All rights reserved.</h6>
      </div>
    </div>

  </div>
</footer>
        </>
    );
};

export default Footer;