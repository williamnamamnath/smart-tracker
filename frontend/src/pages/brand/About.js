const About = () => {

// REMINDER: Add picture for last paragraph
// REMINDER: Add scrolling effects for each paragraph with corresponding screenshot/picture

    return (
        <>
        <div className="m-3 p-3">
            <h1 className="text-center">About Us</h1>
            <div className="my-5 p-3" style={{ border: "2px solid #000", borderRadius: "8px", padding: "24px", boxShadow: "10px 10px lightblue" }}>
            <p>
              SmartTracker is a budget app that allows you to enter your income and expenses manually in order to plan efficiently. In addition, you will be able to understand in what areas you may be spending too much in contrast to your revenue with the help of <b>categories</b>. In other words, you will be able to categorize your financial entries. By doing so, you can have a better idea of what kind of revenue or expense each entry qualifies as.</p>

              <p>This is a great tool for those that need to visualize how their finances are fluctuating over a certain period of time. With the help of <b>graphs and charts</b>, visual learners will have no problem understanding the summaries of financial tendencies. As mentioned, you will be able to view summaries over a specific period of time (e.g. for a certain week or month) to better understand where your money went. <i>However, this feature is still being worked on!</i></p>
              
              <p>Need to use your data elsewhere? <b>You will also be able to export the information that you need into a PDF file or an Excel sheet</b>, according to your preference. This gives our users more flexibility and full access to information that is rightfully theirs.</p> 
              
              <p>With the help of a <b>trusted database</b>, MongoDB will store all of your data and information safely. This allows you to focus solely on your finances, without breaking a sweat. Although this platform is completely free to use, only users that are authenticated and signed in will be able to access the benefits of what SmartTracker has to offer.</p>

              <p>My idea was to create a tool that will actually be useful to the users of this platform, even for myself. Budgeting may seem like a concept that can be complex and my goal was to simplify this process as much as possible so that users can do it seamlessly, or even enjoy doing so. As a web/application developer, the joy of building SmartTracker lies behind the idea that it can be constantly be improved by adding new features and troubleshooting potential bugs in order to ensure the smoothest user experience.</p>
            </div>
          </div>
        </>
    )
}; 

export default About;