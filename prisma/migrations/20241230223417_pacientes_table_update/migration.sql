/*
  Warnings:

  - You are about to drop the column `direccion` on the `Pacientes` table. All the data in the column will be lost.
  - Made the column `fecha_hora_inicio` on table `Citas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_hora_fin` on table `Citas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `status` on table `Citas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_realizacion` on table `Historial_Tratamientos` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `calle` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ciudad` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `codigo_postal` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estado` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numero_exterior` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pais` to the `Pacientes` table without a default value. This is not possible if the table is not empty.
  - Made the column `nombre` on table `Pacientes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `apellido` on table `Pacientes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fecha_nacimiento` on table `Pacientes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `telefono` on table `Pacientes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Pacientes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre ` on table `Tratamientos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `descripción` on table `Tratamientos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `precio` on table `Tratamientos` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nombre` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `apellido` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.
  - Made the column `password` on table `Usuarios` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Citas" ALTER COLUMN "fecha_hora_inicio" SET NOT NULL,
ALTER COLUMN "fecha_hora_fin" SET NOT NULL,
ALTER COLUMN "status" SET NOT NULL,
ALTER COLUMN "notas" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Historial_Tratamientos" ALTER COLUMN "fecha_realizacion" SET NOT NULL,
ALTER COLUMN "notas" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pacientes" DROP COLUMN "direccion",
ADD COLUMN     "calle" VARCHAR(255) NOT NULL,
ADD COLUMN     "ciudad" VARCHAR(255) NOT NULL,
ADD COLUMN     "codigo_postal" VARCHAR(10) NOT NULL,
ADD COLUMN     "colonia" VARCHAR(255),
ADD COLUMN     "estado" VARCHAR(255) NOT NULL,
ADD COLUMN     "numero_exterior" VARCHAR(20) NOT NULL,
ADD COLUMN     "numero_interior" VARCHAR(20),
ADD COLUMN     "pais" VARCHAR(255) NOT NULL,
ALTER COLUMN "nombre" SET NOT NULL,
ALTER COLUMN "apellido" SET NOT NULL,
ALTER COLUMN "fecha_nacimiento" SET NOT NULL,
ALTER COLUMN "telefono" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "alergias" DROP NOT NULL,
ALTER COLUMN "enfermedades_cronicas" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Tratamientos" ALTER COLUMN "nombre " SET NOT NULL,
ALTER COLUMN "descripción" SET NOT NULL,
ALTER COLUMN "precio" SET NOT NULL;

-- AlterTable
ALTER TABLE "Usuarios" ALTER COLUMN "nombre" SET NOT NULL,
ALTER COLUMN "apellido" SET NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
ALTER COLUMN "password" SET NOT NULL;
