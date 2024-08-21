"use client"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"
import { Avatar, Button } from "antd"
import { BiUser } from "react-icons/bi"
import { FaHeart } from "react-icons/fa6"
import { FaMusic } from "react-icons/fa6"
import { IoArrowForward } from "react-icons/io5"
import Link from "next/link"

interface propsI {
  image: string
}

export const ArtistCard = ({ image }: propsI) => {
  return (
    <div className="relative h-[21rem] w-full flex justify-between gap-3 flex-col p-2 pt-6 pb-3 rounded-2xl">
      <div className="absolute top-0 left-0 h-full w-full my-3">
        <motion.img
          src={image}
          alt=""
          // fill
          className="w-full h-[20rem] object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[5rem] bg-gradient-to-b from-black/55 to-black/0"></div>
      <div className="absolute bottom-0 left-0 w-full h-[7rem] bg-gradient-to-t from-black/35 to-black/0"></div>

      <div className="relative flex items-center gap-2 justify-between flex-wrap px-2">
        <div className="flex items-center gap-1">
          <Avatar
            src={
              "https://str.vercel.app/_next/image?url=%2Fnft2.png&w=2048&q=100"
            }
            size={25}
            className="shadow-md"
          >
            <BiUser />
          </Avatar>
          <p className="text-sm text-emerald-100">Mali Music</p>
        </div>
        <div className="text-sm">#001</div>
      </div>
      <div className="relative">
        <p className="text-center mb-1 text-primary-hover">#Hip hop</p>
        <div className="relative bg-white/5 p-2 rounded-full  backdrop-blur-[7px] text-sm border-[1px] border-white/10 flex items-center gap-2 justify-between">
          <div>
            <Avatar size={38} className="bg-dark-1000">
              <FaMusic className="text-primary-default" size={14} />
            </Avatar>
          </div>
          <div className="flex gap-2 text-center">
            <div>
              <p>Subscribers</p>
              <p>120</p>
            </div>
            <div>
              <p>Music</p>
              <p>31</p>
            </div>
          </div>

          <div>
            <Link href={""}>
              <Avatar
                size={38}
                className="backdrop-blur-[7px] border-[1px] border-white/10 bg-white/5"
              >
                <IoArrowForward className="" size={16} />
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
