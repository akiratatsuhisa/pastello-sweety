CREATE TABLE IF NOT EXISTS "books" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chapters" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"title" varchar(256) NOT NULL,
	"book_id" bigint NOT NULL,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "chapters" ADD CONSTRAINT "chapters_book_id_books_id_fk" FOREIGN KEY ("book_id") REFERENCES "public"."books"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
