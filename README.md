# User Management System

A modern, responsive user management system built with React, featuring dark mode support, persistent storage, and a clean UI. This application allows you to manage users with full CRUD (Create, Read, Update, Delete) operations.

## 🌟 Features

### Core Functionality

- Full CRUD operations for user management
- Persistent data storage using localStorage
- Initial data seeding from JSONPlaceholder API
- Form validation using React Hook Form and Zod
- Real-time updates using React Query
- Responsive design for all screen sizes

### UI/UX

- Dark/Light theme toggle with system preference detection
- Smooth animations using Framer Motion
- Toast notifications for user feedback
- Modal dialogs for user operations
- Loading states and error handling
- Hover effects and transitions

### Technical Features

- React Query for server state management
- Form validation using Zod schemas
- Tailwind CSS for styling
- Component-based architecture
- Responsive and accessible design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/shreyansh1410/Ajackus.git
cd Ajackus
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

## 🔧 API Documentation

### Local Storage API

The application uses a localStorage-based API system that mimics RESTful endpoints:

#### `getUsers()`

Retrieves all users from storage.

```javascript
const users = await getUsers();
```

#### `createUser(userData)`

Creates a new user.

```javascript
const newUser = await createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  department: "Engineering",
});
```

#### `updateUser({ id, ...userData })`

Updates an existing user.

```javascript
const updatedUser = await updateUser({
  id: 1,
  firstName: "John",
  lastName: "Smith",
  email: "john@example.com",
  department: "Engineering",
});
```

#### `deleteUser(id)`

Deletes a user by ID.

```javascript
await deleteUser(1);
```

## 🎨 Theming

The application supports light and dark themes with smooth transitions.

### Theme Toggle

- Persists theme choice in localStorage
- Smooth transition animations

### CSS Classes

```css
/* Light theme */
.light {
  /* Default theme */
}

/* Dark theme */
.dark {
  /* Dark mode overrides */
}
```

## 🔒 Form Validation

Form validation is handled using Zod schemas:

```javascript
const userSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  department: z.string().min(1).max(100),
});
```

## 🚦 State Management

### React Query

- Handles server state
- Provides caching
- Manages loading and error states
- Handles data mutations

### Local State

- Uses React useState for UI state
- Theme management
- Modal controls

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query)
- [Framer Motion](https://www.framer.com/motion/)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
