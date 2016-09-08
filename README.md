This is a Meteor-react boilerplate using Meteor 1.4 and React 15. It has been put together as a baseline for learning Behavior/Test-Driven-Design.

### First run of the app

```bash
npm install
```
### Running the app

```bash
npm start
```

### Scripts

**To lint:**
```bash
npm run lint
```

**Run unit tests**
Run app in one console window.
Then in another console run:
```bash
<<<<<<< HEAD
npm run tests
=======
npm run test
```

To run while watching for changes:
```bash
npm run watch
>>>>>>> add-basic-react-test
```

**Run tests with Chimp:**
First run app in one console then open second console and run:
```bash
npm run chimp
```
Chimp will poll your app for changes while you write your tests.

<<<<<<< HEAD
### With Redux
There is a `with-redux` branch with redux and redux-router setup.
```bash
git clone -b with-redux https://github.com/bearcanrun/meteor-react-testing.git
```
=======
### Resources

[The Ultimate Unit Testing Cheat-sheet](https://gist.github.com/yoavniran/1e3b0162e1545055429e)

### Notes
Using npm mocha/chai/sinon instead of practicalmeteor:mocha/chia/sinon because of experiencing similar errors with Meteor in [enzyme 302](https://github.com/airbnb/enzyme/issues/302)

+Meteor test is slow!

Since we are no longer using practicalmeteor, we may run into future dependency issues with 'meteor/meteor', etc. so can try [testdouble.js](https://github.com/pcorey/unit-testing-with-testdouble)
>>>>>>> add-basic-react-test
