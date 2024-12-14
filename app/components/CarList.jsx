'use client'
import { useState, useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';


const CarList = () => {

    const [ cars, setCars ] = useState();

    const fetchData = () => {
        fetch("http://localhost:3000/api/cars", { cache: 'no-store' }).then(response => response.json()).then( data => setCars(data.cars));
    }

    const handleDelete = (id) => {
        try {
    
            const result = fetch(`http://localhost:3000/api/cars/${id}`, {
              method: "DELETE",
            })
      
            fetchData()
      
          }catch(error){
            throw new Error("Error in deleting a car new car", error)
          }        
    }


    useEffect(() => {
        fetchData();

    }, [])    

    return (
        <div>
            <Link href={`/cars/add`} className="btn btn-success px-5 my-4 py-2">Add a new car</Link>
            <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Price</th>
                            <th>Specs</th>
                            <th>Image</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars &&  cars.map( (c, index) => 
                            (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{c.name}</td> 
                                <td>{c.year}</td> 
                                <td>{c.price}</td> 
                                <td>{c.specs}</td>  
                                <td><Image src={c.imageurl}  width={160} height={100} alt={c.imageurl}/> </td>
                                <td><Link href={`/cars/edit/${c._id}`} className="btn btn-success px-5">Edit</Link></td> 
                                <td><button className="btn btn-danger px-5" onClick={ (e) => handleDelete(c._id)}>Delete</button></td> 
                            </tr>

                            ))}
                    </tbody>
            </table>
        </div>
    )
}

export default CarList