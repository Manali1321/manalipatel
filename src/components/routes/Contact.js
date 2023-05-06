const React = require("react");
const { useState } = require("usestate");

function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const data = new FormData(form);
    var userName = data.get("name");
    console.log(userName);
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        body: userName,
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main>
      <div id='contact'>
        <div>
          <img src="./image/contact.jpeg" width="300" alt="me"></img>
        </div>
        <div className='contact-detail'>
          <h1>Send me a message</h1>
          {status === "success" && (
            <p>Your message was sent successfully. Thank you.!!</p>
          )}
          {status === "error" && <p id="error">Something went wrong. Send a Email to me: <a href="mailto: patelmanali216@gmail.com">Click Me</a></p>}

          <form action="/api/contact" method="post" onSubmit={handleSubmit}>
            <div className='field'>
              <label htmlFor="name">
                Name:
              </label>
              <input type="text" id="name" name="name" placeholder="Please enter your name" required>
              </input>
            </div>
            <div className='field'>
              <label htmlFor="email">
                Email:
              </label>
              <input type="email" id="email" name="email" placeholder="Please enter your email" required>
              </input>
            </div>
            <div className='field'>
              <label htmlFor="Message">
                Message:
              </label>
              <textarea id="message" name="message" placeholder="Leave your message here" rows="4" cols="30" required>
              </textarea>
            </div>
            <button id="button" value="Submit">Submit</button>
          </form>
          <h3>Or connect with me via: <span className='social'><a href="https://www.linkedin.com/in/manalipatel1321/">Linkedin</a></span></h3>
          <h3>Visit Github Profile: <span className='social github'><a href="https://github.com/Manali1321">Github</a></span></h3>

        </div>
      </div>
    </main>)
}
export default Contact;