"use client"
import { useParams } from "next/navigation"
import React from "react"
import { motion } from "framer-motion"
import { FaPlay } from "react-icons/fa"
import { Avatar } from "antd"
import { IoPlaySkipBack, IoPlaySkipForward } from "react-icons/io5"

export const CreatorSongs = () => {
  const { creator_id } = useParams()

  return (
    <div className="overflow-hidden relative z-[2]">
      <div className="bg-primary-default h-[10rem] w-[10rem] rounded-full z-[-1] absolute bottom-0 right-[1rem]" />
      <div className="bg-yellow-200/35 h-[10rem] w-[10rem] rounded-full z-[-1] absolute bottom-[50%] left-[1rem]" />

      <div className="w-full bg-dark-800/25 backdrop-blur-[62px] min-h-[70vh] rounded-3xl md:p-7 p-5 overflow-hidden relative z-[2] border-[1px] border-white/5">
        <div>
          <motion.img
            src="https://cdn.pixabay.com/photo/2019/04/12/21/19/man-4123268_1280.jpg"
            alt=""
            className="w-full h-[37vh] rounded-3xl object-cover"
          />
        </div>
        <div className="my-10">
          <p className="text-xl md:text-3xl text-center font-semibold">
            Afro Piano
          </p>
          <p className="text-center mt-5">The chase</p>
        </div>
        <div>
          <div>
            <div>
              <input
                type="range"
                min="0"
                max={20000 / 1000}
                // value={500}
                className="w-full bg-transparent border-0 accent-primary-default"
                // onChange={(e) => {
                //   sound.seek([e.target.value])
                // }}
              />
            </div>
            <div className="flex gap-2 items-center justify-between text-sm -mt-1">
              <p>0:00</p>
              <p>4:23</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-5 mt-5">
            <IoPlaySkipBack
              size={25}
              className="text-primary-default cursor-pointer"
            />
            <Avatar
              className="bg-primary-default cursor-pointer shadow-lg"
              size={65}
            >
              <FaPlay size={22} />
            </Avatar>
            <IoPlaySkipForward
              size={25}
              className="text-primary-default cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
