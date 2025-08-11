const Contact = () => {

    return (
        <>
        <div className="m-3 p-3">
            <h1 className="text-center">Contact Us</h1>
            <div className="p-3 text-center">
            <p className="text-center">Please read below to see how you can contact us, should you have any questions or inquiries.</p>

            <p className="fw-bold">Please choose <span className="text-decoration-underline">one</span> of the 3 methods below.</p>
              
            <div className="d-flex justify-content-center gap-4 my-5">
                <div className="border rounded p-4 flex-fill text-center">
                    <h3 className="text-decoration-underline">Inquiry Form</h3>
                </div>
                
                <div className="border rounded p-4 flex-fill text-center">
                    <h3 className="text-decoration-underline">Reach Us by Email</h3>
                </div>

                <div className="border rounded p-4 flex-fill text-center">
                    <h3 className="text-decoration-underline">DM us on X/Twitter</h3>
                </div>
            </div>

            </div>
          </div>
        </>
    )
}; 

export default Contact;