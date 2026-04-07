# NestJS Abstract Repository Pattern Example

A comprehensive example of implementing the Abstract Repository Pattern in NestJS using Mongoose for MongoDB. This pattern promotes code reusability, maintainability, and separation of concerns by abstracting common database operations into a base repository class.

## Overview

The Abstract Repository Pattern provides a standardized way to interact with data sources. In this implementation:

- **BaseInterfaceRepository**: Defines the contract for repository operations (CRUD, aggregation, etc.)
- **BaseAbstractRepository**: Provides a concrete implementation using Mongoose
- **Concrete Repositories**: Extend the base class for specific entities (e.g., UserRepository)

## Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Bulk operations and aggregations
- ✅ Type-safe with TypeScript
- ✅ Mongoose integration
- ✅ Modular architecture
- ✅ Unit and E2E tests included

## Project Structure

```
src/
├── common/
│   ├── abstract/
│   │   ├── base.abstract.repository.ts    # Abstract repository implementation
│   │   └── base.interface.repository.ts    # Repository interface
│   ├── config/                            # Configuration modules
│   └── interceptors/                      # Response interceptor
├── user/                                  # Example user module
│   ├── dto/
│   ├── user.controller.ts
│   ├── user.repository.ts                 # Concrete repository
│   ├── user.service.ts
│   ├── user.schema.ts
│   └── user.interface.ts
└── app.module.ts
```

## Installation

```bash
# Install dependencies
pnpm install

# Set up environment variables (create .env file)
cp .env.example .env
```

## Environment Configuration

Create a `.env` file in the root directory:

```env
MONGODB_URI=mongodb://localhost:27017/nestjs-abstract-pattern
PORT=3000
```

## Running the Application

```bash
# Development mode
pnpm run start:dev

# Production build
pnpm run build
pnpm run start:prod
```

## API Endpoints

### Users

- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user

Example request:

```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "John Doe", "email": "john@example.com"}'
```

## Available Repository Methods

The base repository provides the following methods:

- `create(data: Partial<T>): Promise<T>`
- `createMany(data: Partial<T>[]): Promise<T[]>`
- `findOne(filter, options?): Promise<T | null>`
- `findById(id, options?): Promise<T | null>`
- `findAll(filter?, options?): Promise<T[]>`
- `updateById(id, update, options?): Promise<T | null>`
- `updateOne(filter, update, options?): Promise<T | null>`
- `updateMany(filter, update, options?): Promise<{ matched, modified }>`
- `delete(id): Promise<T | null>`
- `deleteMany(filter): Promise<{ deleted }>`
- `aggregate(pipeline): Promise<R[]>`
- `bulkWrite(operations): Promise<{ ok, insertedCount, modifiedCount, deletedCount }>`
- `count(filter?): Promise<number>`
- `exists(filter): Promise<boolean>`

## Testing

```bash
# Unit tests
pnpm run test

# E2E tests
pnpm run test:e2e

# Test coverage
pnpm run test:cov
```

## Benefits of This Pattern

1. **Code Reusability**: Common database operations are centralized
2. **Maintainability**: Changes to database logic only need to be made in one place
3. **Type Safety**: Full TypeScript support with generics
4. **Testability**: Easy to mock repositories in unit tests
5. **Consistency**: Standardized interface across all entities
6. **Extensibility**: Easy to add custom methods for specific entities

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License.
