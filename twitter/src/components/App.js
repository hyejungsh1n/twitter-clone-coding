import React, { useState, useEffect } from "react"
import AppRouter from "components/Router"
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false); // 초기화
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userObj, setUserObj] = useState(null);

  // 복습
  useEffect(() => {
    // onAuthStateChanged 사용자의 로그인 상태의 변화를 관찰하는 관찰자역할 추가
    authService.onAuthStateChanged((user) => {
    if(user) {
      setIsLoggedIn(true)
      setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true); // init이 false라면 router를 숨김
    });
  }, [])
  return (
    <>
  <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
    <footer>&copy;  {new Date().getFullYear()} Fake Twitter </footer>
  </>
  );
}

export default App;
