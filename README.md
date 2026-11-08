# cake-
website for cakes for all ocassions 

# Steamy Cakes

## Description of Software
Steamy Cakes is a web-based cake ordering and management system.

Customers can browse a catalogue of cakes, view cake names, descriptions, prices and images, and place orders. The system stores all cake information in a PostgreSQL database and displays it dynamically on the website.

The system has two parts:
- **Frontend:** React + Vite website where customers view cakes
- **Backend:** TypeScript + Express.js server with REST API that connects to the database

The backend supports full CRUD (Create, Read, Update, Delete) for cakes:
- `GET /api/cakes` - Get all cakes
- `POST /api/cakes` - Add a new cake
- `PUT /api/cakes/:id` - Update a cake
- `DELETE /api/cakes/:id` - Delete a cake

## Software Vedio


## Purpose of Creating the Software
The purpose of Steamy Cakes is to make it easy for a small cake business to manage and sell cakes online.

Problems it solves:
- Customers had to ask on WhatsApp / in person to see what cakes are available
- The business had no central place to store cake prices and descriptions
- Updating prices or adding new cakes was slow and confusing

With Steamy Cakes:
- Customers can see all cakes in one place, anytime
- The business owner can add, update and delete cakes quickly from the database
- Prices and cake details are always up to date

This project was also created as a learning project to practice full-stack development with React, TypeScript, Express and PostgreSQL.

## Development Environment
This project was developed using:

- **Operating System:** Windows 11
- **Code Editor:** Visual Studio Code
- **Frontend:** React + Vite (runs on http://localhost:5174)
- **Backend:** TypeScript + Express.js (runs on http://    localhost:5000)
- **Language:** TypeScript / JavaScript
- **Frontend Package Manager:** npm (uses `package-lock.json`)
- **Backend Package Manager:** pnpm (uses `pnpm-lock.yaml`)
- **Database:** PostgreSQL (managed with pgAdmin 4) 
- **Version Control:** Git + GitHub
- **Deployment:** Render (for backend and database)
- **Browser for Testing:** Google Chrome

### How to Run Locally

**1. Backend (server folder):**
cd server
pnpm install
pnpm run dev

**2. Frontend (cakes folder):**cd cakes
npm install
npm run dev


## Useful Sites
https://youtu.be/d56mG7DezGs?si=tNfKFMyQfvNBPxmu
https://youtu.be/2gkcZxcNUYY?si=zjmaQq90kuoZO-5q
https://youtu.be/bYgphDEWwvs?si=6IEnx0gIjOGy7vLW