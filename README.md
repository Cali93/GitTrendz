# GitTrends

## GitTrends is a web app with infinite scroll that lets you discover the latest trending GitHub repositories.

### Made with: 

- React
- Material-UI
- Apollo & GitHub's GraphQL API

### Local usage:

```
1. Set up a personnal acces token on your GitHub account: https://github.com/settings/tokens
2. In src/config/keys, replace the dummy string with your access token
3. yarn install (note that it is important to use yarn)
4. yarn start
5. check localhost:3000, the app should be running
```

### Improve the project by:

```
1. Breaking components into smaller components
2. Creating types instead of using 'any' where needed
3. Using an Atomic Design architecture
4. Testing the code
5. Being more consistant with the way of using the styles
6. Adding the notifyNetworkStatus prop on the RepositoriesQuery to add a spinner while fetching more
7. Adding a loading and error component
```