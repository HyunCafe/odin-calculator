# odin-calculator
final project for fundamental portion of TOP
Feat:
HTML
CSS
JS

## Project Timeline

#### Feb 2, 2023
* Initial Commit
* Started project and created basic layout for calculator
* Added feature for neon blue theme
* Improved visual appearance and alignment of cells
* Added button inputs to display and scientific notation
* Improved alignment of cells and visual appearance
* Added pseudo code and ideas to implement

#### Feb 4, 2023
* Added history button and history display
* Found bug, history icon disappears on display input
* Added delete and clear functions

#### Feb 5, 2023
* Fixed bug NaN showing up on any button press
* Fixed bug where Del and History shows in display
* Seperated the small and big windows and blended borders of them
* Made code more readable for inputs and fixed history/NaN bug
* New bug, scientific notation numbers show on first reload and bug exists
* Added multiply and equate features and working out logic for rest
* Verified the features mult, div, sub, add work as intended

#### Feb 6, 2023
* Changed some height to min-height for best practices
* Fixed history button to stay on left
* Added feature for small display
* Numbers when press move from display to small, AC clears small display

#### Feb 7, 2023
##### * Put original script on hold, changed to hiatus due to technical difficulties 
(made the logic more complicated then it should have been, and did not functionally test each feature before working on next)
##### * Re-created script from scratch with simpler logic and Regex. 
(Will test case each feature before moving onto creating more in order to be more efficient, looking at it with fresh eye's made me realize it was better to just start the logic over)
* Re-added delete button feature and it works correctly
* Bug where upon AC, display clears but upon operand press numbers show back up as if not deleted.
* Fixed the issue by adjusting the clear function settings.
* Re-added percent feature, working as intended.
* Added the functionality for the operands to move to the small display upon operator click
* Fixed the bug where the operator does not transfer to the small display
* Made the small display act the same as the windows calculator
* Fixed the bug where only one operand at a time (instead of 12, it will show up as 1 then 2 with the 1 replaced) shows after operator is pressed
* Found two bugs, the history button disappears on clear and calculation decimals are too long
* Added comments for 3 features and 3 bugs to be worked on
* Fixed the bug where subsequent operator equations do not update with new results each time
* Bug: Small window display on 2nd operation reuses old values
* Fixed the bug where multiple calculations do not update new values with new calculations
* Fixed the bug where the small window does not correctly display new calculation values for each subsequent new calculation
* Fixed the bug where 10 + 10 showed as 10 + null10
* Fixed the bug where 10 + 10 + 10 would not calculate correctly before "=" is pressed




## Summary of Key Features:

### Display Features:
Large display for current value and result
Small display for previous value and operator
Decimal support

### Operations:
Basic arithmetic operations (addition, subtraction, multiplication, division)
Ability to chain multiple operations (e.g. 2 + 2 + 2 + 2)
Equal button that performs the last calculation when pressed repeatedly
Delete button to remove the last input
Clear button to reset the calculator

###User Interface:
Buttons with hover effect for visual feedback
Top navigation bar with minimize, hide, and close buttons
Ability to move the calculator around using the top navigation bar.
