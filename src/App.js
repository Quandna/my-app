import logo from './logo.svg';
import './App.css';
import Login from './component/Login.js';
import LoginClass from './component/LoginClass.js';
import LoginHeader from './component/LoginHeader.js';
import Footer from './component/Footer.js';
import { PostList } from './component/PostList';
import Books from './component/Books';
import { Routes, Route } from 'react-router-dom';
import Book from './component/Book';


function App() {
  return (
    <div className="App">
      {/*     
      <header className="App-header">
      </header>
       */}
      <Routes>

        <Route path="/books" element={<Books />}/>
        <Route path="/books/:bookcode" element={<Book/>}/>

       </Routes>
      {/* <LoginHeader />
      <Login name="name" /> */}
      {/* <PostList /> */}
      {/* <Books/>
      <LoginClass />
      <Footer /> */}
    </div>
  );
}

export default App;
