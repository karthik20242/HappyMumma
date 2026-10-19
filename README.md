# HappyMumma – Fresh Cooking Kits & Authentic Recipes

A full-stack e-commerce web application built to provide customers with a convenient online platform for exploring food offerings, placing orders, and completing payments. HappyMumma integrates a modern React frontend with a Node.js backend, database services, payment processing, and automated notifications.

**Live Website:** https://happymumma.ai.studio/

---

## ✨ Features

### 🛍️ E-Commerce
- Browse available food products and offerings.
- Add products to the shopping cart and manage cart items.
- Support customer authentication and account management.
- Place and manage customer orders.
- Support eligible Cash on Delivery (COD) orders and counter pickup.

### 💳 Payment Integration
- **Razorpay:** Configured for supported online payment methods, including cards, net banking, and UPI.
- **UPI QR Code / Intent:** Supports UPI payment workflows compatible with participating UPI applications.
- **Webhook Verification:** Supports payment event verification to help validate payment status.
- **Cash on Delivery:** Available for eligible products and pickup orders.

### 🗄️ Database & Storage
- Persistent local JSON storage for application data.
- Supabase PostgreSQL integration for cloud database functionality.
- Supabase Storage integration for supported file-storage workflows.
- Row Level Security (RLS) support for database access control.

### 📲 Automated Notifications
- **WhatsApp Notifications:** Twilio integration for configured order and administrative notifications.
- **Email Notifications:** Nodemailer and Brevo integration for supported email workflows.
- **SMTP / REST API:** Supports configured email delivery methods.

### 🔐 Authentication & Security
- JWT-based authentication and session handling.
- Password hashing using configured cryptographic mechanisms.
- Protected administrative functionality.
- Multi-part image uploads using Multer.
- Payment webhook verification.
- Database access controls through appropriately configured security policies.

### 🎨 User Interface
- React 18 with TypeScript.
- Responsive layouts styled with Tailwind CSS.
- Lucide React icons.
- Canvas Confetti animations for supported interactions.
- Context-based state management for cart, authentication, and products.
- Single-page application navigation using wouter or the configured custom router.

---

## 🛠️ Technology Stack

### Frontend

| Technology | Purpose |
|---|---|
| React 18 | Component-based user interface |
| TypeScript | Type safety and maintainable code |
| Vite | Development server and build tool |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icons |
| Canvas Confetti | Visual animations |
| React Context API | Shared application state |
| wouter / Custom SPA Router | Client-side navigation |

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend server and API routes |
| TypeScript | Backend development |
| tsx | TypeScript execution during development |
| Twilio SDK | WhatsApp notifications |
| Nodemailer | Email delivery |
| Brevo | Email service integration |
| jsonwebtoken | JWT authentication |
| Node.js Crypto | Cryptographic operations |
| Multer | Multipart file uploads |

### Database & Storage

| Technology | Purpose |
|---|---|
| JSON files | Local persistent data storage |
| Supabase | Cloud database and platform services |
| PostgreSQL | Relational database |
| Supabase Storage | Supported file-storage operations |
| Row Level Security | Database access restrictions |

Local JSON files include `products.json`, `orders.json`, `users.json`, and `audit_logs.json`, according to the configured application storage implementation.

### Payments

- Razorpay payment gateway.
- Direct UPI QR code and intent workflows.
- Cash on Delivery for eligible orders.

---

## 🏗️ Application Architecture

```text
                    HappyMumma
                        |
          +-------------+-------------+
          |                           |
     React Frontend              Express Backend
     React + TypeScript          Node.js + TypeScript
     Vite + Tailwind CSS                |
          |                    +-------+--------+
          |                    |       |        |
     Cart / Auth /          Database  Payments Notifications
     Product Context        Storage   Razorpay  WhatsApp
                              |       UPI       Email
                       +------+------+
                       |             |
                   JSON Files     Supabase
                                  PostgreSQL
                                  Storage
```

*Architecture diagram represents the configured technology stack. Actual request flows depend on the implementation.*

---

## 🚀 Getting Started

### Prerequisites

Install the following tools before running the project locally:

