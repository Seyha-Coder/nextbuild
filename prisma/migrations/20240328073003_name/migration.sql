-- CreateTable
CREATE TABLE "employee" (
    "emp_id" SERIAL NOT NULL,
    "emp_name" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("emp_id")
);
