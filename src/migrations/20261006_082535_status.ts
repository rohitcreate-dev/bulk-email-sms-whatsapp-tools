import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_contacts_email_status" ADD VALUE 'dead' BEFORE 'invalid';
  ALTER TABLE "brands" ALTER COLUMN "rate_per_hour" SET DEFAULT 50;
  ALTER TABLE "contacts" ADD COLUMN "email_note" varchar;
  ALTER TABLE "brands" ADD COLUMN "bounce_uid" numeric;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contacts" ALTER COLUMN "email_status" SET DATA TYPE text;
  ALTER TABLE "contacts" ALTER COLUMN "email_status" SET DEFAULT 'ok'::text;
  DROP TYPE "public"."enum_contacts_email_status";
  CREATE TYPE "public"."enum_contacts_email_status" AS ENUM('ok', 'bounced', 'invalid');
  ALTER TABLE "contacts" ALTER COLUMN "email_status" SET DEFAULT 'ok'::"public"."enum_contacts_email_status";
  ALTER TABLE "contacts" ALTER COLUMN "email_status" SET DATA TYPE "public"."enum_contacts_email_status" USING "email_status"::"public"."enum_contacts_email_status";
  ALTER TABLE "brands" ALTER COLUMN "rate_per_hour" SET DEFAULT 100;
  ALTER TABLE "contacts" DROP COLUMN "email_note";
  ALTER TABLE "brands" DROP COLUMN "bounce_uid";`)
}
