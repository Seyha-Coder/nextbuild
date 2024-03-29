import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function POST(request, response) {
  
  try {
    const { emp_name, dob, salary } = await request.json();
    const newData = await prisma.employee.create({
        data: {
        emp_name: emp_name,
        dob: dob,
        salary: salary,
        },
    });

    return NextResponse.json({
        message: "An employee has already created successfully.",
        payload: newData,
        status: 201
    });
    
  } catch (error) {
    return NextResponse.json({
        message: "Not found." + error,
        status: 404
    });
    
  }
}
