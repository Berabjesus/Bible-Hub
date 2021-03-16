/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';
import homeCss from './home.module.css';
import Item from '../components/home/item';
import { fetchBibles } from '../actions/homeAction';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.home);
  React.useEffect(() => {
    if (!data.stored) {
      dispatch(fetchBibles());
    }
  }, []);
  return (
    <div>
      {data.loading ? (
        <span className="centered">
          <RotateSpinner size={80} color="white" loading />
          ;
        </span>
      )
        : data.error.length > 0 ? (
          <span className="text-white centered">
            <h3>Error fetching data, Try again later</h3>
          </span>
        )
          : (
            <div className={`row align-items-start ${homeCss.main}`}>
              {data.bibles.bibles && data.bibles.bibles.map(item => (
                <Item
                  key={item.bible}
                  id={item.bible}
                  description={item.description}
                  image={item.imageUrl}
                  title={item.title}
                  languages={item.languages}
                />
              ))}
            </div>
          )}
    </div>
  );
};

export default Home;