- Node.js (a version compatible with the project dependencies).
- npm.
- Git.
- A code editor such as Visual Studio Code.
- Access credentials for any external services required by the application.

### 1. Clone the Repository

Replace the placeholder with your actual GitHub repository URL.

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install Dependencies

```bash
npm install
```

If the project uses separate frontend and backend package files, install dependencies in the corresponding directories instead.

### 3. Configure Environment Variables

Create a local `.env` file containing the environment variables required by the application.

Example placeholders:

```dotenv
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=your_database_connection_string
SUPABASE_URL=your_supabase_project_url
SUPABASE_ANON_KEY=your_public_or_anon_key

# Payment Integration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
RAZORPAY_WEBHOOK_SECRET=your_webhook_secret

# Authentication
JWT_SECRET=replace_with_a_strong_random_secret

# Notifications
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
BREVO_API_KEY=your_brevo_api_key
```

**Important:** These are example variable names. Check the source code for the exact names your application expects. Add other required variables only as needed.

Never commit the real `.env` file to GitHub. Configure production secrets through your hosting provider's secure environment-variable settings. Keep privileged Supabase service-role keys and payment secrets on the backend only.

### 4. Run the Application

Check the `scripts` section of `package.json` for the correct commands.

For a typical Vite frontend:

```bash
npm run dev
```

For a backend using `tsx`, a project might use:

```bash
npx tsx server.ts
```

Use these commands only if they match your project's scripts and server entry point. If your application uses a combined development command, follow the configured script instead.

### 5. Build for Production

For a Vite frontend, the usual production build command is:

```bash
npm run build
```

Check the available scripts before running the command. Frontend and backend production builds may be configured separately.

---

## 🔐 Security Best Practices

- Store private credentials in environment variables.
- Keep `.env` files and other secret files out of version control.
- Never expose Razorpay secret keys or webhook signing secrets in frontend code.
- Keep privileged database credentials and Supabase service-role keys on the backend.
- Apply least-privilege access controls and appropriate Supabase Row Level Security policies.
- Validate payment status on the backend rather than trusting frontend payment confirmation.
- Verify payment webhook signatures using the official provider requirements.
- Validate uploaded image types, file sizes, and access permissions.
- Use strong authentication secrets and appropriate password-hashing mechanisms.
- Avoid publishing private phone numbers, UPI IDs, customer data, or production logs.

Example `.gitignore` entries:

```gitignore
node_modules/
dist/
build/
.env
.env.*
!.env.example
*.log
```

Review your existing `.gitignore` before replacing it. Ensure that no real secrets are committed, including secrets hardcoded in source files or retained in Git history.

---

## 📁 Project Structure

The exact structure depends on the files generated for your project. A typical structure for this stack may look like:

```text
HappyMumma/
├── src/
│   ├── components/
│   ├── contexts/
│   ├── pages/
│   ├── App.tsx
│   └── main.tsx
├── server.ts
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts
├── .env.example
├── .gitignore
└── README.md
```

Your project may use different folders, filenames, or separate frontend and backend directories.

---

## 🎯 Project Objectives

- Develop a modern, responsive e-commerce experience.
- Integrate frontend and backend application functionality.
- Support online payments and eligible offline payment options.
- Provide automated order-related notifications.
- Support persistent data storage and cloud database integration.
- Apply authentication and security practices to administrative and payment workflows.

---

## 🔮 Future Enhancements

- Advanced product search and filtering.
- Enhanced order tracking and order-history features.
- Improved inventory and stock management.
- Customer reviews and ratings.
- Expanded analytics and reporting.
- Automated testing and continuous integration.
- Further performance and accessibility improvements.

---

## 👨‍💻 Development

Developed using Google AI Studio and the technologies listed above.

The project combines modern frontend development, backend API integration, database storage, payment workflows, and customer notification services.

## 📄 License

No license has been specified. Add an appropriate open-source license if you intend to permit others to reuse or modify the source code. Otherwise, clarify the applicable usage terms before publishing.

---

**HappyMumma — Fresh Cooking Kits & Authentic Recipes.**
