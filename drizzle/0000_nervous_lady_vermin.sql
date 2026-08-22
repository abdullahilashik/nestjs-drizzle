CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text(50) NOT NULL,
	`last_name` text(50),
	`username` text(50) NOT NULL,
	`email` text(50) NOT NULL
);
