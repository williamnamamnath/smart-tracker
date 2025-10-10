import { useState } from "react";

const Contact = () => {

const [errorMessage, setErrorMessage] = useState("");
const [buttonText, setButtonText] = useState("Submit");

const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: ''
    });


    const handleChange = (field) => (event) => {
        setForm((prevForm) => ({
            ...prevForm,
            [field]: event.target.value,
        }));
    };


const handleSubmit = async (event) => {
event.preventDefault();
setButtonText("Please wait...");

try {
const response = await fetch("/inquiries", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        description: form.description
    }),
});

if (response.ok) {
setErrorMessage(null);
alert("Your inquiry has been submitted successfully!");
} else {
    const error = await response.text();
    const message = JSON.parse(error).message;
    setButtonText("Failed to submit");
    setErrorMessage(`Submission failed: ${message}`); 
}
} catch (error) {
    setButtonText("Failed to submit");
    setErrorMessage(`Submission failed: ${error.message}`);
}
};

    return (
        <>
        <div className="m-3 p-3">
            <h1 className="text-center">Contact Us</h1>
            <div className="p-3 my-3 text-center">
            <h4 className="text-center my-3">Please read below to see how you can contact us, should you have any questions or inquiries.</h4>

            <p className="fw-bold">Choose <span className="text-decoration-underline">one</span> of the 3 methods below.</p>
              
            <div className="d-flex justify-content-center gap-4 my-5">
                <div className="p-4 flex-fill text-center" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
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
                        value={form.firstName}
                        onChange={handleChange('firstName')}
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
                        value={form.lastName}
                        onChange={handleChange('lastName')}
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
                        value={form.email}
                        onChange={handleChange('email')}
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
                        value={form.description}
                        onChange={handleChange('description')}
                        placeholder="Write your comment(s) or question(s) here..."
                        required
                    ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={!form.firstName || !form.lastName || !form.email || !form.description}>
                    {buttonText}
                    </button>
                    {errorMessage && (
                            <div className="text-danger mt-3 text-center">
                                {errorMessage}
                            </div>
                        )}
                </form>
                </div>

                <div className="p-4 flex-fill text-center" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
                    <h3 className="text-decoration-underline">Reach us by Email</h3>
                </div>

                <div className="p-4 flex-fill text-center" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
                    <h3 className="text-decoration-underline">DM us on X/Twitter</h3>
                </div>
            </div>

            </div>
          </div>
        </>
    )
}; 

export default Contact;