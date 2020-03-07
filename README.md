# valid-chess-moves-api

Backend service for the valid-chess-moves-web-app

## Instalation

- At the terminal, run the following commands:
  - Clone the project at a folder of your preference: `git clone https://github.com/caieu/valid-chess-moves-api.git`
  - Go to project folder: `cd valid-chess-moves-api`
  - Run `npm install` to install the project dependencies
- Create a `.env` file at project root folder with the variables `PORT` `TEST_PORT` `DB_CONNECTION` `TEST_DB_CONNECTION`

````.env
PORT=7000
TEST_PORT=7001
DB_CONNECTION=mongodb://localhost/validChessMoves
TEST_DB_CONNECTION=mongodb://localhost/validChessMovesTest
````

## Run the application

- At the terminal, run the following commands:
  - At project root folder, run `npm run webpack` to compile the typescript files
  - Open a new tab, and run `npm start` to start the server

## Run the Tests

- At the terminal, run the following commands at project root folder: `npm test`

## Folder Structure

```
.
├── dist                    # Compiled files
├── src                     # Source files
    ├── __tests__           # Tests files
    ├── common              # Common files, like helpers, interfaces...
    ├── database            # Database files, where the database is initialized
    ├── models              # Model files for the database documents
    ├── routes              # Route files for the API routes
    ├── services            # Service files for chess pieces
    └── README.md           # README file with project instructions
```

## Algorithm (Knight chess piece)

- A knight can move either 2 squares horizontally and 1 square vertically OR 2 squares vertically and 1 square horizontally
- At the beginning, we create a list for the possible positions with the initial position inside
- For `t` to turns, we iterate `t` times
- We create a temporary list for all possible move positions
- For each possible position at the list, we find a list of possible moves
- To find the list of possible moves, we create a list with all the possible positions from a initial position following the knight movement pattern and we filter that list, looking only for positions that are inside of a 8x8 board
- After that, we get only the unique possible positions, and concatenate with the list of the all possible positions
- At end, the list of possible positions is the list with all possible positions
- Repeat for `t` times
- Return the list of possible positions
