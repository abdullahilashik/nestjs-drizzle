CREATE TABLE "posts" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"slug" text,
	"description" text NOT NULL,
	"created_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "pg_galleries" (
	"post_id" integer,
	"image_path" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pg_galleries" ADD CONSTRAINT "pg_galleries_post_id_posts_id_fk" FOREIGN KEY ("post_id") REFERENCES "public"."posts"("id") ON DELETE cascade ON UPDATE no action;