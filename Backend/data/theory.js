const theoryQuestions = [
  {
    category: "Beginner",
    type: "theory",
    title: "What is JavaScript?",
    answer:
      "JavaScript is a high-level, interpreted programming language used to create interactive and dynamic web content. It's primarily used for client-side scripting but can also run on servers (Node.js).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are the different data types in JavaScript?",
    answer:
      "Primitive types: String, Number, Boolean, Undefined, Null, Symbol, BigInt. Non-primitive: Object (including Arrays, Functions, and Dates).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be re-declared; let is block-scoped and can be reassigned but not re-declared; const is block-scoped and cannot be reassigned or re-declared.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is hoisting in JavaScript?",
    answer:
      "Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compilation. Variables declared with var are hoisted and initialized with undefined; let and const are hoisted but not initialized (temporal dead zone).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between == and ===?",
    answer:
      "== (loose equality) compares values after type coercion, while === (strict equality) compares both value and type without coercion.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are closures in JavaScript?",
    answer:
      "A closure is a function that has access to variables in its outer (enclosing) function's scope, even after the outer function has returned. Closures are created every time a function is created.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between null and undefined?",
    answer:
      "undefined means a variable has been declared but not assigned a value, while null is an assignment value representing 'no value' or 'empty'. undefined is a type itself; null is an object type.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are arrow functions?",
    answer:
      "Arrow functions are a concise syntax for writing functions using the => syntax. They don't have their own 'this' binding and cannot be used as constructors.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the 'this' keyword in JavaScript?",
    answer:
      "'this' refers to the object that is executing the current function. Its value depends on how the function is called: in methods it's the object, in regular functions it's the global object (or undefined in strict mode), and in arrow functions it's inherited from the parent scope.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title:
      "What is the difference between function declaration and function expression?",
    answer:
      "Function declarations are hoisted and can be called before they're defined. Function expressions (including arrow functions) are not hoisted and must be defined before use.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is event bubbling and capturing?",
    answer:
      "Event bubbling is when an event propagates from the target element up through its ancestors. Event capturing is the opposite, propagating from the root down to the target. You can control this with addEventListener's third parameter.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the spread operator?",
    answer:
      "The spread operator (...) expands an iterable (array, string, object) into individual elements. It's used for copying arrays/objects, merging them, and passing array elements as function arguments.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is destructuring in JavaScript?",
    answer:
      "Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables, making code more concise and readable.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are template literals?",
    answer:
      "Template literals are string literals enclosed by backticks (`) that allow embedded expressions using ${expression} and multi-line strings without escape characters.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between map() and forEach()?",
    answer:
      "map() creates and returns a new array with transformed elements, while forEach() executes a function for each element but returns undefined. Use map() when you need a new array; forEach() for side effects.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are callbacks in JavaScript?",
    answer:
      "A callback is a function passed as an argument to another function, to be executed later. They're commonly used for asynchronous operations.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is a Promise?",
    answer:
      "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between synchronous and asynchronous code?",
    answer:
      "Synchronous code executes line by line, blocking subsequent code until completion. Asynchronous code doesn't block; it allows other code to run while waiting for operations to complete.",
  },
  {
    category: "Advanced",
    type: "theory",
    title: "What is the event loop?",
    answer:
      "The event loop continuously monitors the call stack and callback queue. When the stack is empty, it moves callbacks from the queue to the stack for execution, enabling asynchronous programming.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are higher-order functions?",
    answer:
      "Higher-order functions are functions that take other functions as arguments or return functions as results. Examples include map(), filter(), reduce().",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the filter() method?",
    answer:
      "filter() creates a new array with elements that pass a test implemented by a provided function. It doesn't modify the original array.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the reduce() method?",
    answer:
      "reduce() executes a reducer function on each array element, resulting in a single output value. It's used for accumulating values, summing arrays, flattening arrays, etc.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between slice() and splice()?",
    answer:
      "slice() returns a shallow copy of a portion of an array without modifying the original. splice() changes the original array by removing, replacing, or adding elements.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between call(), apply(), and bind()?",
    answer:
      "All three set the 'this' value for a function. call() invokes the function with arguments passed individually; apply() takes arguments as an array; bind() returns a new function with 'this' bound, without invoking it.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the typeof operator?",
    answer:
      "typeof is a unary operator that returns a string indicating the type of a variable or expression. Example: typeof 42 returns 'number'.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are truthy and falsy values?",
    answer:
      "Falsy values are: false, 0, '', null, undefined, NaN. Everything else is truthy. They're important in conditional statements and logical operations.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the ternary operator?",
    answer:
      "The ternary operator is a concise way to write if-else statements: condition ? expressionIfTrue : expressionIfFalse.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is JSON?",
    answer:
      "JSON (JavaScript Object Notation) is a lightweight data-interchange format. JSON.stringify() converts JavaScript objects to JSON strings; JSON.parse() converts JSON strings to JavaScript objects.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between shallow copy and deep copy?",
    answer:
      "Shallow copy copies the reference to nested objects, so changes affect the original. Deep copy creates completely independent copies of all nested objects.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are immediately invoked function expressions (IIFE)?",
    answer:
      "An IIFE is a function that runs as soon as it's defined, written as (function() { })() or (() => {})(). It's used to create private scopes and avoid polluting the global namespace.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are default parameters in JavaScript?",
    answer:
      "Default parameters allow function parameters to have default values if no value or undefined is passed. Example: function greet(name = 'Guest') { return `Hello ${name}`; }",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the rest parameter in JavaScript?",
    answer:
      "The rest parameter (...args) allows a function to accept an indefinite number of arguments as an array. Example: function sum(...numbers) { return numbers.reduce((a, b) => a + b); }",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is array destructuring?",
    answer:
      "Array destructuring extracts values from arrays into variables. Example: const [first, second] = [1, 2, 3]; // first = 1, second = 2",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is object destructuring?",
    answer:
      "Object destructuring extracts properties from objects into variables. Example: const {name, age} = {name: 'John', age: 25}; // name = 'John', age = 25",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between for...in and for...of?",
    answer:
      "for...in iterates over enumerable property names (keys) of an object. for...of iterates over iterable values (like array elements, strings).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are ES6 classes?",
    answer:
      "ES6 classes are syntactic sugar over JavaScript's prototype-based inheritance. They provide a cleaner syntax for creating objects and handling inheritance using class, constructor, extends, and super keywords.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the find() method?",
    answer:
      "find() returns the first element in an array that satisfies the provided testing function. If no element is found, it returns undefined.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the includes() method?",
    answer:
      "includes() determines whether an array or string includes a certain value, returning true or false. Example: [1, 2, 3].includes(2) returns true.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is optional chaining (?.) in JavaScript?",
    answer:
      "Optional chaining allows reading property values deep within a chain of connected objects without having to check if each reference is valid. Example: user?.address?.city returns undefined if user or address is null/undefined.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is nullish coalescing (??) operator?",
    answer:
      "The nullish coalescing operator returns the right operand when the left operand is null or undefined, otherwise returns the left operand. Example: const value = null ?? 'default'; // 'default'",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is setTimeout()?",
    answer:
      "setTimeout() executes a function after a specified delay in milliseconds. It returns a timeout ID that can be used with clearTimeout() to cancel the execution.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is setInterval()?",
    answer:
      "setInterval() repeatedly executes a function at specified intervals (in milliseconds) until cleared with clearInterval(). It returns an interval ID.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "How do you handle errors in Promises?",
    answer:
      "Errors in Promises are handled using .catch() method or the second argument of .then(). Example: promise.then(success).catch(error) or promise.then(success, error).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is Promise.all()?",
    answer:
      "Promise.all() takes an array of promises and returns a single promise that resolves when all promises resolve, or rejects when any promise rejects. It's useful for running multiple async operations in parallel.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is Promise.race()?",
    answer:
      "Promise.race() takes an array of promises and returns a promise that resolves or rejects as soon as one of the promises resolves or rejects, with that value or reason.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "How do you handle errors in async/await?",
    answer:
      "Errors in async/await are handled using try-catch blocks. Example: try { const data = await fetchData(); } catch(error) { console.error(error); }",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the finally() method in Promises?",
    answer:
      "finally() executes code after a promise is settled (either resolved or rejected), regardless of the outcome. It's useful for cleanup operations like hiding loading spinners.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "Can you use await without async?",
    answer:
      "No, the await keyword can only be used inside an async function. Using it outside will result in a syntax error. However, top-level await is supported in modules in modern JavaScript.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is MongoDB?",
    answer:
      "MongoDB is a NoSQL, document-oriented database that stores data in flexible, JSON-like documents called BSON. It provides high performance, high availability, and easy scalability.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between SQL and NoSQL databases?",
    answer:
      "SQL databases are relational with structured schemas, using tables and rows. NoSQL databases like MongoDB are non-relational with flexible schemas, storing data in documents/key-value pairs, better for unstructured data.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a document in MongoDB?",
    answer:
      "A document is a basic unit of data in MongoDB, stored in BSON format with key-value pairs, allowing nested structures and arrays.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a collection in MongoDB?",
    answer:
      "A collection is a group of MongoDB documents, similar to a table in relational databases. Collections don't enforce schemas.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the _id field in MongoDB?",
    answer:
      "The _id field is a unique identifier automatically created for every document. If not provided, MongoDB generates an ObjectId.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is an ObjectId?",
    answer:
      "ObjectId is a 12-byte identifier consisting of timestamp, machine identifier, process ID, and counter. It's the default type for _id fields.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between find() and findOne()?",
    answer:
      "find() returns a cursor to all matching documents; findOne() returns only the first matching document.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are indexes in MongoDB?",
    answer:
      "Indexes improve query performance by creating data structures that allow faster searches. MongoDB creates an index on _id by default.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is aggregation in MongoDB?",
    answer:
      "Aggregation operations process data and return computed results through an aggregation pipeline with stages like $match, $group, $sort.",
  },
  {
    category: "Advanced",
    type: "theory",
    title: "What is sharding in MongoDB?",
    answer:
      "Sharding distributes data across multiple machines for horizontal scaling, partitioning data based on a shard key.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is replication in MongoDB?",
    answer:
      "Replication synchronizes data across multiple servers using replica sets for redundancy and high availability.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between embedding and referencing?",
    answer:
      "Embedding stores related data within the same document (denormalization); referencing stores relationships using document IDs (normalization).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is upsert in MongoDB?",
    answer:
      "Upsert creates a new document if no match is found, or updates the existing document if a match exists.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the maximum document size in MongoDB?",
    answer: "16 megabytes.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the $set operator?",
    answer:
      "$set replaces a field's value with the specified value, creating the field if it doesn't exist.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the $push operator?",
    answer:
      "$push appends a value to an array field, creating the array if it doesn't exist.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between updateOne() and updateMany()?",
    answer:
      "updateOne() updates only the first matching document; updateMany() updates all matching documents.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between deleteOne() and deleteMany()?",
    answer:
      "deleteOne() removes the first matching document; deleteMany() removes all matching documents.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the explain() method used for?",
    answer:
      "explain() provides query execution information including indexes used, execution time, and documents examined, useful for optimization.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a cursor in MongoDB?",
    answer:
      "A cursor is a pointer to the result set of a query. It allows iteration through query results efficiently.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is Mongoose?",
    answer:
      "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It provides schema validation, type casting, query building, and business logic hooks.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "Why use Mongoose over native MongoDB driver?",
    answer:
      "Mongoose provides schema validation, middleware (hooks), built-in type casting, query builders, virtual properties, and a more intuitive API for working with MongoDB.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a Schema in Mongoose?",
    answer:
      "A Schema defines the structure of documents within a collection, including field types, default values, validators, and indexes.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a Model in Mongoose?",
    answer:
      "A Model is a constructor compiled from a Schema. It represents a collection and provides methods for CRUD operations on documents.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you create a Schema in Mongoose?",
    answer:
      "const userSchema = new mongoose.Schema({ name: { type: String, required: true }, email: { type: String, unique: true }, age: Number });",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you create a Model from a Schema?",
    answer: "const User = mongoose.model('User', userSchema);",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are Schema types in Mongoose?",
    answer:
      "String, Number, Date, Buffer, Boolean, Mixed, ObjectId, Array, Decimal128, Map, Schema.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between save() and create() in Mongoose?",
    answer:
      "save() is called on a document instance to save it; create() is called on a Model and can create one or multiple documents, returning a Promise.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are Mongoose validators?",
    answer:
      "Validators are built-in or custom functions that validate data before saving. Built-in validators include required, min, max, enum, match, minlength, maxlength.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the required validator?",
    answer:
      "The required validator ensures a field must have a value before the document can be saved.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are custom validators in Mongoose?",
    answer:
      "Custom validators are functions you define to validate fields based on custom logic: age: { type: Number, validate: { validator: function(v) { return v >= 18; }, message: 'Must be 18 or older' } }",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are Mongoose middleware (hooks)?",
    answer:
      "Middleware are functions that execute at specific stages of a document's lifecycle: pre and post hooks for operations like save, validate, remove, updateOne, etc.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between pre and post middleware?",
    answer:
      "pre middleware executes before an operation (e.g., before saving); post middleware executes after an operation completes.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are virtual properties in Mongoose?",
    answer:
      "Virtuals are document properties that aren't stored in MongoDB but are computed from other properties. They're defined on schemas using the virtual() method.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is population in Mongoose?",
    answer:
      "Population automatically replaces specified paths in a document with documents from other collections, similar to SQL joins.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you use populate()?",
    answer:
      "const post = await Post.findById(id).populate('author'); // Replaces author ObjectId with actual user document",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between findById() and findOne()?",
    answer:
      "findById(id) is shorthand for findOne({ _id: id }). Both return a single document, but findById is more concise for ID lookups.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between find() and where()?",
    answer:
      "find() executes the query immediately; where() is a query builder that chains conditions and executes with exec().",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the exec() method in Mongoose?",
    answer:
      "exec() executes a query and returns a Promise. It's used when building queries with chaining.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are Mongoose statics?",
    answer:
      "Statics are custom methods defined on the Model itself (not instances). They're useful for custom query methods: userSchema.statics.findByEmail = function(email) { return this.findOne({ email }); };",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are Mongoose methods (instance methods)?",
    answer:
      "Methods are custom functions defined on document instances: userSchema.methods.getFullName = function() { return this.firstName + ' ' + this.lastName; };",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the lean() method?",
    answer:
      "lean() returns plain JavaScript objects instead of Mongoose documents, improving performance when you don't need Mongoose features like save() or virtuals.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the select() method?",
    answer:
      "select() specifies which fields to include or exclude from query results: User.find().select('name email -_id');",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is mongoose.connect() used for?",
    answer:
      "mongoose.connect() establishes a connection to a MongoDB database using a connection string.",
  },
  {
    category: "Advanced",
    type: "theory",
    title: "What are discriminators in Mongoose?",
    answer:
      "Discriminators allow storing different types of documents in the same collection while sharing a common schema base, useful for inheritance patterns.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is Express.js?",
    answer:
      "Express.js is a minimal, flexible Node.js web application framework providing robust features for web and mobile applications with a simple API.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is middleware in Express.js?",
    answer:
      "Middleware functions have access to request (req), response (res), and next() function, executing code, modifying req/res, ending the cycle, or calling next middleware.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are the types of middleware?",
    answer:
      "Application-level, Router-level, Error-handling, Built-in (express.json(), express.static()), and Third-party (cors, morgan).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the next() function?",
    answer:
      "next() passes control to the next middleware function. Without calling it, the request hangs.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is routing in Express?",
    answer:
      "Routing defines how an application responds to client requests at specific endpoints (URIs) using methods like app.get(), app.post(), etc.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between app.use() and app.get()?",
    answer:
      "app.use() mounts middleware for all HTTP methods; app.get() specifically handles GET requests.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the req object?",
    answer:
      "The request object contains request data: query strings, parameters, body, headers, etc.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the res object?",
    answer:
      "The response object sends HTTP responses using methods like res.send(), res.json(), res.status().",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between res.send() and res.json()?",
    answer:
      "res.send() sends various response types; res.json() specifically sends JSON and sets Content-Type to application/json.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is express.Router()?",
    answer:
      "express.Router() creates modular route handlers, useful for organizing routes and creating mini-applications.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is CORS?",
    answer:
      "CORS (Cross-Origin Resource Sharing) is a security mechanism controlling cross-domain requests. Enable with the cors middleware.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is express.static()?",
    answer:
      "express.static() serves static files (images, CSS, JavaScript) from a specified directory.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are route parameters?",
    answer:
      "Route parameters are named URL segments capturing values at specific positions, defined with colons like /users/:id, accessed via req.params.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between route and query parameters?",
    answer:
      "Route parameters are in the URL path (/users/:id via req.params); query parameters follow ? (/users?age=25 via req.query).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "How do you handle errors in Express?",
    answer:
      "Error-handling middleware has four arguments (err, req, res, next) and is defined after all other middleware.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is app.listen()?",
    answer:
      "app.listen() starts the server and listens for connections on a specified port.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is body-parser?",
    answer:
      "body-parser parses incoming request bodies. In Express 4.16+, use built-in express.json() and express.urlencoded().",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the morgan middleware?",
    answer:
      "Morgan logs HTTP requests (method, URL, status, response time) for debugging and monitoring.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is helmet middleware?",
    answer:
      "Helmet secures Express apps by setting security-related HTTP headers.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the dotenv package?",
    answer:
      "dotenv loads environment variables from a .env file into process.env for managing configuration and sensitive data.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is app.all()?",
    answer:
      "app.all() handles all HTTP methods for a specific route, useful for applying middleware to all request types.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you handle 404 errors?",
    answer:
      "Define a catch-all route handler at the end: app.use((req, res) => { res.status(404).send('Not Found'); }).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the cookie-parser middleware?",
    answer:
      "cookie-parser parses Cookie header and populates req.cookies with cookie data.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is express-validator?",
    answer:
      "express-validator provides validation and sanitization middleware for request data.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between app.route() and express.Router()?",
    answer:
      "app.route() creates chainable route handlers for a single path; express.Router() creates modular, mountable route handlers.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is React?",
    answer:
      "React is a JavaScript library for building user interfaces using component-based architecture and efficient virtual DOM rendering.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is JSX?",
    answer:
      "JSX is a syntax extension allowing HTML-like code in JavaScript, transpiled to React.createElement() calls.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the Virtual DOM?",
    answer:
      "A lightweight copy of the actual DOM. React uses it to calculate minimal changes needed for efficient DOM updates.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between state and props?",
    answer:
      "State is internal, mutable component data triggering re-renders. Props are external, read-only data passed from parent components.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are React components?",
    answer:
      "Independent, reusable UI pieces, either functional (JavaScript functions) or class components (ES6 classes).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are React Hooks?",
    answer:
      "Functions enabling state and lifecycle features in functional components: useState, useEffect, useContext, useRef, useMemo, useCallback.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is useState Hook?",
    answer:
      "useState adds state to functional components, returning current state and an updater function.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is useEffect Hook?",
    answer:
      "useEffect performs side effects (data fetching, subscriptions, DOM manipulation) after render, with optional cleanup.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the dependency array in useEffect?",
    answer:
      "Controls when useEffect runs: empty array (once on mount), no array (every render), specific dependencies (when they change).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is props drilling?",
    answer:
      "Passing props through multiple component levels to reach deeply nested components, making code harder to maintain.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the Context API?",
    answer:
      "Provides a way to share values across components without prop drilling, useful for global data like themes or authentication.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is useContext Hook?",
    answer:
      "useContext consumes context values in functional components without Context.Consumer.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the key prop?",
    answer:
      "A special attribute for list elements helping React identify changed, added, or removed items for efficient rendering.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are controlled components?",
    answer:
      "Form elements whose values are controlled by React state, making state the single source of truth.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are uncontrolled components?",
    answer:
      "Form elements storing their own state in the DOM, accessed via refs instead of state.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is useRef Hook?",
    answer:
      "Returns a mutable ref object persisting across renders, used for DOM access or storing values without triggering re-renders.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between useRef and useState?",
    answer:
      "useState triggers re-renders on change; useRef doesn't. useRef is for non-rendering values.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are React lifecycle methods?",
    answer:
      "Special class component methods running at specific lifecycle points: componentDidMount, componentDidUpdate, componentWillUnmount.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is componentDidMount?",
    answer:
      "Runs once after component mounts, commonly used for API calls and subscriptions.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is React Router?",
    answer:
      "A library for handling routing in React applications, enabling navigation without page reloads.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between Link and anchor tags?",
    answer:
      "Link uses client-side routing without page reloads; anchor tags cause full page reloads.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is useMemo Hook?",
    answer:
      "Memoizes expensive computations, recalculating only when dependencies change, improving performance.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is useCallback Hook?",
    answer:
      "Memoizes callback functions, returning the same function instance unless dependencies change, preventing unnecessary child re-renders.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between useMemo and useCallback?",
    answer:
      "useMemo memoizes values; useCallback memoizes functions. useCallback is equivalent to useMemo(() => fn, deps).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is React.Fragment?",
    answer:
      "A component that groups children without adding extra DOM nodes. Shorthand: <></>.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is Node.js?",
    answer:
      "A JavaScript runtime built on Chrome's V8 engine, enabling server-side JavaScript with event-driven, non-blocking I/O.",
  },
  {
    category: "Advanced",
    type: "theory",
    title: "What is the event loop in Node.js?",
    answer:
      "Continuously checks the call stack and callback queue, executing callbacks when the stack is empty, enabling non-blocking operations.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is npm?",
    answer:
      "Node Package Manager for installing, managing, and sharing JavaScript packages.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is package.json?",
    answer:
      "Contains project metadata: name, version, dependencies, scripts, author, license.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between dependencies and devDependencies?",
    answer:
      "dependencies are required in production; devDependencies are only for development (testing, building).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is module.exports?",
    answer:
      "Exports functions, objects, or values from a module for use in other files via require().",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between require() and import?",
    answer:
      "require() is CommonJS (synchronous); import is ES6 (asynchronous, requires transpilation in older Node).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is callback hell?",
    answer:
      "Multiple nested callbacks making code hard to read, typically from asynchronous operations.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are Promises?",
    answer:
      "Objects representing eventual completion/failure of async operations with .then() and .catch().",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is async/await?",
    answer:
      "Syntactic sugar over Promises making async code look synchronous; async functions return Promises.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the fs module?",
    answer:
      "Provides methods for file system operations: reading, writing, deleting, renaming files.",
  },
  {
    category: "Beginner",
    type: "theory",
    title:
      "What is the difference between fs.readFile() and fs.readFileSync()?",
    answer:
      "fs.readFile() is asynchronous and non-blocking; fs.readFileSync() is synchronous and blocking.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the http module?",
    answer:
      "Creates HTTP servers and makes HTTP requests, foundational for web servers.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the path module?",
    answer:
      "Utilities for file/directory paths: path.join(), path.resolve(), path.basename().",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What are streams in Node.js?",
    answer:
      "Objects for reading/writing data in chunks: Readable, Writable, Duplex, Transform streams.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the buffer class?",
    answer:
      "Handles binary data directly, useful for streams, file systems, or network protocols.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is middleware in Node.js?",
    answer:
      "Functions with access to request/response objects that execute code, modify objects, end cycles, or call next middleware.",
  },
  {
    category: "Advanced",
    type: "theory",
    title: "What is the cluster module?",
    answer:
      "Creates child processes (workers) sharing server ports, enabling load balancing across CPU cores.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is nodemon?",
    answer:
      "Development tool that auto-restarts Node applications on file changes.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between exports and module.exports?",
    answer:
      "exports references module.exports. Add properties to exports, but reassignments require module.exports.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is __dirname and __filename?",
    answer:
      "__dirname is the absolute path to the current directory; __filename is the absolute path to the current file.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the os module?",
    answer:
      "Provides OS-related utilities: os.platform(), os.cpus(), os.freemem(), os.hostname().",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is process.env?",
    answer:
      "An object containing environment variables, used for configuration and sensitive data.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between spawn() and exec()?",
    answer:
      "spawn() launches processes returning streams (better for large output); exec() buffers output in callbacks (better for small output).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the EventEmitter class?",
    answer:
      "A class for handling events in Node.js. Objects can emit named events that cause listeners (callbacks) to be called.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a REST API?",
    answer:
      "REST (Representational State Transfer) is an architectural style for designing networked applications. A REST API uses HTTP requests to perform CRUD operations on resources, following REST principles.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are the main HTTP methods used in REST APIs?",
    answer:
      "GET (retrieve data), POST (create new data), PUT (update/replace data), PATCH (partially update data), DELETE (remove data).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between PUT and PATCH?",
    answer:
      "PUT replaces the entire resource with new data, while PATCH partially updates specific fields of a resource.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are HTTP status codes?",
    answer:
      "Numeric codes indicating the result of an HTTP request. Common ones: 200 (OK), 201 (Created), 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden), 404 (Not Found), 500 (Internal Server Error).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What does a 404 status code mean?",
    answer:
      "404 Not Found indicates that the requested resource could not be found on the server.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What does a 500 status code mean?",
    answer:
      "500 Internal Server Error indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is an API endpoint?",
    answer:
      "An endpoint is a specific URL where an API can be accessed. It represents a specific resource or action. Example: /api/users or /api/users/:id",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the structure of an HTTP request?",
    answer:
      "An HTTP request consists of: Request line (method, URL, HTTP version), Headers (metadata), and optionally a Body (data being sent).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the structure of an HTTP response?",
    answer:
      "An HTTP response consists of: Status line (HTTP version, status code, status message), Headers (metadata), and Body (response data).",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the difference between fetch() and axios?",
    answer:
      "Both make HTTP requests. fetch() is built into browsers but requires manual JSON parsing and error handling. axios is a third-party library with automatic JSON transformation, better error handling, and request/response interceptors.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is authentication?",
    answer:
      "Authentication is the process of verifying the identity of a user, ensuring they are who they claim to be, typically through credentials like username and password.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is JWT (JSON Web Token)?",
    answer:
      "JWT is a compact, URL-safe token format for securely transmitting information between parties. It consists of three parts: Header, Payload, and Signature, and is commonly used for authentication.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is bcrypt?",
    answer:
      "bcrypt is a password hashing library that securely hashes passwords before storing them in a database. It adds salt to prevent rainbow table attacks and is intentionally slow to prevent brute-force attacks.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "What is the basic flow of login/signup?",
    answer:
      "Signup: User submits credentials → Hash password with bcrypt → Store user in database. Login: User submits credentials → Find user in database → Compare password with bcrypt → Generate JWT token → Send token to client.",
  },
  {
    category: "Intermediate",
    type: "theory",
    title: "Where should you store authentication tokens in the browser?",
    answer:
      "Common options: localStorage (persistent but vulnerable to XSS), sessionStorage (session-only), or httpOnly cookies (more secure, not accessible via JavaScript). For freshers, localStorage is commonly taught.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is Git?",
    answer:
      "Git is a distributed version control system that tracks changes in source code during software development. It allows multiple developers to work together on the same project.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between Git and GitHub?",
    answer:
      "Git is the version control system (software) that tracks changes. GitHub is a cloud-based hosting service for Git repositories, providing collaboration features, issue tracking, and project management.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a Git repository?",
    answer:
      "A repository (repo) is a directory that contains your project files and the entire revision history of those files. It can be local (on your computer) or remote (on GitHub).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are the basic Git commands?",
    answer:
      "git init (initialize repo), git clone (copy repo), git add (stage changes), git commit (save changes), git push (upload to remote), git pull (download from remote), git status (check status).",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is a Git branch?",
    answer:
      "A branch is an independent line of development. It allows you to work on features or fixes without affecting the main codebase. The default branch is usually called 'main' or 'master'.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the purpose of .gitignore?",
    answer:
      ".gitignore is a file that specifies which files and directories Git should ignore and not track. Common entries include node_modules/, .env, and build files.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is git pull?",
    answer:
      "git pull fetches changes from a remote repository and automatically merges them into your current branch. It's essentially git fetch + git merge.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the difference between git pull and git fetch?",
    answer:
      "git fetch downloads changes from remote but doesn't merge them into your current branch. git pull downloads and automatically merges changes into your current branch.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you handle form input in React?",
    answer:
      "Use controlled components: create state for input values, set input value to state, and update state on onChange event. Example: <input value={name} onChange={(e) => setName(e.target.value)} />",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the onChange event in React?",
    answer:
      "onChange is an event handler that fires when the value of an input element changes. It's used to update state in controlled components.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is the onSubmit event in React?",
    answer:
      "onSubmit is an event handler that fires when a form is submitted. It's attached to the <form> element and typically calls event.preventDefault() to prevent page reload.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is preventDefault() in form handling?",
    answer:
      "preventDefault() is a method that prevents the default browser behavior. In forms, it prevents the page from reloading when the form is submitted, allowing you to handle submission with JavaScript.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you perform basic form validation in React?",
    answer:
      "Check input values in the submit handler before processing. Example: if (!email.includes('@')) { setError('Invalid email'); return; }. You can also use HTML5 attributes like required, minLength, or libraries like formik.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What is console.log() used for?",
    answer:
      "console.log() prints messages to the browser's console, useful for debugging by displaying variable values, execution flow, and error messages.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are browser DevTools?",
    answer:
      "Browser DevTools are built-in debugging tools in browsers (F12 or right-click → Inspect) that let you inspect HTML/CSS, debug JavaScript, monitor network requests, and view console messages.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What are React DevTools?",
    answer:
      "React DevTools is a browser extension that allows you to inspect React component hierarchies, view props and state, and debug component behavior.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "How do you debug API calls?",
    answer:
      "Use browser DevTools Network tab to see requests/responses, check status codes, headers, and response data. Also use console.log() to print response data in your code.",
  },
  {
    category: "Beginner",
    type: "theory",
    title: "What information does an error message typically contain?",
    answer:
      "Error messages typically include: error type (SyntaxError, TypeError, etc.), error description (what went wrong), file location, and line number where the error occurred. Read from top to bottom to understand the issue.",
  },
];

export default theoryQuestions;
