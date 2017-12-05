# RobotApp

The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units. There are no other obstructions on the table surface. The robot is free to roam around the surface of the table, but must be prevented from falling to destruction. Any movement that would result in the robot falling from the table must be prevented, however further valid movement commands must still be allowed. Create an application that can read in commands of the following form -

    PLACE X,Y,F
    MOVE
    LEFT
    RIGHT
    REPORT
Where PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH, EAST or WEST. The origin (0,0) can be considered to be the SOUTH WEST most corner. It is required that the first command to the robot is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed. Where MOVE will move the toy robot one unit forward in the direction it is currently facing. Where LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without changing the position of the robot. Where REPORT will announce the X,Y and F of the robot. This can be in any form, but standard output is sufficient. A robot that is not on the table can choose to ignore the MOVE, LEFT, RIGHT and REPORT commands. Input can be from a file, or from standard input, as the developer chooses. Provide test data to exercise the application. It is not required to provide any graphical output showing the movement of the toy robot.

Constraints: The toy robot must not fall off the table during movement. This also includes the initial placement of the toy robot. Any move that would cause the robot to fall must be ignored.

# Example

*Input and Output:

a)----------------
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH

b)----------------
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST

c)----------------
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
