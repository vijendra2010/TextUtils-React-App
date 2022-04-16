import NavBar from "./components/NavBar";
import TextArea from "./components/TextArea";

function App() {
  return (
    <>
      <NavBar title="TextUtils" home="Home" about="About"></NavBar>
      <TextArea label="Please enter text below."></TextArea>
    </>
  );
}

export default App;
