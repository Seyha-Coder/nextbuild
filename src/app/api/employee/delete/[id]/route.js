import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();
export async function DELETE(req, { params: { id } }) {
  
  try {
    const del = await prisma.employee.delete({
        where: {
          emp_id: +id,
        },
      });
      return NextResponse.json({
        message: "Employee has already deleted successfully.",
        status: 200,
      });
    
  } catch (error) {
      return NextResponse.json({
        message: "Not found." + error,
        status: 404,
      });
  }
}
