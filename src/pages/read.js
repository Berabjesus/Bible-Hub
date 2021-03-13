import React from 'react'
import Sidebar from '../components/read/sidebar'
import Content from '../components/read/content'

const Read = props => {
  const { title, languages } = props.location && props.location.state;

  return (
    <section>
      < Sidebar/>
      < Content />
    </section>
  )
}

export default Read