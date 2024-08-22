"use client"
import { useRouter } from "next/navigation"
import React from "react"
import { MdOutlineArrowBack } from "react-icons/md"

export const GoBack = () => {
  const router = useRouter()
  return (
    <div
      className="inline-flex gap-2 items-center px-3 py-[10px] rounded-lg bg-white/5 border-white/5 border-[1px] backdrop-blur-[22px] cursor-pointer mb-4 text-green-300"
      onClick={router.back}
    >
      <MdOutlineArrowBack />
      <p className="text-[15px]">Back</p>
    </div>
  )
}
