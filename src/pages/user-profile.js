import React from 'react'

function UserProfile(props) {
    const {username} =  props
  return (
    <h1>{username}</h1>
  )
}

export async function getServerSideProps(context){
    return {
        props: {username: "Max"}
    }
}
export default UserProfile