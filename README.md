<h1 align="center">:pencil: Minimize Finite State Machines :pencil:</h1>


##  A finite state machine consists of: :heavy_exclamation_mark:

* Finite sets S, R y Q, where S is a finite input alphabet, R is a finite output alphabet and Q is a set of states.
* A state transition function f that gives the next state of M in terms of the current state and the next input symbol.
* An output function g that gives the next output symbol of M in terms of the current state and the next input symbol.
* A predetermined initial state q(0) = q1, where q1 ∈ Q, in which M is placed prior to instant t = 0.
<img width="773" alt="Captura de Pantalla 2022-10-02 a la(s) 10 35 39 a m" src="https://user-images.githubusercontent.com/80568091/193462509-80160483-21c1-42a4-b39e-bb08b622b2ff.png">


# Mealy Machine :books:
### Definition:
A transition assigned finite-state machine is 6−tuple where:
* Q is a finite set of internal states
* S is a finite input alphabet
* R is a finite output alphabet
* f is the state transition funcion f : Q × S −→ Q g is the output function g : Q × S −→ R
* q1 ∈ Q is the initial state
<img width="725" alt="Captura de Pantalla 2022-10-02 a la(s) 10 38 26 a m" src="https://user-images.githubusercontent.com/80568091/193462636-d7bb32ab-5c4e-4b98-be08-a3493298b3f5.png">

# Moore Machine :books:
### Definition
A state assigned finite-state machine is 6−tuple donde:
* Q is a finite set of internal states
* S is a finite input alphabet
* R is a finite output alphabet
* f is a state transition functionf :Q×S−→Q h is an output function h : Q −→ R
* q1 ∈ Q is the initial state
<img width="676" alt="Captura de Pantalla 2022-10-02 a la(s) 10 40 45 a m" src="https://user-images.githubusercontent.com/80568091/193462763-9cf77720-ad69-4d1f-822f-9ec1e1c65184.png">

# Application :white_check_mark:
:link: Link: https://lively-mud-06c994510.1.azurestaticapps.net
## Description
This application allows us to verify if an automatan is connected, and then find its reduced machine (if it is the case).
### The inputs we need:
* Select if we are going to introduce a Mealy machine or Moore machine.
* The alphabet.
* The number of states.
* Fill the table with all transitions and outputs.
### Capture of the app :arrow_right:
<img width="1168" alt="Captura de Pantalla 2022-10-02 a la(s) 11 16 55 a m" src="https://user-images.githubusercontent.com/80568091/193464679-b1e3e407-740c-4622-90c4-6220ab69b2a2.png"></img>
### Output :heavy_check_mark:
<img width="603" alt="Captura de Pantalla 2022-10-02 a la(s) 11 06 53 a m" src="https://user-images.githubusercontent.com/80568091/193464603-6de5bedc-d1f0-48dd-9709-f21cf8e04bb9.png"></img>






