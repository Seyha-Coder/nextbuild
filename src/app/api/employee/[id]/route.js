import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function GET(req, { params }) {
  
  try {
    const result = await prisma.employee.findUnique({
        where: {
          emp_id: +params.id,
        },
      });
      console.table(result);
      return NextResponse.json({
        message: "Employee has already found.",
        payload: result,
        status: 200,
      });
    
  } catch (error) {
    return NextResponse.json({
        message: "Not found." + error,
        status: 404,
      });
  }
}
