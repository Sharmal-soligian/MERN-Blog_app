import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePostForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;

  & input {
    outline: none;
    border: 2px solid #ddd;
  }

  & button {
    border-color: transparent;
    padding: 10px 20px;
    width: 50%;
    background-color: #056da4;
    font-size: 16px;
    margin: 0 auto;
    margin-top: 10px !important;
  }
`;

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
];

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState('');

  const newPost = async(e) => {
    e.preventDefault();

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    console.log('files log', files);

    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      body: data
    })
  }

  return (
    <CreatePostForm onSubmit={newPost}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="summary"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
      />
      <input type="file" onChange={e => setFiles(e.target.files)} />
      <ReactQuill value={content} onChange={val => setContent(val)} modules={modules} formats={formats} />
      <button type="submit">Create Post</button>
    </CreatePostForm>
  );
};

export default CreatePost;
