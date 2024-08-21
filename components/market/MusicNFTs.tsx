"use client"
import React from "react"
import { FcMusic } from "react-icons/fc"
import { BiSolidDownArrow } from "react-icons/bi"
import { Input } from "antd"
import { CgSearch } from "react-icons/cg"
import { MusicNFTCard } from "./MusicNFTCard"

export const MusicNFTs = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <p className="md:text-3xl text-xl font-arvo font-bold">Music NFTs</p>
        <div className="inline-flex gap-5 items-center text-sm">
          <div className="inline-flex gap-3 flex-wrap items-center cursor-pointer">
            <FcMusic />
            <p className="font-semibold">Music Genres</p>
            <BiSolidDownArrow size={14} />
          </div>

          <p className="px-6 py-2 rounded-lg bg-gradient-to-tr from-primary-default/25 to-primary-default/0 border-[1px] border-primary-default">
            Filter
          </p>

          <div>
            <Input
              placeholder="Search title, musician.."
              className="h-[45px] bg-dark-800 border-0 hover:border-[1px] active:border-[1px] md:w-[250px] w-full"
              prefix={<CgSearch className="text-primary-default" />}
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 my-5 md:my-7 gap-5">
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft.png&w=2048&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft2.png&w=2048&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft4.png&w=2048&q=100" />
        <MusicNFTCard image="https://qstn-admin-businesses.vercel.app/_next/image?url=%2Fmedia1.png&w=1920&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft.png&w=2048&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft2.png&w=2048&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft4.png&w=2048&q=100" />
        <MusicNFTCard image="https://qstn-admin-businesses.vercel.app/_next/image?url=%2Fmedia1.png&w=1920&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft.png&w=2048&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft2.png&w=2048&q=100" />
        <MusicNFTCard image="https://str.vercel.app/_next/image?url=%2Fnft4.png&w=2048&q=100" />
        <MusicNFTCard image="https://qstn-admin-businesses.vercel.app/_next/image?url=%2Fmedia1.png&w=1920&q=100" />
      </div>
    </div>
  )
}
