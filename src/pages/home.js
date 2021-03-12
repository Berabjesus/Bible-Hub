import React from 'react'

export const Home = () => {
  const [data, setData] = React.useState([1])

  const getUserFollowers = async () => {
    try {
      const response = await fetch('https://thingproxy.freeboard.io/fetch/http://api.biblia.com/v1/bible/find.txt?key=9f977d096e4fe0b62fc7877ca6d0a64b', {
        method: "GET",
      })
      const filtered = await response.json();
      return filtered;
    } catch (error) {
      return error;
    }
  }

  React.useEffect(()=> {
    // getUserFollowers().then(result => {
    //   setData(result)
    //   console.log(result);
      
    // })
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <h2>{}</h2>
    </div>
  )
}

export default Home