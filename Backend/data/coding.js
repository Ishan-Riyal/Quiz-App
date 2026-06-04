const codingQuestions = [
  // ========== JAVASCRIPT FUNDAMENTALS (Questions 1-25) ==========
  {
    category: "Beginner",
    type: "coding",
    title: "Reverse a String",
    description: "Write a function to reverse a string in JavaScript.",
    codeSnippet: "function reverseString(str) {\n  // your code here\n}",
    points: 20,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Check Palindrome",
    description: "Write a function to check if a string is a palindrome.",
    codeSnippet: "function isPalindrome(str) {\n  // your code here\n}",
    points: 20,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Find Largest Number",
    description: "Write a function to find the largest number in an array.",
    codeSnippet: "function findLargest(arr) {\n  // your code here\n}",
    points: 20,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Remove Duplicates from Array",
    description: "Write a function to remove duplicate values from an array.",
    codeSnippet: "function removeDuplicates(arr) {\n  // your code here\n}",
    points: 25,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Count Vowels",
    description: "Write a function to count the number of vowels in a string.",
    codeSnippet: "function countVowels(str) {\n  // your code here\n}",
    points: 20,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Factorial Calculator",
    description: "Write a function to calculate the factorial of a number.",
    codeSnippet: "function factorial(n) {\n  // your code here\n}",
    points: 25,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "FizzBuzz",
    description:
      "Write a function that prints numbers 1 to n. For multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', and for multiples of both print 'FizzBuzz'.",
    codeSnippet: "function fizzBuzz(n) {\n  // your code here\n}",
    points: 30,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Sum of Array Elements",
    description:
      "Write a function to calculate the sum of all elements in an array.",
    codeSnippet: "function sumArray(arr) {\n  // your code here\n}",
    points: 20,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Flatten Nested Array",
    description: "Write a function to flatten a nested array (deep flatten).",
    codeSnippet: "function flattenArray(arr) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Debounce Function",
    description:
      "Implement a debounce function that delays invoking a function until after a specified wait time.",
    codeSnippet: "function debounce(func, delay) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Throttle Function",
    description:
      "Implement a throttle function that ensures a function is called at most once in a specified time period.",
    codeSnippet: "function throttle(func, limit) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Deep Clone Object",
    description: "Write a function to deep clone a JavaScript object.",
    codeSnippet: "function deepClone(obj) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Array Chunk",
    description:
      "Write a function to split an array into chunks of a specified size.",
    codeSnippet: "function chunkArray(arr, size) {\n  // your code here\n}",
    points: 30,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Find Missing Number",
    description:
      "Given an array containing n distinct numbers from 0 to n, find the missing number.",
    codeSnippet: "function findMissingNumber(arr) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Two Sum Problem",
    description:
      "Given an array of integers and a target, return indices of two numbers that add up to the target.",
    codeSnippet: "function twoSum(nums, target) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Merge Two Sorted Arrays",
    description:
      "Write a function to merge two sorted arrays into one sorted array.",
    codeSnippet:
      "function mergeSortedArrays(arr1, arr2) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Implement Promise.all",
    description: "Implement your own version of Promise.all().",
    codeSnippet: "function promiseAll(promises) {\n  // your code here\n}",
    points: 50,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Curry Function",
    description:
      "Implement a curry function that transforms a function with multiple arguments into a sequence of functions.",
    codeSnippet: "function curry(fn) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Memoization",
    description:
      "Implement a memoization function to cache expensive function results.",
    codeSnippet: "function memoize(fn) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Event Emitter",
    description:
      "Implement a basic Event Emitter class with on, off, and emit methods.",
    codeSnippet: "class EventEmitter {\n  // your code here\n}",
    points: 50,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Anagram Checker",
    description:
      "Write a function to check if two strings are anagrams of each other.",
    codeSnippet: "function areAnagrams(str1, str2) {\n  // your code here\n}",
    points: 30,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Group Anagrams",
    description: "Given an array of strings, group anagrams together.",
    codeSnippet: "function groupAnagrams(strs) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "First Non-Repeating Character",
    description: "Find the first non-repeating character in a string.",
    codeSnippet: "function firstNonRepeating(str) {\n  // your code here\n}",
    points: 25,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Longest Substring Without Repeating",
    description:
      "Find the length of the longest substring without repeating characters.",
    codeSnippet:
      "function lengthOfLongestSubstring(s) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Binary Search Implementation",
    description: "Implement binary search algorithm on a sorted array.",
    codeSnippet: "function binarySearch(arr, target) {\n  // your code here\n}",
    points: 40,
  },

  // ========== REACT FUNDAMENTALS (Questions 26-50) ==========
  {
    category: "Beginner",
    type: "coding",
    title: "Simple Counter Component",
    description:
      "Create a React component that displays a counter with increment and decrement buttons.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Counter() {\n  // your code here\n}",
    points: 30,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Todo List Component",
    description:
      "Create a simple todo list component where users can add and delete todos.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction TodoList() {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Conditional Rendering",
    description:
      "Create a component that shows 'Login' button when logged out and 'Logout' when logged in.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction AuthButton() {\n  // your code here\n}",
    points: 25,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Controlled Form Input",
    description:
      "Create a form with controlled inputs (name, email) and display values on submit.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Form() {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "useEffect Data Fetching",
    description:
      "Create a component that fetches user data from an API on mount and displays it.",
    codeSnippet:
      "import React, { useState, useEffect } from 'react';\n\nfunction UserList() {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Search Filter Component",
    description:
      "Create a component that filters a list of items based on search input.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction SearchFilter({ items }) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Pagination Component",
    description:
      "Implement a pagination component that displays items page by page.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Pagination({ items, itemsPerPage }) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Custom useDebounce Hook",
    description: "Create a custom React hook for debouncing values.",
    codeSnippet:
      "import { useState, useEffect } from 'react';\n\nfunction useDebounce(value, delay) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Custom useFetch Hook",
    description: "Create a reusable custom hook for fetching data from APIs.",
    codeSnippet:
      "import { useState, useEffect } from 'react';\n\nfunction useFetch(url) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Modal Component",
    description:
      "Create a reusable modal component that can be opened and closed.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Modal({ children }) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Tabs Component",
    description:
      "Create a tabs component that switches between different content panels.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Tabs({ tabs }) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "useContext Shopping Cart",
    description:
      "Implement a shopping cart using Context API to manage global state.",
    codeSnippet:
      "import React, { createContext, useContext, useState } from 'react';\n\n// your code here",
    points: 50,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Custom useLocalStorage Hook",
    description: "Create a custom hook that syncs state with localStorage.",
    codeSnippet:
      "import { useState, useEffect } from 'react';\n\nfunction useLocalStorage(key, initialValue) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Accordion Component",
    description:
      "Create an accordion component where only one section can be open at a time.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Accordion({ items }) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Star Rating Component",
    description:
      "Create a star rating component (1-5 stars) with hover and click functionality.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction StarRating() {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Infinite Scroll",
    description:
      "Implement infinite scroll that loads more data when user scrolls to bottom.",
    codeSnippet:
      "import React, { useState, useEffect } from 'react';\n\nfunction InfiniteScroll() {\n  // your code here\n}",
    points: 50,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Toggle Switch Component",
    description: "Create a toggle switch component (on/off).",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction ToggleSwitch() {\n  // your code here\n}",
    points: 25,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Dropdown Component",
    description: "Create a custom dropdown component with options.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction Dropdown({ options }) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "useReducer Todo App",
    description: "Implement a todo app using useReducer instead of useState.",
    codeSnippet:
      "import React, { useReducer } from 'react';\n\nfunction TodoApp() {\n  // your code here\n}",
    points: 50,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Image Gallery with Lightbox",
    description:
      "Create an image gallery with lightbox functionality (click to enlarge).",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction ImageGallery({ images }) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Custom useAsync Hook",
    description:
      "Create a custom hook to handle async operations with loading and error states.",
    codeSnippet:
      "import { useState, useEffect } from 'react';\n\nfunction useAsync(asyncFunction) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Dark Mode Toggle",
    description:
      "Implement dark mode toggle with context API and persist in localStorage.",
    codeSnippet:
      "import React, { createContext, useState, useEffect } from 'react';\n\n// your code here",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Auto-save Form",
    description: "Create a form that auto-saves to localStorage as user types.",
    codeSnippet:
      "import React, { useState, useEffect } from 'react';\n\nfunction AutoSaveForm() {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Drag and Drop List",
    description: "Implement a drag-and-drop reorderable list component.",
    codeSnippet:
      "import React, { useState } from 'react';\n\nfunction DragDropList({ items }) {\n  // your code here\n}",
    points: 55,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Timer Component",
    description:
      "Create a countdown timer component with start, pause, and reset buttons.",
    codeSnippet:
      "import React, { useState, useEffect } from 'react';\n\nfunction Timer() {\n  // your code here\n}",
    points: 30,
  },

  // ========== NODE.JS & EXPRESS (Questions 51-70) ==========
  {
    category: "Beginner",
    type: "coding",
    title: "Basic Express Server",
    description:
      "Create a basic Express server that listens on port 3000 and responds with 'Hello World' on GET /.",
    codeSnippet:
      "const express = require('express');\nconst app = express();\n\n// your code here",
    points: 25,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "RESTful Routes Setup",
    description:
      "Set up basic CRUD routes (GET, POST, PUT, DELETE) for a /users endpoint.",
    codeSnippet:
      "const express = require('express');\nconst app = express();\n\n// your code here",
    points: 30,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Middleware Logger",
    description:
      "Create a custom middleware that logs request method, URL, and timestamp.",
    codeSnippet: "function logger(req, res, next) {\n  // your code here\n}",
    points: 30,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Error Handling Middleware",
    description: "Create a global error handling middleware for Express.",
    codeSnippet:
      "function errorHandler(err, req, res, next) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "JWT Authentication Middleware",
    description: "Create middleware to verify JWT tokens for protected routes.",
    codeSnippet:
      "const jwt = require('jsonwebtoken');\n\nfunction authenticateToken(req, res, next) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "File Upload Handler",
    description: "Implement file upload functionality using multer.",
    codeSnippet:
      "const express = require('express');\nconst multer = require('multer');\n\n// your code here",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Rate Limiter Middleware",
    description:
      "Implement a custom rate limiter middleware (e.g., max 100 requests per 15 minutes per IP).",
    codeSnippet: "function rateLimiter(options) {\n  // your code here\n}",
    points: 50,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Request Validation Middleware",
    description: "Create middleware to validate request body using a schema.",
    codeSnippet:
      "function validateRequest(schema) {\n  return (req, res, next) => {\n    // your code here\n  };\n}",
    points: 35,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Query Parameter Handler",
    description:
      "Create a route that handles query parameters for filtering (e.g., /products?category=electronics).",
    codeSnippet:
      "app.get('/products', (req, res) => {\n  // your code here\n});",
    points: 25,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Pagination Helper",
    description:
      "Create a utility function for pagination logic (page, limit, skip).",
    codeSnippet: "function getPaginationParams(req) {\n  // your code here\n}",
    points: 30,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "API Response Formatter",
    description:
      "Create a middleware to format all API responses consistently.",
    codeSnippet:
      "function responseFormatter(req, res, next) {\n  res.success = (data, message) => {\n    // your code here\n  };\n  next();\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "CORS Configuration",
    description: "Configure CORS middleware with specific origins and methods.",
    codeSnippet: "const cors = require('cors');\n\n// your code here",
    points: 30,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Environment Variables Setup",
    description:
      "Set up environment variables using dotenv for database URL and JWT secret.",
    codeSnippet: "require('dotenv').config();\n\n// your code here",
    points: 20,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Password Hashing",
    description:
      "Implement password hashing using bcrypt before saving to database.",
    codeSnippet:
      "const bcrypt = require('bcrypt');\n\nasync function hashPassword(password) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "JWT Token Generation",
    description: "Create functions to generate and verify JWT tokens.",
    codeSnippet:
      "const jwt = require('jsonwebtoken');\n\nfunction generateToken(payload) {\n  // your code here\n}\n\nfunction verifyToken(token) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Async Error Wrapper",
    description:
      "Create a wrapper function to handle async errors in Express routes.",
    codeSnippet:
      "function asyncHandler(fn) {\n  return (req, res, next) => {\n    // your code here\n  };\n}",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Cookie Parser Implementation",
    description:
      "Set up cookie-parser and create routes to set and get cookies.",
    codeSnippet:
      "const cookieParser = require('cookie-parser');\n\n// your code here",
    points: 30,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Custom Logger with Winston",
    description:
      "Set up Winston logger with different log levels and file transports.",
    codeSnippet: "const winston = require('winston');\n\n// your code here",
    points: 45,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Input Sanitization",
    description:
      "Create middleware to sanitize user inputs to prevent XSS attacks.",
    codeSnippet:
      "function sanitizeInput(req, res, next) {\n  // your code here\n}",
    points: 40,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "Static File Serving",
    description:
      "Configure Express to serve static files from a 'public' directory.",
    codeSnippet:
      "const express = require('express');\nconst app = express();\n\n// your code here",
    points: 20,
  },

  // ========== MONGODB & MONGOOSE (Questions 71-85) ==========
  {
    category: "Beginner",
    type: "coding",
    title: "MongoDB Connection",
    description: "Create a function to connect to MongoDB using Mongoose.",
    codeSnippet:
      "const mongoose = require('mongoose');\n\nasync function connectDB() {\n  // your code here\n}",
    points: 25,
  },
  {
    category: "Beginner",
    type: "coding",
    title: "User Schema",
    description:
      "Create a Mongoose schema for User with name, email, and password fields.",
    codeSnippet:
      "const mongoose = require('mongoose');\n\nconst userSchema = new mongoose.Schema({\n  // your code here\n});",
    points: 30,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Schema with Validation",
    description:
      "Create a Product schema with validation (required fields, min/max values).",
    codeSnippet:
      "const mongoose = require('mongoose');\n\nconst productSchema = new mongoose.Schema({\n  // your code here\n});",
    points: 35,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "CRUD Operations",
    description:
      "Implement basic CRUD operations (Create, Read, Update, Delete) for a User model.",
    codeSnippet: "const User = require('./models/User');\n\n// your code here",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Find with Query",
    description:
      "Write a function to find users by age range and sort by name.",
    codeSnippet:
      "async function findUsersByAgeRange(minAge, maxAge) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Population in Mongoose",
    description:
      "Create two related schemas (User and Post) and populate posts with user data.",
    codeSnippet: "const mongoose = require('mongoose');\n\n// your code here",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Mongoose Aggregation",
    description: "Use aggregation pipeline to get total sales by category.",
    codeSnippet:
      "async function getSalesByCategory() {\n  // your code here\n}",
    points: 50,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Pre-save Middleware",
    description: "Create a pre-save hook to hash password before saving user.",
    codeSnippet:
      "userSchema.pre('save', async function(next) {\n  // your code here\n});",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Virtual Properties",
    description:
      "Add a virtual property 'fullName' that combines firstName and lastName.",
    codeSnippet:
      "userSchema.virtual('fullName').get(function() {\n  // your code here\n});",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Indexing for Performance",
    description:
      "Add appropriate indexes to a schema for better query performance.",
    codeSnippet:
      "const userSchema = new mongoose.Schema({\n  // your code here\n});\n\n// Add indexes",
    points: 40,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Pagination in MongoDB",
    description:
      "Implement pagination using skip and limit in Mongoose queries.",
    codeSnippet:
      "async function getPaginatedUsers(page, limit) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Text Search",
    description:
      "Implement text search functionality using MongoDB text indexes.",
    codeSnippet:
      "// Create text index\n// Implement search function\n\nasync function searchProducts(query) {\n  // your code here\n}",
    points: 45,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Update with Operators",
    description:
      "Use MongoDB update operators ($set, $inc, $push) to update a document.",
    codeSnippet:
      "async function updateUser(userId, updates) {\n  // your code here\n}",
    points: 35,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Transaction Handling",
    description:
      "Implement a transaction to transfer points between two users atomically.",
    codeSnippet:
      "async function transferPoints(fromUserId, toUserId, points) {\n  // your code here\n}",
    points: 55,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Soft Delete Implementation",
    description:
      "Implement soft delete functionality (mark as deleted instead of removing).",
    codeSnippet:
      "const schema = new mongoose.Schema({\n  // your code here\n});\n\n// Add methods",
    points: 40,
  },

  // ========== FULL STACK INTEGRATION (Questions 86-100) ==========
  {
    category: "Advanced",
    type: "coding",
    title: "User Registration API",
    description:
      "Create a complete user registration endpoint with validation and password hashing.",
    codeSnippet:
      "app.post('`${API_BASE}/api/register', async (req, res) => {\n  // your code here\n});",
    points: 50,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "User Login API",
    description:
      "Create a login endpoint that validates credentials and returns JWT token.",
    codeSnippet:
      "app.post('`${API_BASE}/api/login', async (req, res) => {\n  // your code here\n});",
    points: 50,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Protected Route",
    description:
      "Create a protected route that requires authentication to access user profile.",
    codeSnippet:
      "app.get('`${API_BASE}/api/profile', authenticateToken, async (req, res) => {\n  // your code here\n});",
    points: 45,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Search API with Filters",
    description:
      "Create an API endpoint that supports search and multiple filters.",
    codeSnippet:
      "app.get('`${API_BASE}/api/products/search', async (req, res) => {\n  // your code here\n});",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "File Upload API",
    description:
      "Create an API to upload images and save file path to database.",
    codeSnippet:
      "const upload = multer({ dest: 'uploads/' });\n\napp.post('`${API_BASE}/api/upload', upload.single('image'), async (req, res) => {\n  // your code here\n});",
    points: 50,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Shopping Cart API",
    description:
      "Implement add to cart, remove from cart, and get cart endpoints.",
    codeSnippet: "// Cart Schema and routes\n\n// your code here",
    points: 55,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Order Processing",
    description:
      "Create an order processing endpoint that handles payment and updates inventory.",
    codeSnippet:
      "app.post('`${API_BASE}/api/orders', authenticateToken, async (req, res) => {\n  // your code here\n});",
    points: 60,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Email Verification",
    description:
      "Implement email verification flow with token generation and verification.",
    codeSnippet:
      "// Generate verification token\n// Send email\n// Verify endpoint\n\n// your code here",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Password Reset Flow",
    description:
      "Implement complete password reset flow (request, send email, reset).",
    codeSnippet:
      "// Request reset\napp.post('`${API_BASE}/api/forgot-password', async (req, res) => {\n  // your code here\n});\n\n// Reset password\napp.post('`${API_BASE}/api/reset-password', async (req, res) => {\n  // your code here\n});",
    points: 55,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Role-Based Access Control",
    description: "Implement RBAC middleware for admin-only routes.",
    codeSnippet:
      "function authorize(...roles) {\n  return (req, res, next) => {\n    // your code here\n  };\n}",
    points: 50,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Like/Unlike Post API",
    description:
      "Create endpoints to like and unlike a post with proper user tracking.",
    codeSnippet:
      "app.post('`${API_BASE}/api/posts/:id/like', authenticateToken, async (req, res) => {\n  // your code here\n});",
    points: 40,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Comment System",
    description:
      "Implement nested comments system (add comment, reply to comment, delete).",
    codeSnippet: "// Comment schema with nested replies\n\n// your code here",
    points: 55,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Real-time Notifications",
    description:
      "Implement a notification system that sends real-time updates to users.",
    codeSnippet: "// Notification schema and routes\n\n// your code here",
    points: 60,
  },
  {
    category: "Intermediate",
    type: "coding",
    title: "Follow/Unfollow System",
    description: "Create follow/unfollow functionality for users.",
    codeSnippet:
      "app.post('`${API_BASE}/api/users/:id/follow', authenticateToken, async (req, res) => {\n  // your code here\n});",
    points: 45,
  },
  {
    category: "Advanced",
    type: "coding",
    title: "Activity Feed",
    description:
      "Create an activity feed that shows posts from followed users in chronological order.",
    codeSnippet:
      "app.get('`${API_BASE}/api/feed', authenticateToken, async (req, res) => {\n  // your code here\n});",
    points: 55,
  },
];

export default codingQuestions;
