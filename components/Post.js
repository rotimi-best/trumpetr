import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { emojify } from 'react-emojione';

import { reactToPost } from '../actions/post';

export default function Post({ post: initPost, userId }) {
  const [post, setPost] = useState(initPost);

  const didThisUserReactTo = reactions => reactions.includes(userId);
  const handleReaction = async type => {
    const res = await reactToPost({ userId, type }, post._id);

    if (res.success) {
      setPost({
        ...post,
        ...res.post
      })
    }
  }

  const lovedByVariant = didThisUserReactTo(post.lovedBy) ? "primary" : "outline-primary";
  const lovedByCount = post.lovedBy.length ? post.lovedBy.length : '';

  const suprisedByVariant = didThisUserReactTo(post.suprisedBy) ? "primary" : "outline-primary";
  const suprisedByCount = post.suprisedBy.length ? post.suprisedBy.length : '';

  const thankfulByVariant = didThisUserReactTo(post.thankfulBy) ? "primary" : "outline-primary";
  const thankfulByCount = post.thankfulBy.length ? post.thankfulBy.length : '';

  return (
    <Card className="mt-2">
      <Card.Body>
        <Card.Title className="d-flex flex-row">
          {/* <span style={{ backgroundColor: 'black', height: 20, width: 20 }} className="rounded mr-2"/> */}
          <span>{post.fullname}</span>
          <Card.Subtitle className="mt-1 ml-1 text-muted">@{post.nickname}</Card.Subtitle>
        </Card.Title>
        <Card.Text className="mb-1">
          <span className="font-weight-bold">Read: </span>{post.read}
        </Card.Text>
        <Card.Text>
          <span className="font-weight-bold">Lessons: </span>{post.lesson}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={() => handleReaction("lovedBy")}
          className="mx-1"
          variant={lovedByVariant}
        >
          {lovedByCount} {emojify(':heart:')}
        </Button>
        <Button
          onClick={() => handleReaction("suprisedBy")}
          className="mx-1"
          variant={suprisedByVariant}
        >
        {suprisedByCount} {emojify(':open_mouth:')}
        </Button>
        <Button
          onClick={() => handleReaction("thankfulBy")}
          className="mx-1"
          variant={thankfulByVariant}
        >
          {thankfulByCount} {emojify(':pray:')}
        </Button>
      </Card.Footer>
    </Card>
  )
}
