import React from 'react'
import Header from '../components/bible/header'

const Read = props => {
  const { title, languages } = props.location && props.location.state;

  return (
    <section>
      <Header title={title} languages={languages} />
    </section>
  )
}

export default Read