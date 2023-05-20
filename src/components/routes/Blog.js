import React from "react";
import { useState, useEffect } from "react";

export default function Blog() {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      const blogResponse = await fetch('https://admin.codemanali.ca/api/blogs');
      const blogData = await blogResponse.json();
      // console.log(blogData);

      setBlog(blogData);
    }
    getBlog();
  }, []);



  return (
    <main>
      <h1>Welcome to My Blog Page</h1>
      <div id="blogs">
        {blog.map(b => (
          <div className="blog">
            <h2>{b.title}</h2>
            <p>{b.blog}</p>
            <button><a href={b.link} target="_blank" rel="noreferrer">Click to read full artical</a></button>
          </div>
        ))}
      </div>
    </main>)
}
