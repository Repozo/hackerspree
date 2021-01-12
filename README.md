### Hackerspree website

Well it's a new concept of growing together by participating in hackathons effectively, JIIT is known for its coding culture but it’s development culture never been appreciated, cause we never stood up one as a team.

So to support the Hackathon culture in JIIT HackerSpree will be a great platform for sharing resources or for a good headstart in hackathons : How, Which and What to do and a boasting website too if you win lol.

### Project Info

This project uses [React.Js](https://reactjs.org) and the contents are bundled using webpack.

The contents in this project follow the following structure.

```
├───public
│   └───images
│
└───src
    ├──sections
    │   ├───about
    │   ├───faq
    │   ├───footer
    │   ├───landing
    │   ├───winners
    │   └───sponsors
    │
    │
    └───shared_components
        ├───button
        └───sidebar
```

Each individual section and component, follows this structure

```
section
  ├──components
  └──styles
```

#### Constants

This project uses 'Roboto' as it's primary font, with weights of 300, 400, 500 and 700. All the fonts have been pre-imported.

Moreover, here are a few constants which are used throughout the project, and have been added to the root of css, use them accordingly.

```
font-size: 16px;
--bg-primary: #ffffff;
--bg-secondary: #f5f5f5;
--text-primary: #000000;
--text-secondary: #202124;
--btn-primary: #0005df;
--btn-secondary: #ffffff;
--focused-state: #c2c3f7;
--transition-speed: 250ms;
--sidebar-width: 5rem;
```

## Setup

##### Clone the repository

```bash
git clone https://github.com/Repozo/hackerspree.git
```

##### Move to the desired folder

```bash
cd \hackerspree
```

##### To install the dependencies, simply write

```bash
yarn install or npm install
```

##### To run the app, simply write

```bash
yarn start or npm start
```

