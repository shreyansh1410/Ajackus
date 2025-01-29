import axios from "axios";

// Helper functions for localStorage
const getStoredUsers = () => {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : [];
};

const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

// Initialize localStorage with data from JSONPlaceholder if empty
const initializeUsers = async () => {
  if (!localStorage.getItem("users")) {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      saveUsers(response.data);
    } catch (error) {
      console.error("Failed to initialize users:", error);
      saveUsers([]); // Initialize with empty array if fetch fails
    }
  }
};

// Initialize on import
initializeUsers();

// API functions
export const getUsers = async () => {
  await initializeUsers(); // Ensure we have initial data
  return getStoredUsers();
};

export const getUser = async (id) => {
  const users = getStoredUsers();
  const user = users.find((u) => u.id === id);
  if (!user) throw new Error("User not found");
  return user;
};

export const createUser = async (userData) => {
  const users = getStoredUsers();
  const newUser = {
    id: Math.max(0, ...users.map((u) => u.id)) + 1, // Generate new ID
    ...userData,
  };
  users.push(newUser);
  saveUsers(users);
  return newUser;
};

export const updateUser = async ({ id, ...userData }) => {
  const users = getStoredUsers();
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("User not found");

  users[index] = { id, ...userData };
  saveUsers(users);
  return users[index];
};

export const deleteUser = async (id) => {
  const users = getStoredUsers();
  const filteredUsers = users.filter((u) => u.id !== id);
  if (filteredUsers.length === users.length) {
    throw new Error("User not found");
  }
  saveUsers(filteredUsers);
  return id;
};
