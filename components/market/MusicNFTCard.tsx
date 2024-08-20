"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { Avatar, Button } from "antd"
import { BiUser } from "react-icons/bi"
import { FaHeart } from "react-icons/fa6"

interface propsI {
  image: string
}

export const MusicNFTCard = ({ image }: propsI) => {
  return (
    <div className="p-3 bg-dark-800 rounded-lg min-h-[20rem]">
      <div className="flex items-center gap-1 justify-between flex-wrap">
        <div className="flex items-center gap-1">
          <Avatar src={image}>
            <BiUser />
          </Avatar>
          <p className="text-sm">Mali Music</p>
        </div>
        <div className="flex items-center gap-2">
          <FaHeart className="text-red-500" />
          <p className="text-xs">300</p>
        </div>
      </div>
      <div className="relative h-[17rem] w-full my-3">
        <motion.img
          src={image}
          alt=""
          // fill
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-2 rounded-lg bg-dark-700 flex gap-2 flex-wrap justify-between items-center">
        <p className="">The Chase</p>
        <p className="text-xs bg-dark-800 inline-block p-2 text-primary-active">
          Hip hop
        </p>
      </div>
      <p className="text-xl text-primary-default my-3 font-semibold">
        0.02 ETH
      </p>
      <div className="grid gap-2 grid-cols-2">
        <Button type="primary" className="w-full h-[45px]" size="large">
          Mint
        </Button>
        <Button className="w-full h-[45px]  bg-transparent" size="large">
          View
        </Button>
      </div>
    </div>
  )
}
