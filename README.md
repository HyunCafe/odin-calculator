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
