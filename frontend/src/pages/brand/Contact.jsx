import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

    return (
        <>
        <div className="m-3 p-3">
            <h1 className="text-center">Contact Us</h1>
            <div className="p-3 my-3 text-center">
            <p className="text-center my-3">Please read below to see how you can contact us, should you have any questions or inquiries.</p>

            <p className="fw-bold">Please choose <span className="text-decoration-underline">one</span> of the 3 methods below.</p>
              
            <div className="d-flex justify-content-center gap-4 my-5">
                <div className="border rounded p-4 flex-fill text-center">
                    <h3 className="text-decoration-underline">Inquiry Form</h3>

                    <form onSubmit={handleSubmit} className="mt-3">
                    <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                        First Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                        Last Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                    </div>

                    <div className="mb-3">
                    <label htmlFor="comments" className="form-label">
                        Comments/Question(s)
                    </label>
                    <textarea
                        className="form-control"
                        id="comments"
                        name="comments"
                        rows="4"
                        value={formData.comments}
                        onChange={handleChange}
                        placeholder="Write your comments or question(s) here..."
                        required
                    ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={!formData.fullName || !formData.email || !formData.comments}>
                    Submit
                    </button>
                </form>
                </div>

                <div className="border rounded p-4 flex-fill text-center">
                    <h3 className="text-decoration-underline">Reach us by Email</h3>
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