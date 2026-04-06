# Basic URL Shortener

A full-stack URL shortening service built to practice PostgreSQL and explore AWS cloud and networking fundamentals.

---

## What It Does

Takes a long URL and returns a shortened link that redirects to the original. Built as a deliberate learning project focused on relational database design with PostgreSQL and hands-on AWS infrastructure.

**Key features:**
- Submit a long URL and receive a shortened alias
- Redirects to the original URL on alias lookup
- All URLs and metadata persisted in a PostgreSQL database
- Deployed and configured on AWS

---

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | Node.js, Express.js |
| Database | PostgreSQL |
| Cloud / Infra | AWS |

---

## What I Learned

This project was intentionally infrastructure-focused. Key areas explored:

- **PostgreSQL** — relational schema design, writing raw SQL queries, managing a Postgres instance vs. a NoSQL store
- **AWS networking fundamentals** — VPC configuration, security groups, EC2 instance setup, environment-based config management
- **Cloud deployment** — moving beyond platform-as-a-service (Render/Vercel) to configure cloud infrastructure directly

---

## Running Locally

### Prerequisites
- Node.js v18+
- PostgreSQL instance (local or cloud)

### Setup
```bash
git clone https://github.com/samuelwbrown4/basic-url-shortener
cd basic-url-shortener
npm install
cp .env.example .env   # add your DATABASE_URL and PORT
npm start
```

### Environment Variables
```
DATABASE_URL=postgresql://user:password@host:5432/dbname
PORT=3000
```

---

## Project Structure

```
basic-url-shortener/
├── routes/         # Express route definitions
├── controllers/    # Redirect and creation logic
├── db/             # PostgreSQL connection and query helpers
└── server.js       # Entry point
```

---

## Author

Samuel Brown — [github.com/samuelwbrown4](https://github.com/samuelwbrown4)