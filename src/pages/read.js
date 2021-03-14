import React from 'react'
import Sidebar from '../components/read/sidebar'
import Content from '../components/read/content'

const Read = props => {
  const {id, title, languages } = props.location && props.location.state;
  
  return (
    <section>
      < Sidebar id= {id}/>
      < Content />
    </section>
  )
}

export default Read