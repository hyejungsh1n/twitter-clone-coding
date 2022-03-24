import React, { useState, useEffect } from "react"
import AppRouter from "components/Router"
import { authService } from "fbase";

function App() {
  const [init, setInit] = useState(false); // 초기화
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); 

  useEffect(() => {

  }, [])
  return (
    <>
  <AppRouter isLoggedIn={isLoggedIn} />
    <footer>&copy;  {new Date().getFullYear()} Twitter </footer>
  </>
  );
}

export default App;
