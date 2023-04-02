<p align="center">
  <img src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/c0102b8b-e55a-4e01-a5f4-c39a4986394f.png" width="20%" />
</p>

# BIGVU Assignment - ***101 Crash Course***

<!-- Table of Contents -->
<details>
<summary>
  
## Table of Contents
  
</summary>
  
- [Folder Structure](#folder-structure)
- [Client-Side coverage](#client-side)
- [Server-Side coverage](#server-side)
- [API Reference](#api-reference)
- [Persist Storage](#persistently-storage)
- [Environment Variables](#environment-variables)
- [Run Locally](#run-locally)
- [Frameworks & Libraries](#frameworks-and-libraries)
- [Screeshots](#screenshots)
  
</details>  

<!-- Folder Structure -->
### Folder Structure

<b>BigVu-Assignment</b> code folder structure seperated to client-side and server-side.
```bash
bigvu-assignment/
|- client
  |-- public/
  |-- src/
    |-- assets/
    |-- components/
      |-- common/
      |-- home/
        |-- card/
      |-- course/
        |-- list/
    |-- hooks/
    |-- pages/
    |-- theme/
    |-- utils/
    |-- App.js
    |-- index.js
  |-- .env
|- server
  |-- controllers/
  |-- routes/
  |-- services/
  |-- index.js
  |-- .env
```

Now, lets dive into both server and client sides folders.

<!-- CLIENT-SIDE -->
### CLIENT-SIDE

#### assets

`{{asset}}.jsx`

This folder contains all the SVG's graphics impelemented in React Components with optional parameters so that it can be shaped dynamically (for example, determine colors or sizes).

```javascript
  export const Check = ({ width = 20, height = 20, stroke = "#00D096" }) => {
    return (
      <svg
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 9.65803L7.22832 15L18 4"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        />
      </svg>
    );
  };
```

#### components

This folder contains all the function components, which they're independent and reusable bits of code. They serve the UI (User Interface) to avoid unnecessary repetition of the code. those components are customized widgets using MUI (MaterialUI) to describe initial theme for widgets as they're named.
The components folder is divided as follows, shared components (`common` folder) for both pages, and those for the course page (`course` folder) and those for the home page. (`home` folder)

#### hooks

This folder houses custom-defined hook's code and auxiliary. 

`useFetch.js`

Implementing custom React Hook called `useFetch` which is used to fetch data from an API endpoint. it takes one parameter `endpoint` which represents the API endpoint to be called. the function first initializes three states using the `useState` Hook from React: `data` state is used to hold the data returned from the API endpoint `isLoading` state is used to indicate whether the data is being fetched or not `isError` state is used to indicate whether there was an error while fetching the data.

`initialState.js`

```javascript
const initialState = (id) => {
  return {
    currentChapter: localStorage.getItem(`currentChapter_${id}`) || 0,
    currentVideo: localStorage.getItem(`currentVideo_${id}`) || null,
    isChecked: JSON.parse(localStorage.getItem(`isChecked_${id}`)) || [],
    isSeek: JSON.parse(localStorage.getItem(`isSeek_${id}`)) || [],
  };
};
```

In accordance with the persistent storage principles (look here), the code exports a function called `initialState` that returns an object with inital state values for a certain course id, The values are retrieved from local storage if there are saved values, otherwise, set to default values.

#### theme

This folder houses `index.js` file which used for design and customize theme for the MUI component library. 
This code defines a theme boject using `createTheme` function from MUI library, which allows for customization of the visual style of a UI. The theme handles `palette`, `breakpoints` and `typography` and gradient colors as a custom sections.

reference for gradients and note regarding their use:
```javascript
theme = createTheme({
  ...theme,
  gradients: [
    {
      // deepocean blue
      initial: "#28B3F7",
      final: "#506AFF",
      linear: "linear-gradient(270deg, #28B3F7 0.65%, #506AFF 99.35%);",
    },
    {
      // greenfield
      initial: "#00EA3B",
      final: "#00D096",
      linear: "linear-gradient(90deg, #00EA3B 0%, #00D096 100%);",
    },
    {
      // sunset
      initial: "#F79F28",
      final: "#FF5350",
      linear: "linear-gradient(270deg, #F79F28 0.65%, #FF5350 99.35%);",
    },
  ],
});
```

to avoid throwing an error `ArrayIndexOutOfBoundsException` in case we've more than 3 courses (that is, regardless of the number of courses), gradients for course are selected by using the remainder operator, hence: (`client/src/pages/Home.jsx`)
```javascript
gradient={theme.gradients[index % theme.gradients.length]}
```

#### pages (scenes)

`Home.jsx` - `Course.jsx`

pages folder is used to store the React components that correspond to the different pages of the application, more specificly, `Home` and dynamic `Course` page (routing in web app impelment using `React-Router-DOM`). those pages communicate with the server-side in order to get data, with using `useFetch` hook described before.

#### utils

`timeConverter.js` 
utils folder houses utility function called `timeConvereter` that convert a timestamp in seconds into a more human-readable format of minutes and seconds. (formatted as mm:ss)

<!-- SERVER-SIDE -->
### SERVER-SIDE

#### controllers

`bigvu.controller.js`

controllers folder contains JS file for the controller in order to handle user request and return a response. more specificly, `bigvu.controller` defines two functions called `getAllCourses` and `getCourseDataByID` that use the async/await syntax to make asynchronous API calls using the `fetchAPI` function to make API calls to BIGVU-API-URL, with a try/catch block and transmissing information parties as a JSON object.

`getAllCourses` - retreives a list of all courses from the server.
`getCourseDataByID` - retreives a specific course data by ID.

#### routes

`bigvu.route.js`

routes folder files refers to how an application's endpoint (URIs) respond to client requests make the path mapping using ***Express***.js with `Express.Router`.
more specificly, `bigvu.route.js` defines an Express.js router that handles incoming HTTP requests for the `/` and `/:id` endpoints that correspond to `bigvu.controller.js` module and call the appropriate controller function.

#### services

`fetchAPI.js`

services folder houses `fetchAPI.js` file that uses a `Axios` library to make an `GET` request to the specific endpoint while set the necessary headers required such as ***Basic Access Authentication*** credentials through loads sensitive data from an environment file.

#### index.js

`index.js` is a JS code that sets up an Express.js server with ***compression*** and ***CORS*** middlewares and take care of defines our `bigvuRoutes` router route to handle requests to the `/api/v1` endpoint. The server listens on a specific port, which is either the port specified in the environment variable `PORT` or the defaulr port 8080. 

<!-- API-REFERENCE -->
## API Reference

#### Get all courses

```http
  GET /api/v1/
```

#### Get course data

```http
  GET /api/v1/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of course to fetch |


<!-- PERSIST-STORAGE -->
## Persistently Storage

In order to allows data to be stored persitently on the client-side, I used Local Storage - a web storage API that allows to store key-value pairs in a client's web browser.
Below, a descriptive table about `LocalStorage` Objects and Values.

| Object  | Expected Values                          | Description                                                      |
| ------- | ---------------------------------------- | ---------------------------------------------------------------- |
| currentChapter     | number                                   | A integer representing the chapter of the LocalStorage item.         |
| currentVideo   | string         | A string representing the video's url of the localStorage item.                               |
| isChecked  | boolean[]                                   | An array of booleans representing whether a video has been watched, where the cell represents the number of the chapter.                        |
| isSeek | string[]                                 | An array of strings representing video playing position, where the cell represents the number of the chapter.              |

Depending on the course id, for each object, the course id is adjusted as follows `[key]_${id}`, for example `currentChapter_12345cfbc5011c1135728cb6`.

<!-- ENVIRONMENT-VARIABLES -->
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file:

**Client:**
```env
REACT_APP_API_URL=<API_BASE_URL> // ex. http://localhost:8080/api/v1
```

**Server:**
```env
SECRET_ID=<SECRET_ID>
SECRET_PASSWORD=<SECRET_PASSWORD>
BIGVU_BASE_URL=<BASE_URL>
PORT=<PORT> // optional variable, default set to 8080
```
`SECRET_ID` and `SECRET_PASSWORD` represent the basic `<credentials>`, where credentials is the Base64 encoding of ID and password used for Basic Access Authentication

<!-- RUN LOCALLY -->
## Run Locally

Download or clone this repo by using the command below:

```bash
  git clone https://github.com/ladunjexa/bigvu-assignment
```

In both folders (`client` / `server`) execute the following command to get the required packages:

```bash
  npm install
```

Go to `server` folder and execute the following command in order to start the server:

```bash
  npm run dev
```

Go to `client` folder and execute the following command in order to run the web application:

```bash
  npm start
```

<!-- FRAMEOWRKS & LIBRARIES -->
## Frameworks and Libraries

[![Tech Stack](https://skillicons.dev/icons?i=react,materialui,nodejs,express)](https://skillicons.dev)

**Client:** React, MUI, Axios, React-Player, React-Loader-Spinner, uuid

**Server:** Node, Express, Axios, CORS, compression, nodemon

<!-- SCREENSHOTS -->
<!--
## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)
-->
