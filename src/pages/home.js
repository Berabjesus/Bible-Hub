import React from 'react'
import homeCss from './home.module.css'
import Item from '../components/home/item'

const Home = () => {
  const [data, setData] = React.useState([1])

  const getUserFollowers = async () => {
    try {
      // const response = await fetch('https://thingproxy.freeboard.io/fetch/http://api.biblia.com/v1/bible/find.txt?key=fd37d8f28e95d3be8cb4fbc37e15e18e', {
      //   method: "GET",
      // })
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const filtered = await response.json();
      return filtered;
    } catch (error) {
      return error;
    }
  }
  console.log(data);
  React.useEffect(()=> {
    getUserFollowers().then(result => {
      setData(result)
      // console.log(result);
      
    })
  }, [])

  const sample = [{
    abbreviatedTitle: "DARBY",
    bible: "darby",
    copyright: "Public Domain.",
    description: "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
    extendedCopyright: "",
    imageUrl: "https://covers.logoscdn.com/lls_1.0.7/cover.jpg",
    languages: ["en"],
    publicationDate: "1996",
    publishers: ["Faithlife"],
    searchFields: (5) ["surface", "heading", "largetext", "bible", "words-of-christ"],
    title: "1890 Darby Bible"
  },
  {
    abbreviatedTitle: "CODARBY",
    bible: "Codarby",
    copyright: "Public Domain.",
    description: "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
    extendedCopyright: "",
    imageUrl: "https://covers.logoscdn.com/lls_1.0.7/cover.jpg",
    languages: ["en"],
    publicationDate: "1996",
    publishers: ["Faithlife"],
    searchFields: (5) ["surface", "heading", "largetext", "bible", "words-of-christ"],
    title: "1890 Darby Bible"
  },
  {
    abbreviatedTitle: "DARBY",
    bible: "darby212",
    copyright: "Public Domain.",
    description: "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
    extendedCopyright: "",
    imageUrl: "https://covers.logoscdn.com/lls_1.0.7/cover.jpg",
    languages: ["en"],
    publicationDate: "1996",
    publishers: ["Faithlife"],
    searchFields: (5) ["surface", "heading", "largetext", "bible", "words-of-christ"],
    title: "1890 Darby Bible"
  },
  {
    abbreviatedTitle: "CODARBY",
    bible: "333Codarby",
    copyright: "Public Domain.",
    description: "As an ex-Anglican minister and the founder of the Plymouth Brethren, Darby's influence started the Niagara Conferences, which were the beginnings of prophetically-oriented Bible conferences in America. First published in 1890, this translation comes after Darby's understanding of the original languages matured during the writing of his French and German translations of the Bible.",
    extendedCopyright: "",
    imageUrl: "https://covers.logoscdn.com/lls_1.0.7/cover.jpg",
    languages: ["en"],
    publicationDate: "1996",
    publishers: ["Faithlife"],
    searchFields: (5) ["surface", "heading", "largetext", "bible", "words-of-christ"],
    title: "1890 Darby Bible"
  }]

  return (
    <div className={`row align-items-start ${homeCss.main} border_custom`} >
      {sample.map(item => {
        return <Item key={item.bible} description={item.description} image={item.imageUrl} title={item.title} languages={item.languages}/>
      })}
    </div>
  )
}

export default Home