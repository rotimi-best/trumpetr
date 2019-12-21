import React, { useState } from "react";
import Router from "next/router";
import { GoPlus } from "react-icons/go";
import Button from "react-bootstrap/Button";
import Post from "./Post";

import NewPost from "./NewPost";
import { addPost } from "../actions/post";

const Posts = ({ posts, user }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const handleSave = async post => {
    post.userId = user._id;
    post.lovedBy = [];
    post.suprisedBy = [];
    post.thankfulBy = [];

    await addPost(post);
    toggleModal()
    Router.push("/")
  }

  return (
    <>
      <div className="Posts">
        <h1>Posts</h1>
        {posts.length ? (
          posts.map(post => (
          <Post key={post._id} post={post} userId={user._id}/>
        ))) : (
          <h2>No one has posted yet</h2>
        )}
        <NewPost
          handleSave={handleSave}
          openModal={openModal}
          toggleModal={toggleModal}
        />
        <Button onClick={toggleModal} style={{ display: 'flex', alignItems: 'center', position: 'fixed', right: '5%', bottom: '5%'}} variant="dark">
          <GoPlus /> New
        </Button>
      </div>

      <style jsx>{`
        .Posts {
          margin: 10px 0;
        }
      `}</style>
    </>
  )
};

export default Posts;
