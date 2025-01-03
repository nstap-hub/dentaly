-- CreateEnum
CREATE TYPE "estado_cita" AS ENUM ('pendiente', 'confirmada', 'cancelada', 'completada');

-- CreateEnum
CREATE TYPE "rol" AS ENUM ('Admin', 'Usuario', 'Paciente');

-- CreateTable
CREATE TABLE "Citas" (
    "id" SERIAL NOT NULL,
    "id_paciente" SERIAL NOT NULL,
    "id_tratamiento" SERIAL NOT NULL,
    "fecha_hora_inicio" TIMESTAMPTZ(6),
    "fecha_hora_fin" TIMETZ(6),
    "status" "estado_cita",
    "notas" TEXT NOT NULL,

    CONSTRAINT "Citas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historial_Tratamientos" (
    "id" SERIAL NOT NULL,
    "id_paciente" SERIAL NOT NULL,
    "id_tratamiento" SERIAL NOT NULL,
    "fecha_realizacion" DATE,
    "notas" TEXT NOT NULL,

    CONSTRAINT "Historial_Tratamientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pacientes" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(20),
    "apellido" VARCHAR(20),
    "fecha_nacimiento" DATE,
    "telefono" VARCHAR,
    "direccion" VARCHAR,
    "email" VARCHAR,
    "alergias" TEXT NOT NULL,
    "enfermedades_cronicas" TEXT NOT NULL,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tratamientos" (
    "id" SERIAL NOT NULL,
    "nombre " VARCHAR,
    "descripción" TEXT,
    "precio" DECIMAL,

    CONSTRAINT "Tratamientos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Usuarios" (
    "id" SERIAL NOT NULL,
    "nombre" VARCHAR(20),
    "apellido" VARCHAR(20),
    "email" VARCHAR(30),
    "password" VARCHAR(30),
    "rol" "rol" NOT NULL DEFAULT 'Usuario',

    CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "email_unique" ON "Pacientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "unique_email" ON "Usuarios"("email");

-- AddForeignKey
ALTER TABLE "Citas" ADD CONSTRAINT "fk_id_paciente" FOREIGN KEY ("id_paciente") REFERENCES "Pacientes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Citas" ADD CONSTRAINT "fk_id_tratamientos" FOREIGN KEY ("id_tratamiento") REFERENCES "Tratamientos"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
