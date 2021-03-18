/* eslint-disable no-nested-ternary */
import React from 'react';
import { useParams } from 'react-router-dom';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RotateSpinner } from 'react-spinners-kit';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import sidebarCss from './sidebar.module.css';
import { fetchPassages } from '../../actions/passagesAction';
import { fetchContent } from '../../actions/contentAction';

const Sidebar = ({ setInfo }) => {
  const [slide, setSlide] = React.useState('slideRight');
  const [contentState, setContentState] = React.useState('d-flex');
  const [arrowState, setArrowState] = React.useState(faArrowLeft);
  const [chapters, setChapters] = React.useState([]);
  const params = useParams();
  const id = params.bible;
  const dispatch = useDispatch();
  const data = useSelector(state => state.passage);

  React.useEffect(() => {
    dispatch(fetchPassages(id));
  }, []);

  const handleToggle = () => {
    if (slide === 'slideRight') {
      setSlide('slideLeft');
      setContentState('d-none');
      setArrowState(faArrowRight);
    } else {
      setSlide('slideRight');
      setArrowState(faArrowLeft);
      setTimeout(() => {
        setContentState('d-flex');
      }, 300);
    }
  };

  const handlePassageClick = chapters => {
    setChapters(chapters);
  };

  const handleChapterClick = (id, chapter) => {
    dispatch(fetchContent(id, chapter));
    setInfo(chapter);
    handleToggle();
  };

  return (
    <aside
      className={`row d-flex pb-5 ${sidebarCss.aside} ${sidebarCss[slide]}`}
    >
      <div
        className={`flex-column text-white col-9 ${sidebarCss.passage} ${contentState}`}
      >
        <small className="mx-auto mb-1 pb-1 border-bottom w-100 text-center">
          {id}
          Books
        </small>

        {data.loading && !data.stored ? (
          <span className={`${sidebarCss.centered}`}>
            <RotateSpinner size={60} color="white" loading />
          </span>
        ) : data.error.length > 0 ? (
          <span className="text-white centered">
            <h3>Error fetching data, Try again later</h3>
          </span>
        ) : (
          data.passages.books
          && data.passages.books.map(item => (
            <button
              type="button"
              key={`${id}-${item.passage}`}
              className={`${sidebarCss.button}`}
              onClick={() => handlePassageClick(item.chapters)}
            >
              {item.passage}
            </button>
          ))
        )}
      </div>
      <div
        className={`col-3 flex-column text-white text-center border-left border-light px-1 ${contentState} ${sidebarCss.passage}`}
      >
        <small className="mx-auto mb-1 pb-1 border-bottom w-100 text-center">
          Ch
        </small>
        {chapters.map((chapter, index) => (
          <button
            type="button"
            key={`${chapter}-${chapter.passage.slice(-2)}`}
            className={`${sidebarCss.button}`}
            onClick={() => handleChapterClick(id, chapter.passage)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={` align-self-center ${sidebarCss.toggle}`}
        onClick={handleToggle}
      >
        <FontAwesomeIcon
          icon={arrowState}
          style={{ color: 'White', fontSize: '15px' }}
        />
      </button>
    </aside>
  );
};

Sidebar.propTypes = {
  setInfo: PropTypes.func.isRequired,
};

export default Sidebar;
