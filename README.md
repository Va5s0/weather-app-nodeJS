# Weather app

This app accepts an address of a location as an argument and returns the temperature of that location.

This was a practice assignment for a Node.js Udemy course I created.

### Installation & setup

- Clone this repo
- Run npm install
- In order to use the application, you must sign up at https://developer.forecast.io/ and request an API access key
- Store your API key at secrets.mine.js inside the token variable and rename the file to secrets.js
- Execute `node app.js -a "35 Oxford Street, London, United Kingdom"` and you'll have the temperature in Fahrenheit degrees at that address
