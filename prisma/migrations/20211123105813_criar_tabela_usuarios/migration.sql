-- CreateTable
<<<<<<< HEAD
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
=======
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "employeeName" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
>>>>>>> e93526092d806daa25f4c747b336126ee2d41528
