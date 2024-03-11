import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Admin } from "src/admin/admin.entity";

@Entity()
export class Secretaria{
    @PrimaryGeneratedColumn()
  id: number;
  @Column()
  adminId
  @ManyToOne(() => Admin, admin => admin.secretaria)
  admin: Admin;

  @Column()
  nombreManual: string;

  @Column()
  descripcionManual: string;

  @Column({ type: 'longblob', nullable: true })
  fileManual: string;

  @Column()
  nombreFormato: string;

  @Column()
  descripcionFormato: string;

  @Column({ type: 'longblob', nullable: true })
  fileFormato: Buffer;
}