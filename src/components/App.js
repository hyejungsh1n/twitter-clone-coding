import React, { useState, useEffect } from "react"
import AppRouter from "components/Router"
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false); // 초기화
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); 

  useEffect(() => {
    // onAuthStateChanged 사용자의 로그인 상태의 변화를 관찰하는 관찰자역할 추가
    authService.onAuthStateChanged((user) => console.log(user))
  }, [])
  return (
    <>
  <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy;  {new Date().getFullYear()} Twitter </footer>
  </>
  );
}

export default App;
