# Message board data store API

An API to store game data. It allows people to register as users of the API and store their games in the API.

The API allows users to get, create, update, or delete their games.

## API URL
[https://sei-sudoku-api.herokuapp.com](https://sei-sudoku-api.herokuapp.com)

## Demo
You can find the appication using this api in the link below:
-   [Github Repository](https://github.com/clonehuy10/sudoku-client)
-   [Sudoku](https://clonehuy10.github.io/sudoku-client/#/)

## API End Points
#### Authenciation
| Verb   | URI Pattern            |
|--------|------------------------|
| POST   | `/sign-up`             |
| POST   | `/sign-in`             |
| DELETE | `/sign-out`            |
| PATCH  | `/change-password`     |

#### Event Management
| Verb   | URI Pattern            |
|--------|------------------------|
| POST   | `/games`               |
| GET    | `/games`               |
| GET    | `/games/:id`           |
| PATCH  | `/games/:id`           |
| DELETE | `/games/:id`           |

All data returned from API actions is formatted as JSON.

## ERD
![ERD](https://i.imgur.com/CPe1Irp.png)

## Development process
This is a simple api to store game data as an array and it current state. It was set up easily in 15 minutes with GA template.


## Unsolved Problems
-   I want to add more data to user to make ranking board on front-end.
-   I want to add more models for different games, this api is only compatible to store sudoku game board now.

## Disclaimer

This API may be reset or altered at anytime. The future of this API may not
align with the current state and therefore the state your client application
expects. If you would like to maintain a version of this API in its current
state for your future use, please fork and clone the repository and launch it
on heroku.
