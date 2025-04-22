# Getting Started with Create React App

Welcome! This is the code page for my personal portfolio website. This website was designed from scratch while
trying to do as much as I could by myself. This included not only content but making my own custom modules 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the site

### Local Development Mode

The best way to run the react app on a personal machine is to run the following command
while in the same directory as this readme, which will open the Dev mode:

`npm start`

This will start a localhost server at [http://localhost:3000](http://localhost:3000),
which can then be opened in your browser.

If you want to make changes to the webpage, they should show up automatically during running.
However, if the page was to change in a major way (such as adding a feature), the app will
report an error. To fix this, refresh the page or restart the program.

### Stopping the program

A simple `Control + C` in the console the program is running in should end the program. The webpage
will need to be closed manually

### Server

To start off, I recommend using this [guide](https://medium.com/swlh/react-app-deployment-to-vps-cloud-server-2de4387f59f4) which will help with the setup.

The main gist is to first download the files onto the server and run:

`npm run dev`

Then use the guide to setup a nginx server that listens to connections on the 5000 port. Then running
a daemon to direct the connections of 5000 to the location in the build server. Additionally it is expected 
to be running Linux

Additionally, for development I didn't end up using test cases. While they are helpful I generally had
directions that changed and I wasn't quite sure what I was wanting on the server. Therefore they are all
default, which in the original generated React docs look like this:

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## FAQ

### Why React?

During my university degree I ended up being told by a person I was working with that React was a nice way to 
make a custom website that was interactive in some way, then they had their website with custom elements and it
looked fairly nice. Then during the project we had to make the server side and ended up going with React.

With the knowledge and recommendations I decided I would try to make the website. To both have a better grasp
on HTML and CSS and to show off projects

### How was it using React?

While react was a good service, I probably would have been better off using HTML and CSS instead of React.

The original intention was to have modules show off code, but in reality it was too difficult to do this.
I wanted to take this time to learn raw HTML and CSS to make a nice website, however React really changes
the way you would interface, instead using modules. Additionally, there is no dedicated place for React
modules, so you are more browsing random github pages and forum posts which (if you are lucky) give a react
command to download the module instead of raw code from the web.

Furthermore, I don't have the full selection of projects to run (see below). The projects I do have require
modifications to run on a server (set up backend database from scratch), could be unsafe (a compiler compiling 
unknown code), or are associated with accounts I don't have access to anymore (Cloud services). Therefore 
using modules to show off the code doesn't really work out. Even if I had stubs for the code which I can't
show publicly it would still be too hazardous.

That just leaves React alone which didn't really offer much. Sure it was a nice way to pair Javascript with 
HTML and CSS, but the flaws of react really came through. There were around 5 different ways to shift around 
pages (4 were depreciated 8 years ago), importing a fade transition somehow conflicted with 10 libraries, 
usual HTML constants like Body were gone so backgrounds are contained in Divs (which causes a scrolling bug).
Overall, it was a nice learning experience but if I was to do this project again I might switch it to pure
HTML, CSS, and Javascript.

### Private Repositories

As the Univseristy of Guelph had put numerous times, I am not allowed to publicly show off code from the 
University, as they say we can't show off code due to students possibly looking up the repository and 
committing plagarism.

### Are these all the projects you worked on?

Short answer is no. There were more back in University, however after I got out of university the macbook which
hosted all the projects was extremely slow and had tons of bloatware, such as when I was using docker for the 
first time and had 100 separate docker containers which would not get removed. Due to this I ended up having to 
reset my PC and save as many of the projects as I could onto a small harddrive. 

Additionally, after university the Gitlab university account was instantly deleted so I had no more access 
to all those projects even if I wanted to report on them. I tried searching for my name but nothing comes up.
Even going to the webpage [https://gitlab.socs.uoguelph.ca/nrudiak](https://gitlab.socs.uoguelph.ca/nrudiak)
shows I am blocked from view.

However I can share that they included
- A python project which wrote an HTML page and dealt with a backend database
- A miniature Unity project which had your previous deaths help you
- A ROGUE program (like the game), hosted in Java
- A chess bot with a simulated chess board
- A neural network which didn't really work too well (from scratch, implementing back propagation)
- A paper which showcased what using gap filling algorithms on an AI did
- Conway's Game of Life