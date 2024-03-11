import { Reporte } from "src/reporte/reporte.entity"
import { Secretaria } from "src/secretaria/secretaria.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

export enum roles{
    sec = "Secretaria",
    emp = "Empleado"
}

@Entity()
export class Admin{
    @PrimaryGeneratedColumn()
    id: number
    @Column({type:'enum', enum: roles})
    rol: roles
    @Column({nullable: true})
    nombreSecretaria: string
    @Column({nullable: true, unique: true})
    userSecretaria: string
    @Column({nullable: true})
    contrasenaSecretaria: string
    @Column({nullable: true, unique: true})
    identificacionSecretaria: string
    @Column({nullable: true})
    nombreEmpleado: string
    @Column({nullable: true, unique: true})
    userEmpleado: string
    @Column({nullable: true, unique: true})
    contrasenaEmpleado: string
    @Column({nullable: true, unique: true})
    identificacionEmpleado:string

    @OneToMany(()=> Reporte, rep => rep.administrador)
    reportes:Reporte[]
    @OneToMany(() => Secretaria, sec => sec.admin)
    secretaria: Secretaria[]
}