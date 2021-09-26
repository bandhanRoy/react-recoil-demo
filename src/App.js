import './App.css';
import { useSetRecoilState } from 'recoil';
import { animeTitlesStore } from './store';
import { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AnimePage from './pages/Anime';

function App() {
  const setTitles = useSetRecoilState(animeTitlesStore);

  const fetchAnimes = async () => {
    try {
      let res = await fetch(
        "https://animechan.vercel.app/api/available/anime"
      );
      res = await res.json();
      setTitles(res);
    } catch (error) {
      console.log(error?.response?.data?.error);
    }
  };

  useEffect(() => {
    fetchAnimes();
  });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/anime/:name" component={AnimePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;