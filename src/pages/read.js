import React from 'react'
import Sidebar from '../components/read/sidebar'

const Read = props => {
  const { title, languages } = props.location && props.location.state;

  return (
    <section>
      < Sidebar/>
    </section>
  )
}

export default Read