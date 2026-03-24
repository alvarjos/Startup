# Angel's Startup

[Angel's Notes](notes.md)

I want to create a multiplayer blackjack game where users can join tables, play against each other and the dealer, and track their statistics over time. The game will have real-time updates using WebSockets, user authentication, and a responsive design. The goal is to allow players to enjoy a social game of blackjack from anywhere with friends or other online players.

<!--
# Template  -->

<!-- ## Markdown Documentation
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing. -->

## 🚀 Specification Deliverable

<!-- > [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration. -->

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted to play blackjack with friends or other players online? My multiplayer blackjack game allows users to join tables, play against each other and the dealer, and track their statistics over time. With real-time updates players can enjoy a social game of blackjack from anywhere with anyone. Whether you're a seasoned pro or a beginner, the game offers an interactive experience for all skill levels. Join now and see if you have what it takes to beat the dealer and come out on top!

### Design

![Design image](./images/designTemplate.svg)


### Key features

- Secure login and user authentication
- Real-time multiplayer gameplay using WebSockets
- Interactive blackjack tables with multiple players
- Player statistics tracking and leaderboards
- Responsive design for desktop and mobile devices
- Chat functionality for player interaction 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Basic layout and design of the cards, dealer, table, and notifcation boxes. 
- **CSS** - Styling of the cards, dealer, table, and notifcation boxes to make them visually appealing and responsive.
- **React** - Building the frontend components, managing state, and handling user interactions.
- **Service** - Backend logic for game rules, player actions, and communication between frontend and backend.
- **DB/Login** - Storing user credentials, game state, and player statistics securely.
- **WebSocket** - Real-time gameplay updates, player actions, and notifications.

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - (https://alvaradogames.click).

I deployed my application through AWS using an EC2 instance. I set up a custom domain name, listed above as alvaradogames.click, to access my application. I configured HTTP and HTTPS access to have secure connections as well. 

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

<!-- Deploy Script Example: 
./deployFiles.sh -k ~/keys/production.pem -h yourdomain.click -s startup 
-->

- [x] **HTML pages** - I added the all the html pages for the application, with descriptions of what will go there once I add the CSS, JavaScript and React functionality.
- [x] **Proper HTML element usage** - I added the proper HTML elements to the different pages of my application.
- [x] **Links** - I have links to navigate between the different pages of my application.
- [x] **Text** - I added text to describe the different parts of my application, and to give context to the user
- [x] **3rd party API placeholder** - I added the table which will eventually show data from a 3rd party API, which is the cards deck API.
- [x] **Images** - I added the image of the design sketch to the README.md file, as well as the table image which I created on draw.io to represent where the cards will go.
- [x] **Login placeholder** - I added the login placeholder on the login page.
- [x] **DB data placeholder** - I added the database table to the highscores page which will eventually show data from the database.
- [x] **WebSocket placeholder** - The chatbox and the table with the changing cards on the game page is the placeholder for the WebSocket functionality.

I added all of these html elemnts to my project. I created the different html pages with descriptions of what will go there once I add the CSS, JavaScript and React functionality. There are images included as well as links to navigate between the pages.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - I added colors, styles and a background image to cover most of the pages that has a black jack theme design. I made sure that no elements overflow the page when resizing the window. I do need to update the nav bar so when it gets too small it puts a menu button but I didn't have time for that yet.
- [x] **Use of a CSS framework** - I used css frameworks for the login button, form labels and input boxes.
- [x] **All visual elements styled using CSS** - I used css to style most of the visual elements but I still need to work on a few more pages.
- [x] **Responsive to window resizing using flexbox and/or grid display** - I made the pages so they are responsive to different window sizes.
- [ ] **Use of a imported font** - I used a different font times new roman but I didnt have time to import a custom font.
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I used different types of selectors such as classes, ids, and elements to style the pages.

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I used vite to build my application and bundle the files together. I was able to run dev and build the application using vite.
- [x] **Components** - I included the jsx files for the different pages of my application. I used a react fragment to wrap the header on all the pages except the home page.
- [x] **Router** - I used react router to navigate between the different pages of my application. I have the different routes set up with the headers and links to navigate working for each page. 

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I added the functionality of the applicaiton to work with the user, dealer, player and the game. You are able to login, logout, navigate between the pages, and play the game.
- [x] **Hooks** - I added hooks to the applicaiton to manage the user functionality like login, logout, player wins, dealer wins, and the game logic.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - I set up node.js and express to create the backend and frontend services. I have the server running and able to serve the frontend files as well as handle requests from the frontend.
- [x] **Static middleware for frontend** - I added the static middleware to my index.js file to serve the frontend files from public.
- [x] **Calls to third party endpoints** - I added the weather endpoint to call from meteo API to get the current weather in provo. It is located on the home page. 
- [x] **Backend service endpoints** - I added the endpoints for the backend to keep track of scores, login information and the game state.
- [x] **Frontend calls service endpoints** - The frontend is able to call the backend endpoints to get the weather, login, logout, and the game state.
- [x] **Supports registration, login, logout, and restricted endpoint** - The application supports login, logout and user registration. The login and registration information is stored in the database. The application also has a restricted endpoint that only logged in users can access.

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Stores data in MongoDB** - I added the mongoDB database to the application and it store the total scores for the users. It also stores the total wins in the scores page by highest wins to lowest wins with each user being saved in the database with their scores.
- [x] **Stores credentials in MongoDB** - I added the mongoDB database to my application and it stores the login username, password, token and hashes the password before storing it in the database.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.
