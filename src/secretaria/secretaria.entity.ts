import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "src/admin/admin.entity";

@Entity()
export class Secretaria{
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  user: string
  @Column()
  nombre: string
  @Column()
  contrasena: string
  @Column()
  numId: string
  @ManyToOne(() => Admin, admin => admin.secretaria)
  admin: Admin;

  @Column({nullable: true})
  nombreManual: string;

  @Column({ nullable: true })
  descripcionManual: string;

  @Column({ type: 'longblob', nullable: true })
  fileManual: string;

  @Column({ nullable: true })
  nombreFormato: string;

  @Column({ nullable: true })
  descripcionFormato: string;

  @Column({ type: 'longblob', nullable: true })
  fileFormato: Buffer;
}