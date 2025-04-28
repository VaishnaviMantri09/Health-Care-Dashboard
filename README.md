# Health Care Dashboard Project

- This is a React-Vite application that allows you to view and manage lab results and diagnostics.
- This project is single-page web application that converts the given Adobe XD template into a responsive HTML page.
- The application fetches patient data from the Coalition Technologies Patient Data API and populates the UI accordingly.
- The focus is exclusively on displaying information for Jessica Taylor.
- Adobe XD prototype Link for the same: https://xd.adobe.com/view/121254c9-532f-4772-a1ba-dfe529a96b39-4741/ 

[![Watch the demo]](https://github.com/VaishnaviMantri09/Health-Care-Dashboard/blob/main/Project-Video-Demo.mp4)

## Technologies Used

1. **HTML5**
2. **CSS3** (with Flexbox/Grid)
3. **JavaScript (ES6+)**
4. **Chart.js** (for blood pressure graph)
5. **Postman** (for API testing and Fetch API verification)

## API Information
- API Base URL: https://documenter.getpostman.com/view/11861104/2sA35G42ve
- Request Type: GET request to retrieve patient data.
- Filtering: Only data for Jessica Taylor is fetched and displayed.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (Recommended version: 16.x or above)
- [npm](https://www.npmjs.com/) (comes with Node.js)

You can verify the installations by running the following commands in your terminal:

```bash
node -v
npm -v
```

## Getting Started

To get started with the project, follow the steps below:

### 1. Clone the Repository

Download the repository on your local machine

### 2. Install Dependencies

Install the project dependencies by running:

```bash
npm install
```

This will install all the required packages listed in the `package.json` file.Thereby installing the node modules.


### 3. Build for Application:

To create a production-ready build, run the following command:

```bash
npm run dev
```

This will create an optimized version of the app in the `build/` directory. You can now deploy the app to a production server.

## Folder Structure

Here is the basic structure of the project:

```
/Dashboard-Project
  /node_modules           # Installed dependencies
  /public                 # Public assets
    index.html            # Entry point for the application
  /src                    # Source files for the React app
    App.js                # Main component
    index.js              # Entry point for React
    /components           # Reusable components
  .env                    # Environment variables
  package.json            # Project dependencies and scripts
  README.md               # Project documentation
```
