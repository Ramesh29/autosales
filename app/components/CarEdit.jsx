'use client'

import { useEffect, useState } from "react"
import { useRouter  } from 'next/navigation'
import Image from 'next/image'
import AppAlert from './AppAlert'




const CarEdit = ({ id }) => {



    const [ name, setName ] = useState("")
    const [ year ,setYear ] = useState("")
    const [ price, setPrice] = useState("")
    const [ specs, setSpecs ] = useState("")
    const [ imageurl, setImageurl] = useState("https://img.freepik.com/premium-vector/black-car-icon-car-vector-icon-isolated-white-background-vehicle-sign-vector-illustration_882636-360.jpg")


    const [error, setError] = useState("")
    const router = useRouter()    

    useEffect( () => {

        async function fetchData() {
            const result = await fetch(`http://localhost:3000/api/cars/${id}`, { noCache: true })
            const { car } = await result.json()
            setName(car.name)
            setYear(car.year)
            setPrice(car.price)
            setSpecs(car.specs)
            setImageurl(car.imageurl)
        }
        fetchData();
     }, []);

     const handleSubmit = async(e) => {
        e.preventDefault();
        if (!name || !year || !price || !specs || !imageurl ) {
            setError("All Fields are required.")
    
            setTimeout( () => {setError("")}, 2000)
            return;        
        }
    
        try {
    
            const result = await fetch(`http://localhost:3000/api/cars/${id}`, {
              method: "PUT",
              headers : { 'Content-type': 'application/json'},
              body : JSON.stringify({name, year, price, specs, imageurl})
            })
    
            if ( !result.ok ){
                console.log("failed editing a car")
            }
      
            router.push('/cars')
      
          }catch(error){
            console.log(error)
          }
    
     }


  return (
    <div>
    <div className="alert alert-primary" role="alert">
      Edit car information
    </div>        

    <AppAlert error={error}  />

    <form onSubmit={handleSubmit}  className="my-4">

    <div className="my-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label ">Name</label>
            <div className="col-sm-8">
                <Image src={imageurl} width={420} height={315} alt={imageurl} />
            </div>
        </div>



        <div className="my-3 row">
            <label htmlFor="name" className="col-sm-2 col-form-label ">Name</label>
            <div className="col-sm-4">
            <input 
                className="form-control"
                type="text" 
                name="name"
                value={name}
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
                value={year}
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
                value={price}
                onChange={ e => setPrice(e.target.value)}/>
            </div>
        </div>


        <div className="my-3 row">
            <label htmlFor="specs" className="col-sm-2 col-form-label ">Specs</label>
            <div className="col-sm-6">
            <textarea 
                className="form-control"
                name="specs"
                value={specs}
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
                value={imageurl}
                onChange={ e => setImageurl(e.target.value)}/>
            </div>
        </div>                            


        <div>
            <input type="submit"  className="btn btn-primary px-5" value="Edit"/>
        </div>             
    </form>        



</div>
  )
}

export default CarEdit