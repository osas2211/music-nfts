import { CreatorDetails } from "@/components/creator/CreatorDetails"
import { CreatorSongs } from "@/components/creator/CreatorSongs"
import { GoBack } from "@/components/utilities/GoBack"
import React from "react"

const CreatorPage = () => {
  return (
    <>
      <div className="md:pt-[3rem] py-6 md:w-[80%] mx-auto">
        <GoBack />
        <div className="flex flex-col-reverse md:grid md:grid-cols-[300px,auto] lg:grid-cols-[450px,auto] grid-cols-1 md:gap-20 gap-6">
          <CreatorSongs />
          <CreatorDetails />
        </div>
      </div>
    </>
  )
}

export default CreatorPage
