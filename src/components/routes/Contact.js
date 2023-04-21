import React from "react";
function Contact() {
  return (
    <div>
      <div>
        <img src="./image/contact.jpeg" width="200" alt="me"></img>
      </div>
      <div>
        <h2>Send me a message</h2>
        <form>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input type="text" id="name" name="name" placeholder="Please enter your name" required>
            </input>
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" id="email" name="email" placeholder="Please enter your email" required>
            </input>
          </div>
          <div>
            <label htmlFor="Message">
              Message
            </label>
            <textarea id="message" name="message" placeholder="Leave your message here" rows="4" cols="50" required>
            </textarea>
          </div>
          <button id="button" value="Submit">Submit</button>
        </form>
        <h3>Or connect with me via: <span><a href="https://www.linkedin.com/in/manalipatel1321/">Linkedin</a></span></h3>
      </div>
    </div>)
}
export default Contact;