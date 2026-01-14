# Queensec Frontend - Tax Gateway Application

A React-based frontend application for Queensec Global's tax gateway platform, supporting multiple account types (Individual, Corporate, Vendor) for managing mining tax payments and transactions.

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Development](#development)
- [Build & Deployment](#build--deployment)
- [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

Queensec Frontend is a comprehensive tax gateway application that enables users to:
- Make payments for mining operations
- Manage haulers and vehicles
- Track transaction history
- Issue tickets (Vendor accounts)
- Fund wallets (Vendor accounts)
- View analytics and reports

### Account Types

The application supports three account types:
- **Individual**: Regular users making payments
- **Corporate/Federal Agency**: Enterprise-level accounts
- **Vendor**: Accounts that can issue tickets and manage beneficiaries

## ✨ Features

- 🔐 Secure authentication and authorization
- 💳 Payment processing for mining operations
- 📊 Transaction history and analytics
- 🚛 Hauler and vehicle management
- 🎫 Ticket issuance (Vendor)
- 💰 Wallet management (Vendor)
- 📱 Responsive design
- ⚡ Code splitting for optimal performance
- 🛡️ Error boundaries for graceful error handling

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher) or **yarn**
- **Git**

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd queensec-frontend-react
```

### 2. Install Dependencies

```bash
npm install
```

**Note:** If you encounter issues, you may need to install `prop-types` separately:
```bash
npm install prop-types
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_BASE_URL=http://admin.queensecglobal.com/api
REACT_APP_API_TOKEN=queensec.v2
NODE_ENV=development
```

See [Environment Variables](#environment-variables) for more details.

### 4. Start the Development Server

```bash
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

The following environment variables are required:

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `REACT_APP_API_BASE_URL` | Base URL for the API | Yes | - |
| `REACT_APP_API_TOKEN` | API authentication token | Yes | `queensec.v2` |
| `NODE_ENV` | Environment mode | No | `development` |

**Important:** All React environment variables must be prefixed with `REACT_APP_`

Create a `.env.example` file for reference (see `.env.example` if available).

## 📜 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder. The build is optimized and minified.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run eject`
**⚠️ Warning:** This is a one-way operation. Ejects from Create React App and gives you full control over the build configuration.

## 📁 Project Structure

```
queensec-frontend-react/
├── public/                 # Static files
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable components
│   │   ├── Button/
│   │   ├── InputField/
│   │   ├── LoadingSpinner/
│   │   └── ...
│   ├── context/           # React Context providers
│   │   └── UserContext.jsx
│   ├── pages/             # Page components
│   │   ├── Regular/       # Regular user pages
│   │   ├── Vendor/        # Vendor pages
│   │   ├── Enterprise/    # Enterprise pages
│   │   └── Registration/ # Registration flow
│   ├── utils/             # Utility functions
│   │   ├── apiServce.jsx  # API service
│   │   ├── apiEndpoints.jsx
│   │   └── ProtectedRoute.jsx
│   ├── App.jsx            # Main app component with routes
│   ├── index.jsx          # Entry point
│   └── error.jsx           # Error boundary
├── package.json
└── README.md
```

## 💻 Development

### Code Splitting

The application uses React.lazy() for code splitting, which means:
- Routes are loaded on-demand
- Smaller initial bundle size
- Faster page load times

### Component Structure

Components follow this structure:
- Component file: `ComponentName.jsx`
- Styles: `ComponentName.scss`
- Tests: `ComponentName.test.jsx` (when available)

### Adding New Routes

1. Create the component in the appropriate `pages/` directory
2. Add lazy import in `App.jsx`:
   ```javascript
   const NewComponent = lazy(() => import('./pages/NewComponent.jsx'));
   ```
3. Add route in the Routes component

### API Integration

All API calls should use the centralized API service:
- `src/utils/apiServce.jsx` - Main API service
- `src/utils/apiEndpoints.jsx` - API endpoint definitions

**Example:**
```javascript
import { postData } from '../utils/apiServce';
import { AUTH_ENDPOINTS } from '../utils/apiEndpoints';

const response = await postData(AUTH_ENDPOINTS.login.url, data);
```

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Deployment Checklist

- [ ] Set production environment variables
- [ ] Run `npm run build`
- [ ] Test the production build locally
- [ ] Deploy `build/` folder to hosting service
- [ ] Configure server for client-side routing (see `public/_redirects`)

### Server Configuration

For client-side routing to work, configure your server to:
- Serve `index.html` for all routes
- Support the routes defined in `public/_redirects` (if using Netlify)

## 🐛 Troubleshooting

### Common Issues

#### 1. Module Not Found: prop-types
```bash
npm install prop-types
```

#### 2. Environment Variables Not Loading
- Ensure variables are prefixed with `REACT_APP_`
- Restart the development server after adding variables
- Check that `.env` file is in the root directory

#### 3. Build Fails
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear build cache: `rm -rf build`
- Check for TypeScript errors if using TypeScript

#### 4. Routes Not Working After Deployment
- Ensure server is configured for client-side routing
- Check `public/_redirects` file (for Netlify)
- Verify all routes are properly defined in `App.jsx`

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/)
- [React Router Documentation](https://reactrouter.com/)
- [Create React App Documentation](https://create-react-app.dev/)

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📝 License

[Add your license information here]

## 👥 Team

Queensec Global Development Team

---

**Last Updated:** 2024  
**Version:** 0.1.0
