import React, { useState } from "react";
import { Routes, Route } from "react-router";

import BoardList from "./pages/BoardList";
import BoardWrite from "./pages/BoardWrite";
import BoardDetail from "./pages/BoardDetail";
import Header from "./components/Header";

function App() {

  const [posts, setPosts] = useState(() => {

    const savedPosts = localStorage.getItem("posts");

    if (savedPosts) {
      return JSON.parse(savedPosts);
    }

    return [
      {
        id: 1,
        title: "게시판 첫 번째 글입니다.",
        writer: "관리자",
        content: "게시판 테스트 내용입니다.",
        date: "2026-09-26"
      },
      {
        id: 2,
        title: "React 게시판 테스트",
        writer: "관리자",
        content: "React로 게시판을 만들고 있습니다.",
        date: "2026-09-27"
      }
    ];
  });


  // 게시글 등록
  const addPost = (post) => {

    const newPost = {
      id: Date.now(),
      ...post,
      date: new Date().toLocaleDateString("ko-KR")
    };

    const newPosts = [
      ...posts,
      newPost
    ];

    setPosts(newPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(newPosts)
    );
  };


  // 게시글 삭제
  const deletePost = (id) => {

    const newPosts = posts.filter(
      (post) => post.id !== id
    );

    setPosts(newPosts);

    localStorage.setItem(
      "posts",
      JSON.stringify(newPosts)
    );
  };


  return (
    <div>

      <Header />

      <Routes>

        {/* 게시판 목록 */}
        <Route
          path="/"
          element={
            <BoardList posts={posts} />
          }
        />

        {/* 글쓰기 */}
        <Route
          path="/write"
          element={
            <BoardWrite addPost={addPost} />
          }
        />

        {/* 상세보기 */}
        <Route
          path="/board/:id"
          element={
            <BoardDetail
              posts={posts}
              deletePost={deletePost}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;
