import { PrismaClient } from "@prisma/client";
import { timeStamp } from "console";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function PUT(request, { params: { id } }) {
  
  try {
    const { emp_name, dob, salary } = await request.json();
  
    const res = await prisma.employee.update({
        where: {
        emp_id: +id,
        },
        data: {
        dob: dob,
        emp_name: emp_name,
        salary: salary,
        },
    });
    return NextResponse.json({
        message: "Employee has already updated successfully.",
        payload: res,
        status: 200,
    });
    
  } catch (error) {
    return NextResponse.json({
        message: "Not found." + error,
        status: 404,
    });
    
  }
}
