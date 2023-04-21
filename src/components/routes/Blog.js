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
    }
    getBlog();
  }, []);



  return (
    <div>
      <h1>Welcome to My Blog Page</h1>
      {blog.map(b => (
        <div>
          <h2>{b.title}</h2>
          <p>{b.blog}</p>
        </div>
      ))}
      <div>

      </div>
    </div>)
}
