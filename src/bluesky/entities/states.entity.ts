import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Geometry } from 'geojson';

@Entity({ name: 'states' })
export class States {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shapeid: string;

  @Column()
  type: string;

  @Column()
  iso_group: string;

  @Column()
  name: string;

  @Column()
  admin_level: number;

  @Column({
    type: 'geometry',
    srid: 4326, // WGS84 reference system
  })
  wkb_geometry: Geometry;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ nullable: true })
  updatedBy: string;
}
