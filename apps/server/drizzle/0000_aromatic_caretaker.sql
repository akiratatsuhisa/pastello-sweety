CREATE TABLE IF NOT EXISTS "comments" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"post_id" bigint NOT NULL,
	"parent_id" bigint,
	"content" text NOT NULL,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "posts" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"type" varchar DEFAULT 'standard' NOT NULL,
	"title" varchar(256) NOT NULL,
	"description" varchar(1024),
	"content" text,
	"is_publish" boolean DEFAULT false NOT NULL,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reactions" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"entity_name" varchar NOT NULL,
	"entity_id" bigint NOT NULL,
	"rating" smallint,
	"type" varchar,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "reactions_entity_name_entity_id_created_by_unique" UNIQUE("entity_name","entity_id","created_by")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tag_relationships" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"entity_name" varchar NOT NULL,
	"entity_id" bigint NOT NULL,
	"tag_id" bigint NOT NULL,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "tag_relationships_entity_name_entity_id_tag_id_unique" UNIQUE("entity_name","entity_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tags" (
	"id" bigserial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"created_by" varchar(256) NOT NULL,
	"created_at" timestamp NOT NULL,
	"updated_by" varchar(256) NOT NULL,
	"updated_at" timestamp NOT NULL,
	CONSTRAINT "tags_name_unique" UNIQUE("name")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "comments" ADD CONSTRAINT "comments_parent_id_comments_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."comments"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
