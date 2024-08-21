"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { Avatar, Button } from "antd"
import { BiPlay, BiUser } from "react-icons/bi"
import { FaHeart, FaMusic } from "react-icons/fa6"
import { BsFire } from "react-icons/bs"

interface propsI {
  image: string
}

export const MusicNFTCard = ({ image }: propsI) => {
  return (
    <>
      <div className="p-3 rounded-2xl border-[1px] border-white/10 relative overflow-hidden">
        <div className="absolute top-5 right-5 bg-white/15 rounded-full backdrop-blur-[15px] z-[2] p-2 px-4">
          <div className="flex items-center gap-2">
            <FaHeart className="text-red-500" />
            <p className="text-xs">300</p>
          </div>
        </div>

        <div className="relative h-[23rem] w-full z-[1]">
          <motion.img
            src={image}
            alt=""
            // fill
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-0 left-0 h-[11rem] w-full rounded-b-xl bg-black/15 backdrop-blur-[15px] z-[2] p-3">
            <p className="text-4xl font-jersey">The Chase</p>
            <div className="flex items-center gap-1">
              <Avatar src={image}>
                <BiUser />
              </Avatar>
              <p className="text-sm">Mali Music</p>
            </div>

            <div className="relative bg-white/5 p-2 rounded-full mt-4  backdrop-blur-[7px] text-sm border-[1px] border-white/10 flex items-center gap-2 justify-between">
              <div>
                <Avatar size={38} className="bg-dark-1000">
                  <BsFire className="text-red-500" size={14} />
                </Avatar>
              </div>
              <div className="flex gap-2 text-center">
                <div>
                  <p>Song Hits</p>
                  <p className="text-red-200">120</p>
                </div>
              </div>

              <div>
                <Avatar
                  size={38}
                  className="backdrop-blur-[7px] border-[1px] border-white/10 bg-white/5"
                >
                  <BiPlay className="text-primary-default" size={25} />
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
