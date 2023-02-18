# odin-calculator
final project for fundamental portion of TOP
Feat:
HTML
CSS
JS

## Project Timeline

#### Feb 2, 2023
* Initial Commit: Started the calculator project and created the basic layout
* Basic layout and appearance: Improved the visual appearance and alignment of cells
* Theme addition: Added neon blue theme to the calculator
* Display input: Added button inputs to the calculator display and enabled scientific notation
* Alignment improvement: Improved the visual appearance and alignment of cells
* Project planning: Added pseudo code and ideas for future implementation

#### Feb 4, 2023
* Implement history feature and display
* Debugging: history button disappears on display input
* Implement delete and clear functions

#### Feb 5, 2023
* Fixed NaN display bug on button press
* Resolved Del and History display issue
* Improved UI by separating small and big display windows with blended borders
* Improved code readability for inputs and resolved history/NaN bugs
* Addressed new bug with scientific notation numbers appearing on first reload
* Implemented working multiply and equate features and continued logic development for remaining features
* Verified the functionality of multiply, divide, subtract, and add features.

#### Feb 6, 2023
* Changed height properties to min-height for better maintainability and performance
* Resolved issue with history button not staying on the left-side as intended
* Implemented small display feature for improved functionality
* Adjusted clear functionality to clear small display upon pressing "AC" button
* Improved number transfer from display to small display for better user experience

#### Feb 7, 2023
##### * Put original script on hold and switched to a new approach
      *  Realized the original script had a complicated logic and did not adequately test each feature before moving on to the next.
      *  Started a new script with a simpler logic and using Regex for better efficiency.
* Started a new script with a simpler logic and using Regex for better efficiency.
* Re-added and fixed delete button feature
* Re-added the delete button feature to the new script
* Fixed a bug where the display would clear upon "AC" press, but numbers would reappear after an operand press.
* Re-added and fixed percent feature
* Re-added the percent feature to the new script.
* Verified that the feature is working as intended.
* Added operand transfer to small display
* Added the functionality for operands to move to the small display after an operator is clicked.
* Fixed bugs in small display
* Fixed a bug where the operator was not transferred to the small display.
* Fixed a bug where only one operand would show up on the small display instead of two.
* Added comments for future bug fixes and improvements
* Added comments for 3 features and 3 bugs to be worked on in the future.
* Fixed issues with calculation updates and display of results
* Fixed a bug where subsequent operator equations did not update with new results each time.
* Fixed a bug where the small window display reused old values on the second operation.
* Fixed a bug where multiple calculations did not update with new values.
* Fixed a bug where the small window did not correctly display new calculation values for each subsequent new calculation.
* Fixed a bug where the result of 10 + 10 was displayed as "10 + null10".
* Fixed a bug where 10 + 10 + 10 did not calculate correctly before the "=" button was pressed.

#### Feb 9, 2023
* Implemented the ability to repeat the last calculation when the "=" button is pressed.

#### Feb 10, 2023
* Refactored and improved the code readability by adding meaningful comments and renaming anonymous functions to named functions.

#### Feb 12, 2023
* Added a top navigation bar to allow for customization of the calculator size.
* Removed redundant code to optimize performance.
* Enabled the calculator to automatically perform the last calculation each time the "=" button is pressed.
* Added several planned features to be implemented in the future to the bottom comments section.

#### Feb 13, 2023
* Updated the project's README file to keep track of important features and updates.
* Implemented the ability to move the calculator by adding a feature for the movable calculator and improved the existing comments for better understanding.

#### Feb 14, 2023
* Improved the visual appearance of the calculator by adjusting the border neon aesthetic size.
* Implemented the ability to minimize, maximize, and close the calculator, although further fine tuning is required.

#### Feb 15, 2023
* Refactored the code for layout clarity and added comments for future bug fixes and improvements.
* Polished the Windows desktop look further to improve its visual appearance.
* Enhanced the hover effect over bottom navbar icons to better simulate the Windows desktop.
* Added the search box simulated look from the Windows desktop.
* Fixed a bug where moving the calculator outside of the screen caused a scroll option to appear and shifted elements on the site.
* Fixed a bug where the clickable area for the top nav bar was too small, by increasing the height offset of other elements and using relative positions with negative position values as a workaround.
* Refined the minimize feature to improve functionality and user experience.
* Added feature to remember the last position of the calculator when minimized and restored.
* Fixed a bug in the top nav bar double-click behavior.
* Refactor: Deleted unnecessary code, Added restore option for closed state of calculator.
* Implemented resizing features for all four corners of the calculator.
* Styled the corners to be invisible, but to prompt the resizing cursor when hovered over.
* Refined the logic for maximum and minimum sizes when resizing.
------------

