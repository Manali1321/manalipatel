import React from "react";

function Contact() {
  return (
    <main>
      <div id='contact'>
        <div>
          <img src="./image/contact.jpeg" width="300" alt="me"></img>
        </div>
        <div class='contact-detail'>
          <h1>Send me a message</h1>
          <form>
            <div className='field'>
              <label htmlFor="name">
                Name:
              </label>
              <input type="text" id="name" name="name" placeholder="Please enter your name" required>
              </input>
            </div>
            <div class='field'>
              <label htmlFor="email">
                Email:
              </label>
              <input type="email" id="email" name="email" placeholder="Please enter your email" required>
              </input>
            </div>
            <div class='field'>
              <label htmlFor="Message">
                Message:
              </label>
              <textarea id="message" name="message" placeholder="Leave your message here" rows="4" cols="30" required>
              </textarea>
            </div>
            <button id="button" value="Submit">Submit</button>
          </form>
          <h3>Or connect with me via: <span class='linkedin'><a href="https://www.linkedin.com/in/manalipatel1321/">Linkedin</a></span></h3>
        </div>
      </div>
    </main>)
}
export default Contact;