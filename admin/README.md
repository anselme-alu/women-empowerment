# README: Setting Up and Running this project

## Overview
This guide provides a step-by-step process to set up a **Payload CMS** website and run the application locally or in a production environment.

---

## Prerequisites
Before setting up the Payload CMS, ensure the following are installed on your system:

1. **Node.js** (v16 or later)
2. **npm** (v8 or later) or **yarn**
3. **MongoDB** (as Payload CMS requires a database)
3. **Vercel Blob store** we need to store the files in the cloud
4. **Git** (for version control)

---

## Step 1: Clone the Repository

If your project is hosted on a Git repository:
```bash
git clone <repository-url>
cd <project-directory>
```

If starting a new project:
```bash
npx create-payload-app my-project
cd my-project
```

---

## Step 2: Install Dependencies
Run the following command in the project directory:
```bash
npm install
```
or, if using yarn:
```bash
yarn install
```

---

## Step 3: Configure the Environment
Create a `.env` file in the root directory to define the environment variables. Example:
```dotenv
# Database
MONGO_URL=mongodb://localhost:27017/payloadcms

# Server
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PORT=3000

# Admin
PAYLOAD_ADMIN_EMAIL=admin@example.com
PAYLOAD_ADMIN_PASSWORD=securepassword
```

Make sure to replace the placeholder values with your actual configurations.

---

## Step 4: Start MongoDB
Ensure MongoDB is running on your system. Use the following command to start MongoDB:
```bash
mongod
```

---

## Step 5: Run the Application

### Development Mode
For development, start the app with hot-reloading enabled:
```bash
npm run dev
```
or:
```bash
yarn dev
```

### Production Mode
To run the application in production:
1. Build the project:
   ```bash
   npm run build
   ```
   or:
   ```bash
   yarn build
   ```

2. Start the server:
   ```bash
   npm run start
   ```
   or:
   ```bash
   yarn start
   ```

---

## Step 6: Access the Admin Panel
Once the server is running, access the Payload CMS admin panel by navigating to:
```
http://localhost:3000/admin
```
Log in using the credentials provided in the `.env` file.

---

## Optional: Customizing Payload CMS
1. **Modify Collections**: Edit or create collections in the `src/collections` directory.
2. **Customize Hooks**: Use hooks for advanced functionality in `src/hooks`.
3. **Update Configurations**: Update the configuration file in `payload.config.ts`.

---

## Troubleshooting
- **Issue: MongoDB connection failed.**
  - Check the `MONGO_URL` in your `.env` file and ensure MongoDB is running.

- **Issue: Port conflict.**
  - Change the `PAYLOAD_PORT` in the `.env` file to a different value.

- **Issue: Missing dependencies.**
  - Run `npm install` or `yarn install` again to ensure all dependencies are installed.

---

## Deployment
For production deployment, consider hosting the app on platforms like **Vercel**, **Heroku**, or **Docker**. Make sure MongoDB is accessible in the cloud or via a hosted service like **MongoDB Atlas**.

---

## Resources
- [Payload CMS Documentation](https://payloadcms.com/docs)
- [MongoDB Documentation](https://www.mongodb.com/docs)
- [Node.js Documentation](https://nodejs.org/en/docs)

---

Enjoy building with Payload CMS! 🎉
