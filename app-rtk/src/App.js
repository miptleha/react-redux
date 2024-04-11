import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import CommentList from './components/CommentList';
import Header from './components/Header';
import Await from './components/Await';
import { LoadComments } from './loader/comments';

function App() {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fillData = useCallback(async() => {
    setTimeout(() => {
      dispatch(LoadComments())
      setLoading(false);
    }, 2000)
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    fillData();
  }, [fillData])

  return (
    <div className="App">
      {loading && <Await />}
      <Header />
      <CommentList />
    </div>
  );
}

export default App;
