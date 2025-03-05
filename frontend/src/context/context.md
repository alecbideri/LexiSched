# Context documentation

# Context Documentation

## AppContext Documentation

## Overview

`AppContext` provides access to global application data, specifically the `lawyer's` array, across the component tree without prop drilling.

## Usage

### Setting up the Provider

Wrap your application or a section of your application with the `AppContextProvider`:

```jsx
import AppContextProvider from "./path/to/AppContextProvider";

function App() {
  return <AppContextProvider>{/* Your app components */}</AppContextProvider>;
}
```

### Accessing Context Data

In any component nested within the Provider, use the `useContext` hook to access the data:

```jsx
import React, { useContext } from "react";
import { AppContext } from "./path/to/AppContext";

function lawyersList() {
  const { lawyers } = useContext(AppContext);

  return (
    <div>
      <h1>Our lawyers</h1>
      <ul>
        {lawyer.map((lawyer) => (
          <li key={lawyer.id}>{lawyer.name}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Available Data

The context currently provides:

- `lawyers`: An array of lawyer objects imported from `../assets/assets_frontend/assets.js`

## Data Structure

The `lawyers` array contains objects with the following structure (example):

```javascript
{
  id: 1,
  name: "Dr. Smith",
  specialty: "General Physician",
  // other properties...
}
```

## Notes

- The context is designed to be read-only. If you need to modify the data, consider adding state and update functions to the context value.
- For optimal performance, only access the specific data you need from the context.
