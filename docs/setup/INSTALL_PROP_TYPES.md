# Install prop-types Package

## ⚠️ Required Action

The Button and InputField components now use PropTypes for type checking. You need to install the `prop-types` package.

## Installation

Run this command in your project root:

```bash
npm install prop-types
```

## Why?

PropTypes is not included by default in React 18+. It's a separate package that provides runtime type checking for React component props.

## What Happens If Not Installed?

- Components will still work
- PropTypes validation will be skipped
- You'll see a warning in the console about missing prop-types
- Type checking benefits will be lost

## Verification

After installation, verify it's in your `package.json`:

```json
{
  "dependencies": {
    "prop-types": "^15.x.x"
  }
}
```

Then restart your development server:

```bash
npm start
```

---

**Note:** This is a development dependency that helps catch bugs early. It's removed in production builds.



