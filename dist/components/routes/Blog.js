import React from "react";
import { useState, useEffect } from "react";
export default function Blog() {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getBlog = async () => {
      const blogResponse = await fetch('/api/blogs.json');
      const blogData = await blogResponse.json();
      // console.log(blogData);

      setBlog(blogData[2].data);
    };
    getBlog();
  }, []);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to My Blog Page"), /*#__PURE__*/React.createElement("div", {
    id: "blogs"
  }, blog.map(b => /*#__PURE__*/React.createElement("div", {
    className: "blog"
  }, /*#__PURE__*/React.createElement("h2", null, b.title), /*#__PURE__*/React.createElement("p", null, b.blog), /*#__PURE__*/React.createElement("button", null, /*#__PURE__*/React.createElement("a", {
    href: b.link,
    target: "_blank",
    rel: "noreferrer"
  }, "Click to read full artical"))))));
}