import { serial, text, timestamp, pgTable, integer, AnyPgColumn } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    account_id: integer("account_id").notNull().references((): AnyPgColumn => accounts.id, { onDelete: "cascade" }), // delete users when their account is deleted.
    username: text("username").notNull(),
    role: text("role").$type<"read" | "write">().notNull(),
    created_at: timestamp("created_at").notNull(),
    updated_at: timestamp("updated_at").notNull(),
});

export const accounts = pgTable("accounts", {
    id: serial("id").primaryKey().notNull(),
    name: text("name").notNull(),
    owner_user_id: integer("owner_user_id").notNull().references((): AnyPgColumn => users.id),
    created_at: timestamp("created_at").notNull(),
    updated_at: timestamp("updated_at").notNull(),
});

export const plants = pgTable("plants", {
    id: serial("id").primaryKey().notNull(),
    account_id: integer("account_id").notNull().references((): AnyPgColumn => accounts.id, { onDelete: "cascade" }), // delete plants when their account is deleted.
    scientific_name: text("scientific_name").notNull(),
    common_name: text("common_name").notNull(),
    acquired_at: timestamp("acquired_at").notNull(),
    created_at: timestamp("created_at").notNull(),
    updated_at: timestamp("updated_at").notNull(),
});

export const waterings = pgTable("waterings", {
    id: serial("id").primaryKey().notNull(),
    plant_id: integer("plant_id").notNull().references((): AnyPgColumn => plants.id, { onDelete: "cascade" }), // delete waterings when their plant is deleted.
    watered_by_user_id: integer("plant_id").notNull().references((): AnyPgColumn => plants.id, { onDelete: "cascade" }),
    amount: integer("amount").notNull(),
    watered_at: timestamp("watered_at").notNull(),
    created_at: timestamp("created_at").notNull(),
});
