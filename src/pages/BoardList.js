import React from "react";
import { Link } from "react-router";

function BoardList({ posts }) {

  return (
    <div className="container">

      <div className="page-title">
        <h2>게시판</h2>
        <p>게시글 목록입니다.</p>
      </div>


      <table className="board-table">

        <thead>

          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>

        </thead>


        <tbody>

          {posts.length === 0 ? (

            <tr>

              <td
                colSpan="4"
                className="empty"
              >
                등록된 게시글이 없습니다.
              </td>

            </tr>

          ) : (

            [...posts]
              .reverse()
              .map((post, index) => (

                <tr key={post.id}>

                  <td>
                    {posts.length - index}
                  </td>


                  <td className="title-column">

                    <Link
                      to={`/board/${post.id}`}
                    >
                      {post.title}
                    </Link>

                  </td>


                  <td>
                    {post.writer}
                  </td>


                  <td>
                    {post.date}
                  </td>

                </tr>

              ))

          )}

        </tbody>

      </table>


      <div className="button-area">

        <Link
          to="/write"
          className="btn primary"
        >
          글쓰기
        </Link>

      </div>

    </div>
  );
}

export default BoardList;