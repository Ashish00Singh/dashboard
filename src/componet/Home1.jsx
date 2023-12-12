import React from 'react'
import { TbArrowBearLeft, TbArrowBearRight, TbBedFilled } from "react-icons/tb";
import Chart1 from './Chart';

export default function Home1() {
  return (<>
    <div className=" d-flex flex-row gap-5">
                <div className='d-flex gap-5 hotede '><div className='iconde text-center py-2' style={{backgroundColor:'rgb(33,194,142)'}}><TbArrowBearLeft size='3rem'/></div>
                    <div>
                        <p>Total Arival</p>
                        <p>231</p>
                    </div>
                </div>
                <div className='d-flex gap-5 hotede'><div className='iconde text-center py-2' style={{backgroundColor:'rgb(254,175,125)'}}><TbBedFilled size='3rem'/></div>
                    <div>
                        <p>Total Book</p>
                        <p>891</p>
                    </div>
                </div>
                <div className=' d-flex gap-5 hotede'><div className='iconde text-center py-2' style={{backgroundColor:'rgb(0,134,205)'}}><TbArrowBearRight size='3rem'/></div>
                    <div>
                        <p>Total Check in</p>
                        <p>129</p>
                    </div>
                </div>
            </div>
            <br/>

            <Chart1/></>
  )
}
