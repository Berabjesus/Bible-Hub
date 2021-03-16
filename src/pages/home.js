/* eslint-disable no-nested-ternary, max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RotateSpinner } from 'react-spinners-kit';
import homeCss from './home.module.css';
import Item from '../components/home/item';
import { fetchBibles } from '../actions/homeAction';

const Home = () => {
  const dispatch = useDispatch();
  const filteredData = useSelector(state => state.filtered);
  const rawData = useSelector(state => state.home);
  React.useEffect(() => {
    if (!rawData.stored) {
      dispatch(fetchBibles());
    }
  }, []);
  return (
    <div>
      {rawData.loading ? (
        <span className="centered">
          <RotateSpinner size={80} color="white" loading />
          ;
        </span>
      )
        : rawData.error.length > 0 ? (
          <span className="text-white centered">
            <h3>Error fetching data, Try again later</h3>
          </span>
        )
          : (
            <div className={`row align-items-start ${homeCss.main}`}>
              {rawData.bibles.bibles && rawData.bibles.bibles.filter(item => {
                if (filteredData === undefined || filteredData === null || filteredData.filterValue === '') {
                  return item;
                }
                if (
                  item.bible.toLowerCase().includes(filteredData.filterValue)
                  || item.title.toLowerCase().includes(filteredData.filterValue)
                ) {
                  return item;
                }
                return false;
              }).map(item => (
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
