import React from 'react'
import MainNavbar from '../Components/MainNavbar'
import Secondarynavbar from '../Components/Secondarynavbar'

const Profile = () => {
  return (
    <div>
      <MainNavbar/>
      <Secondarynavbar/>

      <div className="content p-10 flex">
        <div className="left-side w-[30vw] h-screen bg-red-100">

        </div>

        <div className="right-side">

        </div>
      </div>
    </div>
  )
}

export default Profile