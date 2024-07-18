import React from 'react'
import MyCarousel from '../../components/home/carousel'
import SaleCoutdown from '../../components/home/saleCoutdown'
import CardGrid from '../../components/home/cardGrid'
import WorkDone from '../../components/home/workDone'
import Vision from '../../components/home/Vision'
import WaMe from '../../components/wa-top-btn/whatsapp'
import Top from '../../components/wa-top-btn/toTop'

export default function Home() {
  return (
    <div>
      <MyCarousel/>
      <SaleCoutdown/>
      <CardGrid/>
      <WorkDone/>
      <Vision/>
      <WaMe/>
      <Top/>
    </div>
  )
}
