const FAQ = () => {

    return (
        <>
        <div className="m-3 p-3">
            <h1 className="text-center">Frequently Asked Questions</h1>
            <div className="p-3">
            <h5 className="text-center">Please read below as we may find the answer to some of your questions. Should you feel the need to reach out to use directly for more specific question, please visit the last question of this page.</h5>

            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold" >Q: How secure is my data and information?</p>
            <p>A: Your data is secure thanks to encryption and user authentication methods. Your information would <b>optionally</b> be used for statistical or research purposes. For example, the user's country of origin and/or the consumer's assigned ID when using SmartTracker to compile the number of users in our database. Be sure to visit the <i>Privacy Policy</i> section of our <a href="/tos" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><i className="fw-bold">Terms of Services</i></a> for more information.</p>
            </div>
              
            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold">Q: How is my information stored?</p>
            <p>A: Your information is saved securely with the help of MongoDB. It is a "document databse with the scalability and flexibility that you want with the querying and indexing that you need." Here some numbers that show how reliable this product is: </p>
            <ul>
                <li>85,000,000+ Downloads and Atlas Clusters</li>
                <li>1,300,000+ MongoDB University Students</li>
                <li>1,000,000+ Community Members</li>
            </ul>
            <p>For more information, visit their <a href="https://www.mongodb.com/company/what-is-mongodb" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" target="_blank">website</a>. Please note that SmartTracker is <b>NOT</b> sponsored by MongoDB.</p>
            </div>
              
            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold">Q: Is this platform free to use?</p>
            <p>A: SmartTracker is completely free of charge, with no subscription plans. Anyone can take advantage of all the benefits that this tracking tool has to offer, as long as users have an account.</p>
            </div>

            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold">Q: Is SmartTracker linked to any bank affiliations?</p>
            <p>A: No, SmartTracker is not linked, nor sponsored by any banks. You will not be able to sign in or connect with your bank affiliation on this platform. Your data will have to be entered manually.</p>
            </div>

            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold">Q: Is there a limit for the number of transactions I enter per day?</p>
            <p>A: No, you may enter as much data as you want without worrying about a transaction limit or fee.</p>
            </div>

            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold">Q: Is there a mobile app version for this platform?</p>
            <p>A: There is currently no app in the <i>Google Play Store</i> or <i>App Store</i> for Android and iOS devices, but we plan on releasing mobile versions in the near future.</p>
            </div>

            <div className="my-5" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p className="fw-bold">Q: Who can I contact if I have any other questions?</p>
            <p>A: You may visit the <i>Contact Us</i> link in our footer below, or you may click <a href="/contact" className="link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">here</a>.</p>
            </div>

            </div>
          </div>
        </>
    )
}; 

export default FAQ;