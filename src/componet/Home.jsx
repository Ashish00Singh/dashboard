import React from 'react'
import './Style/Home.css'
import { CiBellOn } from "react-icons/ci";
import { TbArrowBearLeft, TbArrowBearRight, TbBedFilled } from "react-icons/tb";
import Chart1 from './Chart';
import Home1 from './Home1';
import RightSider from './RightSider'


export default function Home() {
    return (
        <>
            <div className='d-flex flex-row'>
                <div>
                    <h2>Welcome,<strong>Ariana !</strong></h2>
                    <p>Don't forget to check your activity</p>
                </div>
                <div className='ms-auto d-flex gap-2'>
                    <div className='tex-center'><CiBellOn className='BEALICON' size='3rem' /></div>
                    <div><h2 className='p-1'>Anjayani abraham</h2>
                        <p className='text-end mx-2'>owner</p></div>
                    <img className='profilimg' src="https://www.shutterstock.com/image-photo/close-head-shot-confident-serious-260nw-1481322794.jpg" alt="" />
                    <div className="dropdown">
                        <button className="btn dropdown-toggle my-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">

                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Room Booking</a></li>
                            <li><a className="dropdown-item" href="#">help</a></li>
                            <li><a className="dropdown-item" href="#">Log out</a></li>
                        </ul>
                    </div>

                </div>

            </div>

            
            <div className='d-flex flex-row gap-4'>
                <div><Home1/></div>
                <div><RightSider/></div>
                
            </div>


            

        </>
    )
}
