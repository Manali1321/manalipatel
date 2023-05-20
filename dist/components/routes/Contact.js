import React, { useState } from "react";
function Contact() {
  const [status, setStatus] = useState("");
  const handleSubmit = async event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    var name = data.get("name");
    var email = data.get("email");
    var message = data.get("message");
    const newData = {
      name: name,
      email: email,
      message: message
    };
    try {
      const res = await fetch("https://contact.codemanali.ca/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newData)
      });
      console.log(res.body);
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("div", {
    id: "contact"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "./image/contact.jpeg",
    width: "300",
    alt: "me"
  })), /*#__PURE__*/React.createElement("div", {
    className: "contact-detail"
  }, /*#__PURE__*/React.createElement("h1", null, "Send me a message"), status === "success" && /*#__PURE__*/React.createElement("p", null, "Your message was sent successfully. Thank you.!!"), status === "error" && /*#__PURE__*/React.createElement("p", {
    id: "error"
  }, "Something went wrong. Send a Email to me: ", /*#__PURE__*/React.createElement("a", {
    href: "mailto: patelmanali216@gmail.com"
  }, "Click Me")), /*#__PURE__*/React.createElement("form", {
    action: "https://contact.codemanali.ca/contact",
    method: "post",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    placeholder: "Please enter your name",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    placeholder: "Please enter your email",
    required: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "field"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "Message"
  }, "Message:"), /*#__PURE__*/React.createElement("textarea", {
    id: "message",
    name: "message",
    placeholder: "Leave your message here",
    rows: "4",
    cols: "30",
    required: true
  })), /*#__PURE__*/React.createElement("button", {
    id: "button",
    value: "Submit"
  }, "Submit")), /*#__PURE__*/React.createElement("h3", null, "Or connect with me via: ", /*#__PURE__*/React.createElement("span", {
    className: "social"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.linkedin.com/in/manalipatel1321/"
  }, "Linkedin"))), /*#__PURE__*/React.createElement("h3", null, "Visit Github Profile: ", /*#__PURE__*/React.createElement("span", {
    className: "social github"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://github.com/Manali1321"
  }, "Github"))))));
}
export default Contact;