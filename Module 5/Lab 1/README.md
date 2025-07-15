# Multi-Server Express App

This project demonstrates how to set up multiple Express servers running on different ports using TypeScript. Each server can have its own routes and middleware, allowing for modular development.

## Project Structure

```
multi-server-express-app
├── src
│   ├── server1.ts       # First Express server
│   ├── server2.ts       # Second Express server
│   └── types
│       └── index.ts     # Type definitions
├── package.json          # NPM configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/multi-server-express-app.git
   ```

2. Navigate to the project directory:
   ```
   cd multi-server-express-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

### Running the Servers

To start the servers, you can run the following commands in separate terminal windows:

- For the first server:
  ```
  npx ts-node src/server1.ts
  ```

- For the second server:
  ```
  npx ts-node src/server2.ts
  ```

### API Endpoints

- **Server 1**: 
  - Base URL: `http://localhost:3000`
  - Define your routes here.

- **Server 2**: 
  - Base URL: `http://localhost:4000`
  - Define your routes here.

### Contributing

Feel free to submit issues or pull requests to improve the project.

### License

This project is licensed under the MIT License.