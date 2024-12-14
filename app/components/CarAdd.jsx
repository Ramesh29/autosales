'use client'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import AppAlert from './AppAlert'

const CarAdd = () => {

    const [ name, setName ] = useState("")
    const [ year ,setYear ] = useState("")
    const [ price, setPrice] = useState("")
    const [ specs, setSpecs ] = useState("")
    const [ imageurl, setImageurl] = useState("")

    const [error, setError] = useState("")
    const router = useRouter()    

    const handleSubmit = async (e) => {

        e.preventDefault();
    
        if (!name || !year || !price || !specs || !imageurl ) {
            setError("All Fields are required.")
    
            setTimeout( () => {setError("")}, 2000)
            return;        
        }
    
        try {
    
            const result = fetch("http://localhost:3000/api/cars", {
              method: "POST",
              headers : { 'Content-type': 'application/json'},
              body : JSON.stringify({name, year, price, specs, imageurl})
            })
      
            router.push('/cars')
      
          }catch(error){
            throw new Error("Error in creating new car", error)
          }
      }
    
  return (
    <div>
        <div className="alert alert-primary" role="alert">
          Add a new car
        </div>        

        <AppAlert error={error}  />

        <form onSubmit={handleSubmit}  className="my-4">

            <div className="my-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label ">Name</label>
                <div className="col-sm-4">
                <input 
                    className="form-control"
                    type="text" 
                    name="name"
                    placeholder='name'
                    onChange={ e => setName(e.target.value)}/>
                </div>
            </div>


            <div className="my-3 row">
                <label htmlFor="year" className="col-sm-2 col-form-label ">Year</label>
                <div className="col-sm-2">
                <input 
                    className="form-control"
                    type="text" 
                    name="year"
                    placeholder='year'
                    onChange={ e => setYear(e.target.value)}/>
                </div>
            </div>


            <div className="my-3 row">
                <label htmlFor="price" className="col-sm-2 col-form-label ">Price</label>
                <div className="col-sm-2">
                <input 
                    className="form-control"
                    type="text" 
                    name="price"
                    placeholder='price'
                    onChange={ e => setPrice(e.target.value)}/>
                </div>
            </div>


            <div className="my-3 row">
                <label htmlFor="specs" className="col-sm-2 col-form-label ">Specs</label>
                <div className="col-sm-6">
                <textarea 
                    className="form-control"
                    name="specs"
                    placeholder="specs..."
                    onChange={ e => setSpecs(e.target.value)}
                    rows="3"></textarea>
                </div>
            </div> 

            <div className="my-3 row">
                <label htmlFor="imageurl" className="col-sm-2 col-form-label ">Image URL</label>
                <div className="col-sm-6">
                <input 
                    className="form-control"
                    type="text" 
                    name="imageurl"
                    placeholder='imageurl'
                    onChange={ e => setImageurl(e.target.value)}/>
                </div>
            </div>                            


            <div>
                <input type="submit"  className="btn btn-primary px-5" value="Add"/>
            </div>             
        </form>        



    </div>
  )
}

export default CarAdd