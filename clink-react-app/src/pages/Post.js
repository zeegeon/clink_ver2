import React, { useEffect, useState } from "react";
import CommunityPost from "../components/community/CommunityPost";
import PostCommentInput from "../components/community/PostCommentInput";
import PostComment from "../components/community/PostComment";
import CommunityHeader from "../components/community/CommunityHeader";
import axios from "axios";
import { useLocation } from 'react-router-dom';
export default function Post( ) {
  const location = useLocation();

  const [posts, setPosts] = useState(null);
  const [comments, setComments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPostsComments = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 posts 를 초기화하고
        setError(null);
        setPosts(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);
        const responsePost = await axios.get(
          'http://localhost/community/post'+ location.search
        );
        const responseComment = await axios.get(
          'http://localhost/community/post/comment'+ location.search
        );
        setPosts(responsePost.data); // 데이터는 response.data 안에 들어있습니다.
        setComments(responseComment.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchPostsComments();
  }, [location]);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!posts) return null;
  if (!comments) return null;
  return (
    <div className="PostContainer">
      <CommunityHeader></CommunityHeader>
      <CommunityPost post={posts}></CommunityPost>
      {comments.map((comment, id) => (
        <PostComment
          comment={comment}
          key={id}
        ></PostComment>
      ))}
      <PostCommentInput></PostCommentInput>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </div>
  );
}
