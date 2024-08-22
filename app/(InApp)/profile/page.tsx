"use client"
import { UserProfile } from "@/components/profile/UserProfile"
import { UserProfileTabs } from "@/components/profile/UserProfileTabs"
import { GoBack } from "@/components/utilities/GoBack"
import React from "react"

const ProfilePage = () => {
  return (
    <div>
      <div className="md:mt-10 mt-4">
        <GoBack />
        <h3 className="text-2xl md:text-5xl font-arvo font-bold">Profile</h3>
      </div>
      <div className="md:my-8 my-5">
        <UserProfile />
        <UserProfileTabs />
      </div>
    </div>
  )
}

export default ProfilePage
