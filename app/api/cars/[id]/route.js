import connectMongoDB from "@/libs/mongodb";
import Car from "@/models/car";
import { NextResponse } from "next/server";


/**
 * update a car by id
 * @param {*} req 
 * @param {*} param1 
 */
export async function PUT( req, { params }) {

    const { id } = await params;
    const { name, year, price, specs, imageurl } = await req.json();
    await connectMongoDB();
    await Car.findByIdAndUpdate( id, {name, year, price, specs, imageurl});
    return NextResponse.json({ message: "car updated"}, { status: 200});

}

/**
 * GET a car by id
 * 
 */

export async function GET( req, { params } ) {
    const {id } = await params;
    await connectMongoDB();
    const car = await Car.findOne({_id : id });
    return NextResponse.json({car}, { status: 200 });
}


/**
 * DELETE a car 
 */

export async function DELETE( req, { params }) {
    const { id } = await params;
    await connectMongoDB();
    await Car.findByIdAndDelete(id)
    return NextResponse.json({ message: "car deleted"}, { status: 200});
}