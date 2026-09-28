import React, { useState } from "react";
import { useNavigate } from "react-router";

function BoardWrite({ addPost }) {

  const navigate = useNavigate();


  const [title, setTitle] = useState("");

  const [writer, setWriter] = useState("");

  const [content, setContent] = useState("");


  const handleSubmit = (e) => {

    e.preventDefault();


    if (!title.trim()) {
      alert("제목을 입력해주세요.");
      return;
    }


    if (!writer.trim()) {
      alert("작성자를 입력해주세요.");
      return;
    }


    if (!content.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }


    addPost({
      title,
      writer,
      content
    });


    alert("게시글이 등록되었습니다.");

    navigate("/");
  };


  return (
    <div className="container">

      <div className="page-title">

        <h2>글쓰기</h2>

        <p>
          새로운 게시글을 작성합니다.
        </p>

      </div>


      <form
        className="write-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>
            제목
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            placeholder="제목을 입력해주세요."
          />

        </div>


        <div className="form-group">

          <label>
            작성자
          </label>

          <input
            type="text"
            value={writer}
            onChange={(e) =>
              setWriter(e.target.value)
            }
            placeholder="작성자를 입력해주세요."
          />

        </div>


        <div className="form-group">

          <label>
            내용
          </label>

          <textarea
            value={content}
            onChange={(e) =>
              setContent(e.target.value)
            }
            placeholder="내용을 입력해주세요."
          />

        </div>


        <div className="button-area">

          <button
            type="button"
            className="btn"
            onClick={() => navigate("/")}
          >
            취소
          </button>


          <button
            type="submit"
            className="btn primary"
          >
            등록
          </button>

        </div>

      </form>

    </div>
  );
}

export default BoardWrite;