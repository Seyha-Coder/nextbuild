import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const employees = await prisma.employee.findMany({
      orderBy: {
        emp_id: "asc",
      },
    });
    console.table(employees);
    return NextResponse.json({
      message: "All employees has already fetched.",
      payload: employees,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Not found." + error,
      status: 404,
    });
  }
}
