"use client"
import { Avatar, Button } from "antd"
import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { HiPhotograph } from "react-icons/hi"

export const EditPhoto = () => {
  const [file, setFile] = useState<File | null>(null)
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files![0]
    setFile(file)
  }
  return (
    <div>
      <div className="md:mb-7 mb-5">
        <h3 className="text-xl md:text-3xl font-semibold font-arvo mb-1">
          Edit Photo
        </h3>
        <p>The recommended cover photo size is 1024px x 1024px</p>
      </div>
      <div className="md:w-[380px] w-full">
        <div className="relative">
          <Avatar
            src={file ? URL.createObjectURL(file) : null}
            size={140}
            className="bg-dark-700"
          >
            <BiUser size={28} />
          </Avatar>
        </div>
        <div className="mt-5 md:flex grid grid-cols-2 items-center gap-3">
          <div>
            <input
              style={{ display: "none" }}
              id="photo"
              type="file"
              onChange={onChangeInput}
              accept=".jpg,.png"
            />
            <label
              htmlFor="photo"
              className="md:w-[180px] w-full h-[45px] rounded-lg bg-primary-default flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <HiPhotograph size={18} />
              <p>Change Photo</p>
            </label>
          </div>
          <Button className="md:w-[200px] w-full h-[45px]" type="primary">
            Save
          </Button>
        </div>
      </div>
    </div>
  )
}
