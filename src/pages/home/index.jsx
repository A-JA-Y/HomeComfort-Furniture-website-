import React from 'react'
import MyCarousel from '../../components/home/carousel'
import SaleCoutdown from '../../components/home/saleCoutdown'
import CardGrid from '../../components/home/cardGrid'

export default function Home() {
  return (
    <div>
      <MyCarousel/>
      <SaleCoutdown/>
      <CardGrid/>
    </div>
  )
}
