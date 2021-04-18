import { useEffect, useState } from 'react';
import './App.css';
import { FeaturedMovie } from './components/FeaturedMovie';
import { MovieRow } from './components/MovieRow';
import Tmdb from './Tmdb';

function App() {
  
  const [movieList, setMovieList] = useState<any[]>([]);
  const [featuredData, setFeaturedData] = useState<any | null>(null);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      //console.log(list);

      let originals = list.filter(i => i.slug === 'originals');
      let randonChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randonChosen]
      let choseInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(choseInfo);
      console.log(featuredData);
    }
    loadAll();
  }, []);

  return (

    <div className="page">

      {featuredData && 
        <FeaturedMovie item={featuredData} />
      }

      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
