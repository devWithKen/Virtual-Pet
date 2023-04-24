# Title
[A Virtual Pet]

## Table of Contents 

- [Project Description](#project-description)
- [Installation](#installation)
- [Running](#running)
- [Usage](#usage)
- [Database-api](#database-api)
- [Modularisation](#modularisation)
- [Future-featured](#future-features)

## Project Description
[A fully functional Virtual Pet project written in Javascript showing how to create a pet, play and interact with the pet and also retrieve the pet if you return someother time]

## Installation
[upon download of the file, create a new terminal and Run the following commands on your terminal:
1. `npm i` - downloads the node modules
2. `npm start` - starts the server and gets it running
]

## Running
[open a browser page and type in - `localhost:8080` to load the signup page of the app.
]

## usage
[on signup, a virtual pet will be created given the parameters you have provided. 
On creating the pet, the values of the meters will start reducing over time but you can interact with the pet to keep these meters running and not getting to zero.
1. To create a new pet - upon load, you will be required to enter your 11 digit long phone number, a desired name for your pet ,and any color of your choice.
after filling out the form, you will have to click on the `create` button to create your pet.
2. To play with the pet- you can click on the `play` button thic calls a function that animates the hands of the pet and also adds to the happiness of the pet to prevent the pet from dying. This increases the value of the play meter.
3. To clean the pet- over time, the pet gets dirty and will require cleaning. If you click on the `clean` button, the pet's cleanliness level increases which reduces the pet's changes of dying off. This increases the value of the clean meter.
4. To feed the pet- if the pet lasts for a long while without being fed, it gets hungry which can lead to death of your pet. clicking on the `feed` button will let the pet feed and not die. On click of this button, you will notice the `body` of the pet scales showing that it has actually fed. This increases the value of the feed meter.
5. To put your pet to sleep- at some point, the pet would need to rest so it needs to sleep. on click of the sleep button, the pet goes to sleep. You will notice the pet's eyes will now be closed and the text content of the previously sleep button will be changed to awaken. This increases the value of the sleep meter.
6. To awaken your pet- when the pet is asleep, you can awaken the pet by clicking on the `awaken` button.
7. if the value of the happiness meter gets to `zero`, the pet will die.
8. retrieving your pet - if you have previosly used the app, you can retrieve your pet using the `phone number` you used to create the pet
9. Pet death - If the `happiness meter` gets to `zero`, the pet will `die`. Upon death, a pop-up will appear, showing that the pet has died, why it died and how long it lived.
]

## database-api 
[ The `database` folder contains a `data.json` file and a `manager.mjs` file. The idea of database was implemented to store data such as the pet color, pet name, and the user's number which are all submitted when creating the pet and are stored as json in `data.json`. The `manager.mjs` file is an api that communicates with the database(`data.json`) depending on the operation we want to carry out.

The `manager.mjs` file has different functions in it that performs different tasks.
1. `readFromDatabase()` - This function reads the database and makes a copy of it that we can perform operations with and then make changes(`write to`) to the main database if we are sure our changes are correct.
2. `writeToDatabase()` - This function writes to the database. Essentially, it handles changes made to the database 
3. `insertDoc()` - This function handles `creating` a new pet. It basically takes the data being inputed by the user and stores it in the database. It takes `2 parameters`, `id` which is the user's phone number and the `new pet object` which is the data of the newly created pet.
4. `selectDoc()` - This function `selects` an already exists. This is implemented during the log in. ]

## modularisation
[ Instead of having one long javascript file, i modularised my code by breaking them down into smaller functions that can be grouped up in different pages then i import and export a function or a variable where needed. I did this because it allows for easier maintenability of the code and also makes the whole code easier to understand]

## future-features
[I plan on developing the pet abilities section by giving the user ability to play a game and store points which can be used to save the pet when the pet dies]

