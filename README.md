## The Challenge
Using the PokeApi, please create table that displays the following information:
- Name
- Moves
- Type
- Sprite
- Is a good pokemon?

In the Name column, display the name of the Pokemon.

In the Moves column, display a list of comma seperated moves sorted in alhabetical order

In the Type column, create a tag for each type the pokemon has and display in a comma seperated list. Tags should be colored according to the type of the pokemon:
    - fire = red
    - water = blue
    - ice = light blue
    - flying = white
    - lightning = yellow

In the Sprite column, please create the following flow:
    - When the table first loads a button should be displayed with the text "View Pokemon"
    - When a user presses the "View Pokemon" button, the row should update to show the front (default) image and a button with the text "Rotate"
    - When a user pressed the "Rotate" button, the sprite shown should change to the back (default) image

In the Is A Good Pokemon column, implement the following ranking system:
    - if the total of all base stat values is less than or equal to 400 display the text "Bad Pokemon"
    - if the total of all base stat values is between 401 and 499 display the text "Average Pokemon"
    - if the total of all base stat values is greater than or equal to than 500 display the text "Good Pokemon"

## Note
Please use the following Pokemon for this challenge:
- Charmander
- Mudkip
- Raichu
- Articuno