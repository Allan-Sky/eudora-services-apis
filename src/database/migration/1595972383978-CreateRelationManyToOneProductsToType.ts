import { MigrationInterface, QueryRunner } from 'typeorm'

export default class CreateRelationManyToOneProductsToType1595972383978 implements MigrationInterface {
    name = 'CreateRelationManyToOneProductsToType1595972383978'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "products" DROP COLUMN "type"')
      await queryRunner.query('ALTER TABLE "products" ADD "typeId" uuid')
      await queryRunner.query('ALTER TABLE "types" DROP CONSTRAINT "UQ_fa170fda66d232af69b7f880c9e"')
      await queryRunner.query('ALTER TABLE "products" DROP CONSTRAINT "UQ_4c9fb58de893725258746385e16"')
      await queryRunner.query('ALTER TABLE "products" ADD CONSTRAINT "FK_6129aa5c0f65c073ea2f7452195" FOREIGN KEY ("typeId") REFERENCES "types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('ALTER TABLE "products" DROP CONSTRAINT "FK_6129aa5c0f65c073ea2f7452195"')
      await queryRunner.query('ALTER TABLE "products" ADD CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name")')
      await queryRunner.query('ALTER TABLE "types" ADD CONSTRAINT "UQ_fa170fda66d232af69b7f880c9e" UNIQUE ("name")')
      await queryRunner.query('ALTER TABLE "products" DROP COLUMN "typeId"')
      await queryRunner.query('ALTER TABLE "products" ADD "type" uuid NOT NULL')
    }
}
