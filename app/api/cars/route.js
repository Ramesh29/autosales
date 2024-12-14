import connectMongoDB from "@/libs/mongodb";
import Car from "@/models/car";
import { NextResponse } from "next/server";


/**
 * POST to create a new car
 * @param {*} req 
 * @returns 
 */
export async function POST(req){
    const { name, year, price, specs, imageurl } = await req.json();
    connectMongoDB();
    Car.create({name, year, price, specs, imageurl})
    return NextResponse.json({message: "Car crated"}, { status: 201 });
}

/**
 * GET method to retrieve all cars
 */

export async function GET(){
    await connectMongoDB();
    const cars = await Car.find({}).sort({ $natural: -1 }).limit(100);
    return NextResponse.json({cars});
}