## Summary of Key Features:

### Display Features:
* Large display for current value and result
* Small display for previous value and operator
* Decimal support

### Operations:
* Basic arithmetic operations (addition, subtraction, multiplication, division)
* Ability to chain multiple operations (e.g. 2 + 2 + 2 + 2)
* Equal button that performs the last calculation when pressed repeatedly
* Delete button to remove the last input
* Clear button to reset the calculator

### User Interface:
* Buttons with hover effect for visual feedback
* Top navigation bar with minimize, hide, and close buttons
* Ability to move the calculator around using the top navigation bar.
* Movable area for the calculator that expands and contracts as the calculator is moved
* Improved minimize and restore feature that remembers the last position of the calculator
* Windows desktop simulation with a search box and enhanced hover effect over icons for aesthetics

------------

## Challenges:

##### Main and Small Display Challenge
* The main and small displays of the calculator posed a challenge in displaying the numbers and calculations in a clear and organized manner.
* Initially, the small display was placed within the main display, which caused issues with the positioning and visibility of the numbers.
* I tried to fix this by adjusting the position of the small display and changing its CSS properties, but this didn't fully resolve the issue.
* I also experimented with different methods of displaying the numbers and calculations, including using separate displays for each and incorporating a history feature, but these approaches didn't fully meet the desired outcome.
* Finally, I achieved the desired result by blending the borders of the main and small displays together and separating the two windows to mimic the layout of the Windows calculator, which provided a clear and organized way of displaying the numbers and calculations.

##### Chaining Operations Challenge
* Faced an issue with the ability to chain multiple operations (e.g. 2 + 2 + 2 + 2) together
* Attempted to solve the issue by creating a single operation variable to hold the current operation being performed, and updating it as new numbers were entered
* Explored using an array to hold the entered numbers and operations, and then iterating through the array to calculate the result
* Found that both approaches did not fully solve the issue and added unnecessary complexity
* Finally, achieved the desired result by keeping track of the current operation and number entered separately, and then storing the previous operation and number in separate variables when a new operation was initiated. This allowed for chaining multiple operations together, while also keeping the code simple and readable.

##### Equal Button Challenge
* Ran into an issue where pressing the equal button repeatedly did not perform the last calculation.
* Tried several different solutions, including using a flag variable to keep track of the last calculation and adding an event listener to the equal button.
* Eventually came up with a solution to store the last num2 value and calculate the result, and then check if num2 is falsy and if so, set it to the last num2 value before calculating the result again.
* Final solution involved modifying the equalButton function to include this check and properly recalculate the last operation when the equal button is pressed repeatedly.

##### Resizing Challenge (Hardest Part of all)
* Tried to resize the calculator by calculating the new width and height of the calculator based on the difference between the mouse position and the position of the handle clicked on.
* Encountered difficulty when resizing the calculator in a direction that mirrored the handle clicked on, particularly with the ne and se handles.
* Researched similar issues and looked for guidance in online forums, but didn't find a solution that fully addressed the problem.
* Tried various solutions, including adding additional if statements and adjusting the code in different ways, but none of them fully addressed the problem.
* Realized that the logic needed to be separated depending on which resizing corner was clicked on.
* Added an additional else if statement to address the issue, which allowed the calculator to be resized in the intended direction.
* The code now had a problem where the calculator was being moved instead of being resized when the user clicked on a resize handle.
* The updated code fixes this by using separate event listeners for moving and resizing the calculator.
* The mousedown event on the top navigation bar triggers the code to move the calculator, while the mousedown event on the resize handle triggers the code to resize the calculator.
* The code also checks for a single-click event on the top navigation bar to ensure that the calculator is only moved when the user intends to move it, and not when they double-click or click and drag.
* With these updates, the calculator is only moved when the user intends to move it and resized when the user intends to resize it.
* Thoroughly tested the solution and verified that the resizing functionality for the calculator was working as intended.


