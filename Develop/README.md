# Project Title: Note Taker

[![Maintenance](https://img.shields.io/badge/Maintained%3F-no-red.svg)](https://bitbucket.org/lbesson/ansi-colors)

## Description

The Note Taker application is used to write, save and delete notes. This application is most useful for users who need to keep track of a lot of information. Being able to take persistent notes allows users to have written information available when needed.

## Table of Contents

- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licenses](#Licenses)
- [Contributors](#Contributors)
- [Testing](#Testing)
- [Questions](#Questions)

## Installation:

Simply run npm install in your root directory.

## Usage

Inside of the develop folder, you will want to run the command "node server.js" which will initiate the server. Then the deployed version of the application will be accessible via Heroku. When the page loads, simply click on the GET STARTED button and you will be redirected to the next page. First type in the title of you note and then the text below it. Once you're done, simply click on the save icon on the right top corner and the note will save to your log on the right side of the screen. If you wish to create another note, click on the pencil icon on the top right corner. If you wish to delete any of your previously saved notes, you can click on any of the trash cans on the right side of the log.

## Licenses

ISC

## Contributors

![Image of contributor](https://avatars2.githubusercontent.com/u/61660025?v=4)

Michael Veiga

## Testing

No tests have been implemented.

## Questions

Michael Veiga

mvee333@gmail.com

## Develop Review

This homework was much more challenging than I had anticipated. Firstly, it took me quite a while to realize that I needed to use "app.use(express.static("public"))" which allows the files in the public folder, including the CSS and JSS, to be run on startup. After a few hours of getting an HTML error in the console, I finally found the solution on stack overflow. I then spent quite a while trying to figure out how to use classes with the notebook.js page. After looking at a number of the activities and talking with the other classmates, I decided to use functions in the apiRoutes instead. For the longest, time I kept getting an error that said "getPush() is not a function" which I eventually realized was because I deleted everything in my db.json, and thus needed to add the sample string text back in. Even using the functions was quite a challenge for me, but luckily I got a lot of help from Keith. This homework showed me that I definitely need more practice with javascript. Unfortunately, I was also unable to deploy my application to heroku. I keep getting an error that says "Error: Missing required flag:-a, --app APP app to run command against." I hope to get it sorted this week.

## Example Media

![Starting page](public\assets\nthomepage.png)

![Note Page](public\assets\ntnotepage.png)
