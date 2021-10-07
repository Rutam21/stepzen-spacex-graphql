# stepzen-spacex-graphql :rocket:

<img width="700" alt="Screen Shot 2021-06-24 at 10 57 36 AM" src="https://user-images.githubusercontent.com/54046179/123310554-0d3d9c80-d4db-11eb-98c2-a54e7d75e523.png">

This project is a React app spun up with a StepZen connection to [SpaceX's GraphQL API](https://github.com/SpaceXLand/api). It demonstrates how you can create a StepZen layer for a GraphQL API with a React frontend.

Before you get started, you'll need to get yourself a [StepZen account](https://stepzen.com/request-invite) and [install the StepZen CLI](https://stepzen.com/docs/quick-start).

If you'd like to contribute, please view our [guidelines](https://github.com/stepzen-samples/stepzen-spacex-graphql/blob/main/CONTRIBUTING_FOR_HACKTOBERFEST.md) and [code of conduct](https://github.com/stepzen-samples/stepzen-spacex-graphql/blob/main/CODE_OF_CONDUCT.md) first, as well as where to [find support](https://github.com/stepzen-samples/stepzen-spacex-graphql/blob/main/SUPPORT.md).

Here's our video walkthrough as well. In it, you'll [learn the steps for making a PR](https://www.youtube.com/watch?v=4B6xVyEc_CY&t=1285s) and the overall goals for our repos.

## Getting Started

Fork and clone to open up the project in your IDE (coding environment).

Then `npm install`.

Then `cp .env.sample .env`.

Run `stepzen start`.

You'll get a message like:

```bash
Deploying to StepZen...... done

Successfully deployed api/example at 4:22:19 PM

Your endpoint is available at https://myaccount.stepzen.net/api/example/__graphql
```

You'll need this endpoint to configure your React app.

You'll also first notice a custom StepZen Graphiql editor pop up. I encourage you to play around with it! You can find [more information on it in our docs]().

<img width="1597" alt="Screen Shot 2021-06-24 at 10 39 22 AM" src="https://user-images.githubusercontent.com/54046179/123308449-88518380-d4d8-11eb-983c-ac71326a4e0f.png">

You'll need to add STEPZEN_API_KEY and STEPZEN_ENDPOINT in .env file in your working directory for the app to work in localhost.

The STEPZEN_API_KEY is the key from your account, and the STEPZEN_ENDPOINT is the endpoint you got when you ran `stepzen start`.

Now, run `npm start` to see your Create React App user interface with your rocket information! Feel free to play around. [Let us know](https://discord.com/invite/9k2VdPn2FR) what you come up with!
