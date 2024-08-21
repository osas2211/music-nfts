import { CreatorSongs } from "@/components/creator/CreatorSongs"
import React from "react"

const CreatorPage = () => {
  return (
    <div className="md:pt-[3rem] pt-6 grid md:grid-cols-[300px,auto] lg:grid-cols-[450px,auto] grid-cols-1 md:gap-16 gap-6">
      <CreatorSongs />
    </div>
  )
}

export default CreatorPage
