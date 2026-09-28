import React from "react";
import {
  useNavigate,
  useParams
} from "react-router";

function BoardDetail({
  posts,
  deletePost
}) {

  const navigate = useNavigate();

  const { id } = useParams();


  const post = posts.find(
    (post) =>
      String(post.id) === String(id)
  );


  if (!post) {

    return (

      <div className="container">

        <h2>
          게시글을 찾을 수 없습니다.
        </h2>

        <button
          className="btn"
          onClick={() => navigate("/")}
        >
          목록
        </button>

      </div>

    );
  }


  const handleDelete = () => {

    const result = window.confirm(
      "게시글을 삭제하시겠습니까?"
    );


    if (!result) {
      return;
    }


    deletePost(post.id);

    navigate("/");
  };


  return (
    <div className="container">

      <div className="detail-header">

        <h2>
          {post.title}
        </h2>

        <div className="detail-info">

          <span>
            작성자 : {post.writer}
          </span>

          <span>
            작성일 : {post.date}
          </span>

        </div>

      </div>


      <div className="detail-content">

        {post.content}

      </div>


      <div className="button-area">

        <button
          className="btn"
          onClick={() => navigate("/")}
        >
          목록
        </button>


        <button
          className="btn danger"
          onClick={handleDelete}
        >
          삭제
        </button>

      </div>

    </div>
  );
}

export default BoardDetail;