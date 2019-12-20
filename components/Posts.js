import React from "react";
import { GoPlus } from "react-icons/go";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {emojify} from 'react-emojione';

const Posts = ({ posts }) => {
  console.log("posts", posts)

  return (
    <>
      <div className="Posts">
        {posts.map(post => (
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
                <span className="font-weight-bold">Lessons: </span>{post.lessons}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button className="mx-1" variant="outline-primary">{emojify(':heart:')}</Button>
              <Button className="mx-1" variant="outline-primary">{emojify(':open_mouth:')}</Button>
              <Button className="mx-1" variant="outline-primary">{emojify(':pray:')}</Button>
            </Card.Footer>
          </Card>
        ))}
          <Button style={{ position: 'fixed', right: '5%', bottom: '5%'}} variant="dark">
            <GoPlus />
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

Posts.getInitialProps = async function () {
  console.log('url', process.env.API_URL)
  const res = await fetch(`http://localhost:9000/posts`);
  const data = await res.json();

  return {
    posts: data.posts,
  };
};

export default Posts;
