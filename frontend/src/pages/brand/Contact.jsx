import { useState } from "react";
import { useGlobalContext } from "../authentication/globalContext";

const Contact = () => {

    const { createInquiry, error, setError } = useGlobalContext();

const [inputState, setInputState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        description: ''
    });

    const { firstName, lastName, email, description } = inputState;

    const handleChange = name => e => {
        setInputState({...inputState, [name]: e.target.value});
        setError('');
    }

  const handleSubmit = e => {
        e.preventDefault();
        createInquiry(inputState);

        setInputState({
            firstName: '',
            lastName: '',
            email: '',
            description: ''
        })
    }

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
                        value={firstName}
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
                        value={lastName}
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
                        value={email}
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
                        value={description}
                        onChange={handleChange('description')}
                        placeholder="Write your comment(s) or question(s) here..."
                        required
                    ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={!formData.fullName || !formData.email || !formData.comments}>
                    Submit
                    </button>
                    {error && (
                            <div className="text-danger mt-3 text-center">
                                {error}
                            </div>
                        )}
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