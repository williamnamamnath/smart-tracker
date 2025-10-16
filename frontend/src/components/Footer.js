import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light mt-auto">
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 mb-3">
                        <h5 className="mb-2">Smart Tracker</h5>
                        <p className="small mb-0">Lightweight tracking and analytics for your projects.</p>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h6 className="mb-2">Quick Links</h6>
                        <ul className="list-unstyled small mb-0">
                            <li><a href="#" className="text-reset">Home</a></li>
                            <li><a href="#" className="text-reset">Dashboard</a></li>
                            <li><a href="#" className="text-reset">Docs</a></li>
                            <li><a href="#" className="text-reset">Support</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4 mb-3">
                        <h6 className="mb-2">Contact</h6>
                        <p className="small mb-1">Email: <a href="mailto:info@example.com" className="text-reset">info@example.com</a></p>
                        <div className="d-flex gap-2">
                            <a href="#" aria-label="Twitter" className="text-reset">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M22 5.92c-.66.3-1.37.5-2.12.6.76-.46 1.34-1.2 1.61-2.07-.71.42-1.5.72-2.34.88C18.7 4 17.47 3.5 16.14 3.5c-2.47 0-4.47 2-4.47 4.47 0 .35.04.7.12 1.03-3.72-.19-7.02-1.97-9.24-4.68-.39.67-.62 1.45-.62 2.28 0 1.58.8 2.98 2.02 3.8-.59-.02-1.14-.18-1.62-.45v.05c0 2.18 1.55 4 3.61 4.42-.38.1-.78.15-1.19.15-.29 0-.57-.03-.84-.08.57 1.78 2.22 3.08 4.17 3.11-1.53 1.2-3.45 1.92-5.54 1.92-.36 0-.72-.02-1.07-.06 1.98 1.27 4.33 2.01 6.85 2.01 8.22 0 12.72-6.81 12.72-12.72l-.01-.58C20.7 7.33 21.44 6.69 22 5.92z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="GitHub" className="text-reset">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 .5C5.73.5.86 5.37.86 11.64c0 4.77 3.09 8.82 7.38 10.25.54.1.73-.23.73-.51 0-.25-.01-.92-.01-1.8-3 .66-3.64-1.45-3.64-1.45-.49-1.26-1.2-1.6-1.2-1.6-.98-.67.07-.66.07-.66 1.08.08 1.65 1.11 1.65 1.11.96 1.64 2.52 1.17 3.14.9.1-.7.38-1.17.69-1.44-2.4-.27-4.93-1.2-4.93-5.33 0-1.18.42-2.15 1.1-2.91-.11-.27-.48-1.36.11-2.83 0 0 .9-.29 2.95 1.11.85-.24 1.76-.36 2.67-.36.91 0 1.82.12 2.67.36 2.05-1.4 2.95-1.11 2.95-1.11.59 1.47.22 2.56.11 2.83.69.77 1.1 1.74 1.1 2.91 0 4.14-2.54 5.06-4.95 5.33.39.34.74 1.02.74 2.06 0 1.49-.01 2.69-.01 3.06 0 .28.19.61.74.51 4.29-1.43 7.38-5.48 7.38-10.25C23.14 5.37 18.27.5 12 .5z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="LinkedIn" className="text-reset">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.02-2.96-1.8-2.96-1.8 0-2.08 1.41-2.08 2.87v5.49H8.97V9h3.42v1.56h.05c.48-.9 1.66-1.85 3.42-1.85 3.66 0 4.34 2.41 4.34 5.55v6.74zM5.34 7.43c-1.15 0-2.08-.94-2.08-2.09 0-1.16.93-2.09 2.08-2.09 1.15 0 2.08.93 2.08 2.09 0 1.15-.93 2.09-2.08 2.09zM7.12 20.45H3.56V9h3.56v11.45z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center small pt-3 border-top border-secondary">
                    &copy; {year} Smart Tracker. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;