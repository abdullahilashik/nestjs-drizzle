## **Mastering Drizzle ORM in NestJS Architecture**

### **Module 1: Drizzle Core Engine & Mental Model**

* **The Anti-ORM Philosophy:** Zero-abstraction SQL generation vs. heavy runtime engines (Prisma, TypeORM).
* **Driver Ecosystem In-Depth:** Choosing between `better-sqlite3`, `@libsql/client` (Turso), `node-postgres`, `postgres.js`, and `bun:sqlite`.
* **Schema Definition Masterclass:**
* Primary keys, composite keys, auto-increment strategies, and UUID generators.
* Custom data types, enums, JSON/JSONB fields, and default timestamp hooks.


* **Query API Dualism:** Comparing the SQL-like Query Builder (`db.select()`) vs. Relational Query API (`db.query`).

---

### **Module 1.5: Core CRUD Operations Masterclass**

* **Create:** Single & bulk inserts, returning clauses (`.returning()`), and upserts (`ON CONFLICT DO UPDATE/NOTHING`).
* **Read:** SQL operators (`eq`, `inArray`, `between`, `ilike`, `and/or`), projection selection, and relational fetching.
* **Update:** Targeted criteria updates and atomic field mutations (`sql`${users.views} + 1``).
* **Delete:** Hard deletes vs. soft-delete implementation strategies (`deletedAt: text()`).

---

### **Module 1.6: Advanced Querying — Joins, Aggregations & Pagination**

* **Relational Joins:** `innerJoin`, `leftJoin`, `rightJoin`, `fullJoin`, multi-table joins, and aliased self-joins (`aliasedTable()`).
* **Aggregations & Grouping:** `count()`, `sum()`, `avg()`, `min()`, `max()`, `.groupBy()`, and `.having()` filters.
* **Ordering & Sorting:** Multi-column sorting, `NULL` positioning (`nullsFirst/Last`), and expression-based sorting.
* **Pagination Strategies:** Offset pagination (`limit/offset`) vs. high-performance Cursor-based (Keyset) pagination.

---

### **Module 2: The Production Drizzle-Zod Pipeline**

* **Single Source of Truth:** Auto-generating runtime schemas with `drizzle-zod` (`createInsertSchema`, `createSelectSchema`).
* **NestJS DTO Integration:** Replacing `class-validator` and `class-transformer` using `nestjs-zod` (`createZodDto`).
* **Advanced Validations & Transforms:** Coercing query params (`z.coerce`), field refinements, and multi-field validation constraints.
* **OpenAPI/Swagger Sync:** Automated Swagger UI generation directly from Zod-derived NestJS DTOs.

---

### **Module 3: Enterprise NestJS Architecture**

* **Custom Dynamic DB Modules:** Custom injection tokens (`Symbol('DRIZZLE')`), providers, and type exports (`LibSQLDatabase`).
* **Monorepo Strategy (`@repo/db`):** Shared database packages in Nx/Turborepo workspaces with isolated domain boundaries.
* **Multi-Database Architectures:** Configuring dual DB connections (e.g., PostgreSQL for primary operations, SQLite/libSQL for audit logging).
* **Isolation Patterns:** Microservice isolation (separate databases) vs. monolithic isolation (PostgreSQL schemas / SQLite prefixes).
* **Environment Resilience:** Fail-fast startup validations with `config.getOrThrow()` and health checks via `@nestjs/terminus`.

---

### **Module 4: Advanced Data Patterns, Transactions & Performance**

* **Transactional Reliability:** Unit of Work patterns and explicit transaction management (`db.transaction()`) with automatic rollbacks.
* **Complex SQL Patterns:** Subqueries, Common Table Expressions (CTEs), and raw SQL escape hatches (`sql\`...``).
* **Migration Pipelines:** Multi-config setups in `drizzle-kit`, automated migration scripts, and schema drift prevention.
* **Performance Tuning:** Benchmarking queries, connection pooling optimization, and read-replica query routing.