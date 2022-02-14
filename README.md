Float frontend developer test
written by Seyram Alvin Ofori

## site [![Netlify Status](https://api.netlify.com/api/v1/badges/692e2bd4-f1cc-430e-a773-88ef311b50ad/deploy-status)](https://app.netlify.com/sites/float-frontend-dev-test-seyram-alvin-ofori/deploys)
site deployed to https://seyram-alvin-ofori-float-frontend-dev-test.netlify.app

## storybook [![Netlify Status](https://api.netlify.com/api/v1/badges/18966d41-1865-4ffd-87c1-5df973b42a0f/deploy-status)](https://app.netlify.com/sites/storybook-seyram-alvin-ofori-float-frontend-dev-test/deploys)
storybook deployed to https://storybook-seyram-alvin-ofori-float-frontend-dev-test.netlify.app


## to run the app in dev mode
`yarn start` or `npm start`

## to run tests
`yarn test` or `npm test`

## packages used
### styled components:
allows easy co-location of styles and JSX, so it’s easy to find everything related to the component

### date-fns:
lightweight library for easy manipulation and calculation of dates. used granular imports to ensure that bundle size is affected minimally

### react-calendar: 
accessible calendar component implementation. used it to leapfrog the granular details of calendar implementation, as this is a problem that’s been properly solved already.