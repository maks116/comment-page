import Card from './component/card/Card';
import './app.css'
import { useSelector, useDispatch } from 'react-redux';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import { apiGetCards } from './redux/myReducer';
import { useEffect } from 'react';

function App() {

  const cards = useSelector(state => state.cards)

  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(apiGetCards());
  }, [dispatch]);

  


  return (
    <div>
      <Header />

      <label className="centered"><label className="comment-output">Выводим комментарий</label></label>

      <div className="row">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className="col-md-4 col-xs-6 centered colBox"
          >
            <Card {...card} index={index} />
          </div>
        ))}
      </div>

      <Footer />

    </div>

  );
}

export default App;
