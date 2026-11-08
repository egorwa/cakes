# Steamy Cakes - Website for Cakes for All Occasions

# Overview

I built Steamy Creamy Cakes to further my learning as a software engineer and to practice building a real full-stack application with TypeScript.

Steamy Creamy Cakes is a web-based cake ordering and management system. Customers can browse a catalogue of cakes, view cake names, descriptions, prices and images, and place orders. The system stores all cake information in a PostgreSQL database and displays it dynamically on the website.

The system has two parts:
- **Frontend:** React + Vite website where customers view cakes
- **Backend:** TypeScript + Express.js server with REST API that connects to the database

The backend supports full CRUD (Create, Read, Update, Delete) for cakes:
- `GET /api/cakes` - Get all cakes
- `POST /api/cakes` - Add a new cake
- `PUT /api/cakes/:id` - Update a cake
- `DELETE /api/cakes/:id` - Delete a cake

I used TypeScript to demonstrate strong typing across the whole stack. For example, the `Cake` model uses TypeScript classes and access modifiers so every cake returned by the API has the correct shape:

```ts
export class Cake {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: string
  ) {}
}

My purpose for writing this software was to learn TypeScript's type system in a real project - how types, interfaces, and compiler checks prevent runtime errors - and to learn how a frontend, backend, and database work together.

The purpose of Steamy Cakes itself is to make it easy for a small cake business to manage and sell cakes online:

.Customers had to ask on WhatsApp / in person to see what cakes are available

.The business had no central place to store cake prices and descriptions

.Updating prices or adding new cakes was slow and confusing

With Steamy Cakes:
.Customers can see all cakes in one place, anytime

.The business owner can add, update and delete cakes quickly

.Prices and cake details are always up to date

# Software Demo



# Development Environment

This project was developed using:

.Operating System: Windows 11
.Code Editor: Visual Studio Code
.Frontend: React + Vite (runs on http://localhost:5174)
.Backend: TypeScript + Express.js (runs on http://localhost:5000)
.Language: TypeScript / JavaScript
.Frontend Package Manager: npm (uses package-lock.json)
.Backend Package Manager: pnpm (uses pnpm-lock.yaml)
.Database: PostgreSQL (managed with pgAdmin 4)
.Version Control: Git + GitHub
.Deployment: Render (for backend and database)
.Browser for Testing: Google Chrome
.Testing / Linting: Jest + ts-jest, ESLint + typescript-eslint

How to Run Locally
1. Backend (server folder):

cd server
pnpm install
pnpm run dev

2. Frontend (cakes folder):

cd cakes
npm install
npm run dev

Then open:
.Frontend: http://localhost:5174
.Backend API: http://localhost:5000/api/cakes

#Useful Websites

. TypeScript Handbook - Classes and Types
. Express.js - Routing and API Guide
. React + Vite Tutorial
. Full Stack Project Tutorial
. PostgreSQL + Express Tutorial
. ESLint - Flat Config Docs

#Future Work

.Add customer ordering / checkout - cart, order form, and order history

.Add cake images upload so the owner can add photos from the admin page

.Add user authentication - admin login to manage cakes, customer login to track orders

.Add validation so bad prices or empty names are rejected by the API

