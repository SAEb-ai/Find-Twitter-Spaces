![Find-Twitter-Spaces](https://socialify.git.ci/SAEb-ai/Find-Twitter-Spaces/image?language=1&owner=1&name=1&stargazers=1&theme=Light)

<p align="center">
<img src="https://img.shields.io/github/license/SAEb-ai/Find-Twitter-Spaces" />
<img src="https://img.shields.io/badge/Author-SAEbai-yellow" />
<img src="https://img.shields.io/badge/code%20style-airbnb-blue" />
</p>

## 💥 Introduction

Find Twitter Spaces is a web app to find twitter spaces based upon user's choice. It's frontend is built using ReactJS and backend using Node and ExpressJS. It's backend fetches the results from the [Twitter Api's](https://developer.twitter.com/en/docs/twitter-api/spaces/search/api-reference/get-spaces-search) based on the search query from the frontend.

## 💡 Why did I build this?

As more and more people are now willing to attend twitter spaces, it becomes a problem for them when they want to search the spaces on the basis of their choices and as twitter hasn't developed this functionality till now, so I went on developing this project.

## 🛠️ Local development

That's pretty easy. To ensure that you are able to install everything properly, we would recommend you to have <b>Git</b>, <b>NPM</b> and <b>Node.js</b> installed.

### Setup the repository to your local environment.

1. `Fork` the repository - Creates a replica of repository to your local environment.
2. Clone the repository - Downloads all repo files to your machine, using

```git
git clone https://github.com/YOUR-USERNAME/Find-Twitter-Spaces
```

3. Set working directory to the root directory of the project.

```sh
cd Find-Twitter-Spaces
```

### Frontend ⚛️

Following are the steps to run the frontend of the Find-Twitter-Spaces on your local. All the frontend code will go in the `client` directory.

1. Navigate to `client` folder.

```sh
cd client
```

2. Install all the required packages and dependencies.

```node
npm install
```

3. Now we will add the environment variables in the client/ by creating a .env file in the client folder according to .example.env given in that folder respectively.

4. Run the server.

```node
npm run start
```

4. [Click here](http://localhost:3000) to view it in the browser OR navigate to

```text
http://localhost:3000
```

The website is live at [http://find-twitter-spaces.herokuapp.com/](http://find-twitter-spaces.herokuapp.com/)

### Backend 💻

Following are the steps to run the backend of Find-Twitter-Spaces on your local. All the backend code will go in the `server` folder.

1. Navigate to `server` folder.

```sh
cd server
```

2. Install all the required packages and dependencies.

```node
npm install
```

3. Now we will add the environment variables in the server/ by creating a .env file in the server folder according to .example.env given in that folder respectively.

   - Generate bearer tokens by following [this](https://developer.twitter.com/en/docs/authentication/oauth-2-0/bearer-tokens) link.

4. Run the server.

```node
npm run dev
```

4. [Click here](http://localhost:8080) to see the backend server runing in the browser OR navigate to

```text
http://localhost:8080
```

### Lint 🧹

To lint the code files, run the following command on root level:

```node
npm run lint
```

## 🥁 Features

- Find Twitter Spaces provides a search box in which the user can type his/her topic and then accordingly twitter spaces will get displayed on the screen.
- The cards that represent the twitter spaces contain two things:- start time and status. Start time represents the time at which the twitter space is scheduled to start and status represents whether the twitter space is live or not now.
- Clicking on the card will redirect the user to the twitter space on Twitter.
- The web app is fully responsive as well as it provides the feature of [SPA's(Single Page Applications)](https://developer.mozilla.org/en-US/docs/Glossary/SPA).

## 🔥 Future Goals

- Add common topics as buttons which on clicking will display the spaces accordingly.
- Add a filter which can filter the spaces based on status of the space(live or scheduled).
- Add unit tests to achieve 100% code coverage.

## 📜 LICENSE

[AGPL 3.0 License](https://github.com/SAEb-ai/Find-Twitter-Spaces/blob/main/LICENSE)
