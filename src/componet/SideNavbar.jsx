import React from 'react'
import { MdWindow, MdOutlineMail, MdOutlineSettings } from "react-icons/md";
import { HiOutlineChartPie, HiOutlineHeart, HiInbox, HiOutlineCalendar, HiGlobeAlt } from "react-icons/hi";
export const SideNavbar = () => {
  return (
    <div className="d-flex flex-column bd-highlight mb-3 gap-3 sidebar">
      <div className="p-2 bd-highlight"><HiGlobeAlt size='3rem' /></div>
      {/* <div className="p-2 bd-highlight text-center"><MdWindow size='1.8rem'/></div> */}
      <div className="p-2 bd-highlight text-center"><HiOutlineChartPie size='1.8rem' /></div>
      <div className="p-2 bd-highlight text-center"><HiOutlineHeart size='1.8rem' /></div>
      <div className="p-2 bd-highlight text-center"><HiInbox size='1.8rem' /></div>
      <div className="p-2 bd-highlight text-center"><HiOutlineCalendar size='1.8rem' /></div>
      <div className="p-2 bd-highlight text-center"><MdOutlineMail size='1.8rem' /></div>
      <div className="p-2 bd-highlight text-center"><MdOutlineSettings size='1.8rem' /></div>

    </div>
  )
}
