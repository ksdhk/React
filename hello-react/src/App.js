import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "리액트";
  return (
    <>
      {/*주석은 이렇게 작성*/}
      <div className="react">
        {name}
        <h1>들여쓰기가 이상한</h1>
        <h2>코드</h2>
        <p>입니다.</p>
      </div>
    </>
  );
}
export default App;
