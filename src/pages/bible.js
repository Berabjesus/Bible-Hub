import React from 'react'

export const User = props => {
  const {description, image, title} = props.location && props.location.state
  console.log(description);
  
  return (
    <div>
      <h1>User</h1>
      <h2>{description}</h2>
    </div>
  )
}

export default User