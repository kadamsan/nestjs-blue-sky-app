import { MigrationInterface, QueryRunner } from 'typeorm';

export class States1694412498876 implements MigrationInterface {
  name = 'States1694412498876';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "states" ("id" SERIAL NOT NULL, "shapeid" character varying NOT NULL, "type" character varying NOT NULL, "iso_group" character varying NOT NULL, "name" character varying NOT NULL, "admin_level" integer NOT NULL, "wkb_geometry" geometry NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "createdBy" character varying, "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedBy" character varying, CONSTRAINT "PK_09ab30ca0975c02656483265f4f" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "states"`);
  }
}
