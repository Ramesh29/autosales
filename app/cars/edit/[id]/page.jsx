import CarEdit from '@/app/components/CarEdit'
import React from 'react'

const CarEditPage = ({params}) => {

  const { id } = params
  return (
    <div>
      <CarEdit id={id}/>
    </div>
  )
}

export default CarEditPage