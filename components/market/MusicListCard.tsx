"use client"
import React from "react"
import { motion } from "framer-motion"
import { TbPlayerPlayFilled } from "react-icons/tb"

interface propsI {
  image: string
  index: number
}

export const MusicListCard = ({ image, index }: propsI) => {
  return (
    <div className="bg-dark-900 p-3 md:px-6 md:py-[10px] rounded-lg grid md:grid-cols-[35px,auto] gap-2 border-[1px] border-white/5">
      <p className="h-full hidden items-center md:flex">{index}.</p>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex items-center gap-3">
          <div>
            <motion.img
              alt=""
              src={image}
              className="rounded-lg object-cover h-[55px] w-[55px]"
            />
          </div>
          <div>
            <p className="md:text-lg font-semibold">The Chase</p>
            <p className="text-sm">Mali Music</p>
          </div>
        </div>
        <p className="text-sm md:block hidden">7,000 Hits</p>
        <p className="text-sm">4:23</p>
        <div className="md:h-[44px] h-[35px] md:w-[44px] w-[35px] rounded-full bg-primary-default flex items-center justify-center cursor-pointer">
          <TbPlayerPlayFilled size={20} />
        </div>
      </div>
    </div>
  )
}
