import { Admin } from "src/admin/admin.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Reporte{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    titulo: string
    @Column()
    descripcion: string
    @Column()
    administradorId:number
    @Column()
    reportId: number
    @ManyToOne(()=> Admin, admin => admin.reportes)
    administrador: Admin
}