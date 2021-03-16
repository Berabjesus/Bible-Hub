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

  const sample = [
    {
      abbreviatedTitle: 'STEPHENS',
      bible: 'darby',
      copyright: 'Public Domain.',
      description:
        "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
      extendedCopyright: '',
      imageUrl: 'https://covers.logoscdn.com/lls_1.0.7/cover.jpg',
      languages: ['en'],
      publicationDate: '1996',
      publishers: ['Faithlife'],
      searchFields: (5)[
        ('surface', 'heading', 'largetext', 'bible', 'words-of-christ')
      ],
      title: '1890 Darby Bible',
    },
    {
      abbreviatedTitle: 'CODARBY',
      bible: 'Codarby',
      copyright: 'Public Domain.',
      description:
        "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
      extendedCopyright: '',
      imageUrl: 'https://covers.logoscdn.com/lls_1.0.7/cover.jpg',
      languages: ['en'],
      publicationDate: '1996',
      publishers: ['Faithlife'],
      searchFields: (5)[
        ('surface', 'heading', 'largetext', 'bible', 'words-of-christ')
      ],
      title: '1890 Darby Bible',
    },
    {
      abbreviatedTitle: 'DARBY',
      bible: 'darby212',
      copyright: 'Public Domain.',
      description:
        "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
      extendedCopyright: '',
      imageUrl: 'https://covers.logoscdn.com/lls_1.0.7/cover.jpg',
      languages: ['en'],
      publicationDate: '1996',
      publishers: ['Faithlife'],
      searchFields: (5)[
        ('surface', 'heading', 'largetext', 'bible', 'words-of-christ')
      ],
      title: '1890 Darby Bible',
    },
    {
      abbreviatedTitle: 'CODARBY',
      bible: '333Codarby',
      copyright: 'Public Domain.',
      description:
        "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
      extendedCopyright: '',
      imageUrl: 'https://covers.logoscdn.com/lls_1.0.7/cover.jpg',
      languages: ['en'],
      publicationDate: '1996',
      publishers: ['Faithlife'],
      searchFields: (5)[
        ('surface', 'heading', 'largetext', 'bible', 'words-of-christ')
      ],
      title: '1890 Darby Bible',
    },
  ];

  return (
    <div>
      {data.loading ? (
        <span className={`${homeCss.centered}`}>
          <RotateSpinner size={80} color="white" loading />
          ;
        </span>
      )
        : data.error.length > 0 ? (
          <span className={`text-white ${homeCss.centered}`}>
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
      {/*
      <div className={`row align-items-start ${homeCss.main}`}>
        {sample && sample.map(item => (
          <Item
            key={item.bible}
            id={item.abbreviatedTitle}
            description={item.description}
            image={item.imageUrl}
            title={item.title}
            languages={item.languages}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Home;
