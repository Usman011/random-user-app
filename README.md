# web-ui

Random User App

## Runtime Environment & Supported Versions

Make sure to use same versions for development, CICD, deployment.

| product  | version | notes                                                     |
| -------- | ------- | --------------------------------------------------------- |
| Node     | 18.x    | this can be upgraded to 18.x if needed.                   |
| React JS | 18.x    | do not upgrade until all critical dependencies are ready. |
| npm      | 8.6     | npm is official tool, having complete ecosystem.          |

## Technologies Used

- **npm:** Node package manager for package management and project dependencies.

- **Material-UI v5 (mui):** A CSS framework for React components, providing a customizable and responsive design.

- **TypeScript:** A typed superset of JavaScript that adds static types to the language. Enhances code readability and maintainability, and provides better tooling support.

- **React Query:** A library for managing, caching, and updating server state in React applications. It simplifies fetching, caching, and updating asynchronous data.

- **Google Maps:** Displayed the user's location on a map using the google map embedUrl created from the Random User API..

## Developer Setup

```shell
npm install
```


```shell
npm run dev
```

# Project Folder Structure with absolute paths

This project follows a specific folder structure for better organization and maintainability. Below is an explanation of each folder:

## components


This directory comprises subfolder dedicated to various components, each containing TypeScript (ts) files. These components are designed for reuse across different sections of the application. Each component folder includes an `index.js` file responsible for exporting the respective component, the actual component file (e.g., `Navbar.js`), and a `types.ts` file providing type declarations for the component.

```plaintext
my-blog-project/
|-- src/
|   |-- components/
|   |   |-- ProfileTabs/
|   |
|   |   |-- UserLists/
|   |
|   |   |-- ErrorSnackbar/
|   |  
|   |   |-- PaginatedButton/
|   |
|   |   |-- Container/
|   |
|   |   |-- layout/
```

## theme

The theme folder holds files related to the customization of Material-UI components. The theme.js file could contain your custom theme configurations.

```plaintext
|-- src/
|   |-- theme/
```

## helpers

The helpers folder is for utility functions that can be used across the application. It includes an index.js file for exporting the helper functions.

```plaintext
|-- src/
|   |-- helpers/
```
## services

The folder contains services for data fetching api. Within this folder, the "api.ts" file serves as a central module responsible for making requests to external API.

```plaintext
|-- src/
|   |-- services/
|   |   |-- api.json     
```