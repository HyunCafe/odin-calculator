# odin-calculator (10 weeks into my coding journey)
My final project for the fundamentals portion of TOP is a fully-functional calculator built with pure HTML, CSS, and JavaScript, without the use of any frameworks. This project demonstrates my skills in building complex UI components using vanilla technologies, and showcases my ability to create an intuitive user experience with visual and interactive elements.

What sets my calculator apart from other projects is the attention to detail and the focus on emulating the behavior of a real-world calculator as well as thorough documentation. The calculator features a large display for the current value and result, as well as a small display for the previous value and operator. It supports basic arithmetic operations like addition, subtraction, multiplication, and division, and also allows for chaining multiple operations. 

In terms of user interface, the calculator features buttons with hover effects for visual feedback, and a top navigation bar with minimize, maximize, and close buttons, allowing users to easily move, minimize, or close the calculator. The resizable feature works like the Windows calculator, allowing users to resize the calculator by dragging from any corner, while maintaining aspect ratio. The improved minimize and restore feature remembers the last position and size of the calculator, allowing for a seamless user experience.

I also added some unique features to further enhance the experience, such as the Windows desktop simulation, complete with a search box and enhanced hover effects over icons. Additionally, the right-click menu shows up at the user's location, just like on the Windows desktop, rather than as a static menu, creating a more realistic experience.

Overall, this project required a lot of hard work/persistance, creativity, and attention to detail. It showcases my ability to create high-quality, production-ready projects using only pure HTML, CSS, and JavaScript, without relying on external frameworks.

![Project Animation](assets/Animation.gif)
<p align="center">
<a href="https://hyuncafe.github.io/odin-calculator/" target="_blank">Live Link</a>
</p>

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
* History function that shows the history of arithmetic calculations in an overlay, similar to the Windows calculator.

### User Interface:
* Buttons with hover effect for visual feedback
* Top navigation bar with minimize, hide, and close buttons
* Ability to move the calculator around using the top navigation bar.
* Resizing feature works like the Windows calculator, with the ability to resize the calculator by dragging from any corner and maintains aspect ratio.
* Improved minimize and restore feature that remembers the last position and size of the calculator
* Maximize button that expands the calculator to fill the screen and remembers the last position and size of the calculator
* Right click menu that shows up where the user last clicked, like the Windows desktop right-click menu. (Disabled Browser Right Click so this feature can be seen)
* Windows desktop simulation with a search box and enhanced hover effect over icons for aesthetics
* Desktop icon simulation look, with a calculator desktop icon that restores the calculator if it was minimized or closed
* Start date and start time shown in real time like the desktop in Windows
* Window logo showing a simulated overlay like the Windows start menu does

------------
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
* Fixed bug where upon minimize after resizing, a duplicate calculator would be left behind

#### Feb 16, 2023:
* Refactor: Refactored the code more to improve its structure and performance.
* Refactor: Further refactored the code to remove redundancies and improve its efficiency.
* Refactor: Attempted to solve bug of resizer corner options moving the mouse while resizing by trying different approaches.

#### Feb 17, 2023:
* Doc: Fixed comments in the code for better understanding and maintenance.
* Feat: Completed the resize feature and direction to mimic windows calc, improving the calculator's functionality.
* Refactor: Deleted unneeded code lines and continued working on improving the resizer function.
* Fix: Fixed the restore function for close, adding flex display to improve its appearance and usability.
* Refactor: Simplified the code and finalized the resizer and moving logic to improve the calculator's stability and user experience.

#### Feb 19, 2023:
* Add: Added Railway font

#### Feb 21, 2023:
* Style: Changing style to make numbers grow and shrink responsively
* Style: Changed theme more aesthetic, increased max width and height of calculator
* Style: Edited min heights for top navbar, made more aesthetic changes
* Refactor: Simplified style, got rid of keyframes, enlarges resizers
* Style: Changed placeholder color
* Bug: need to fix shrink responsiveness, growth works fine


#### Feb 22, 2023:
* Refactor: Changed var to percentages for more responsiveness
* Fix: Fixed issue with NE resizer, grows going east and shrinks west now
* Fix: Made calc cell btns responsive, did work around to achieve result
* Fix: Truly fixed responsive growth adding align-self stretch on calc row
* Fix: Had to fix bug where decimal did not work anymore, edited regex and else statement in operand function
* Fix: Fixed = button no longer working due to removing its class name, simply added another param to buttons selector
* Refactor: made top draggable portion more responsive by adjusting from topnavbar to portion of top of the whole calculator
* Refactor: Got rid of some useless code, topnav and comments
* Style: Changed font-size for topnav buttons so its more responsive
* Add: Added default size on page load so its uniform across view ports
------------

#### Feb 23, 2023:
* Add fake windows right click settings
* Add CSS styling and material icon for the right click sim
* Add spacer separator for aesthetics to better mimic windows right click menu
* Refactor code with BEM naming conventions
* Format readme for easier reading
* Refactor bulletins format to story form, add and resolve a challenge
* Fix issue with maximize button that defaults to domload calc position on the 2nd click
* Fix issue with calc not minimizing after the 2nd attempt
* Fix maximize feature to store last location and size and restore on the 2nd click
* Add feature for right click menu to show on user location, but encounter issues
* Fix right click menu issue simply by changing menu css to absolute position
* Fix: Adjust right-click menu positioning to be centered on click location and disabled browser right-click menu
* Fix: Made it so user can't highlight text which ruins the immersive experience

#### Feb 24, 2023:
* Update README.md with latest changes

#### Feb 26, 2023:

* Refactor: Remove unused letter in code
* Fix: Add definition for 'ismousedown' variable required in strict mode
* Validator: Run and fix issues found by HTML validator
* Add: Implement material icons and style fake overlay for start menu
* Fix: Correct toggle behavior for overlay in start menu
* Fix: Fix toggle behavior for overlay in start menu
* Add: Add strict mode and implement overlay function for start menu
* Style: Work on overlay style for start menu
* Add: Implement HTML layout for start menu popup
* Add: Add desktop icon for calculator and implement restore feature
* Refactor: Remove unnecessary code
* Add: Format code with prettier and add desktop icons
* Add: Implement wifi and speaker icons and style them
* Add: Implement JS to get real time and date

####  Feb 27, 2023:
* Feat: Work on implementing history feature, including writing out pseudo code
* Add: Implement styling for history overlay and position relative to calculator
* Add: Implement history overlay toggle functionality and rename 'windowoverlay' function
* Feat: Finish implementing history feature, making it similar to Windows desktop calculator
* Fix: Correct CSS selector to target calculator button for Windows 10 style positioning
* Add: Add GIF to README.md to demonstrate functionality
* Remove: Remove unused images
* Style: removed border from calc logo

####  March 25, 2023:
* Add: added breakpoints and refactor to BEM on footer
## Challenges:

------------

### Main and Small Display Challenge
* When working on the calculator project, I encountered challenges with displaying the numbers and calculations on the main and small displays in a clear and organized manner. 

* Initially, I had placed the small display within the main display, which caused issues with the positioning and visibility of the numbers. Despite my efforts to adjust the position of the small display and its CSS properties, this didn't fully resolve the issue.

* After researching, and experimenting with different solutions, I finally achieved the desired result by blending the borders of the main and small displays together and separating the two windows to mimic the layout of the Windows calculator. 

* This provided a clear and organized way of displaying the numbers and calculations, and it resolved the issues that I had been facing. Overall, this was a challenging problem to solve, but it taught me a lot about how to manipulate CSS properties and use design principles to create a functional and visually appealing user interface.

------------

### Chaining Operations Challenge
* When working on the calculator's ability to chain multiple operations together, I faced an issue where the calculator was not able to perform a series of operations (e.g. 2 + 2 + 2 + 2). 

* I initially tried to solve this problem by creating a single operation variable to hold the current operation being performed and updating it as new numbers were entered. 

* I also explored using an array to hold the entered numbers and operations, and then iterating through the array to calculate the result. However, both approaches did not fully solve the issue and added unnecessary complexity to the code.

* Finally, I was able to achieve the desired result by keeping track of the current operation and number entered separately, and then storing the previous operation and number in separate variables when a new operation was initiated. This allowed for chaining multiple operations together, while also keeping the code simple and readable. With this solution, the calculator was able to perform multiple operations in a chain, with each operation being performed correctly and the final result being calculated accurately.

------------

### Equal Button Challenge
* I encountered an issue where pressing the equal button repeatedly did not perform the last calculation. 

* I tried several different solutions, including using a flag variable to keep track of the last calculation and adding an event listener to the equal button, but none of these solutions fully addressed the problem.

* After some further experimentation and research (spoke to a mentor), I found a solution that involved storing the last num2 value and calculating the result. Then, I added a check to see if num2 is falsy, and if so, I set it to the last num2 value before recalculating the result.

* To implement this solution, I modified the equalButton function to include this check and properly recalculate the last operation when the equal button is pressed repeatedly. This final solution proved to be effective and solved the problem of the calculator not performing the last calculation when the equal button was pressed repeatedly.

------------

### Responsive Challenge
* When I encountered the issue of the responsive growth of the calculator cells exceeding the parent container, my initial approach was to use media queries to adjust the cell size based on screen size, but that solution did not work. 

* I then tried using the aspect-ratio property to maintain a square shape for the cells, which worked but still caused the growth rate to exceed the parent container.

* I continued to experiment with different solutions and tried using flex-basis for the cell size, which allowed for responsive growth in the primary axis, but the cells were not growing along the cross axis. 

* After researching and experimenting with different solutions, I discovered that setting align-self: stretch for the calculator rows resolved the issue and allowed for responsive growth in both the primary and cross axes. It was a simple solution that effectively addressed the issue.

* In addition to the above solution, I also needed to prevent the calculator buttons from growing outside of the parent container when the calculator is resized to its maximum width but minimum height. To accomplish this, I removed the padding from the .calc-cell class. This allowed the buttons to resize proportionally to the container while still remaining within its bounds.

------------

### Resizing and Dragging Challenge (Hardest Part of all)
* When I first attempted to implement resizing functionality for the calculator, I tried to calculate the new width and height of the calculator based on the difference between the mouse position and the position of the handle clicked on. However, I ran into difficulties when trying to resize the calculator in a direction that mirrored the handle clicked on, especially with the ne and se handles. 

* I tried various solutions, including adding additional if statements and adjusting the code in different ways, but none of them fully addressed the problem.

* After researching the issue and seeking guidance from online forums, I realized that the logic needed to be separated depending on which resizing corner was clicked on. I added an additional else if statement to address the issue, which allowed the calculator to be resized in the intended direction.

* However, a new problem emerged where the calculator was being moved and resized when the user clicked on a resize handle. To fix this, I used separate event listeners for moving and resizing the calculator. The mousedown event on the top navigation bar now triggers the code to move the calculator, while the mousedown event on the resize handle triggers the code to resize the calculator.

* To ensure that the calculator is only moved when the user intends to move it, I added a check for a single-click event on the top navigation bar. Additionally, I needed to expand the active draggable area without shifting other elements. I accomplished this by checking the y-coordinate of the mouse click and verifying that it falls within a certain range at the top of the calculator. This ensures that the calculator is only moved when the user clicks within the top 8% of the calculator, allowing for a larger draggable area without affecting other elements.

* Finally, I thoroughly tested the solution and verified that the resizing functionality for the calculator was working as intended. 

------------

### Second Minimize Attempt Bug
* When working on the calculator project, I noticed that there was an issue with minimizing the calculator after it had been resized, or upon 2nd minimize attempt. The calculator would not minimize correctly, and it seemed that the minimizeCalculator() function was not working as intended. I checked the browser console for errors or warnings, but found none.

* To investigate the issue, I used the Chrome DevTools to inspect the element and found that the minimized class was being added correctly when trying to minimize the calculator after resizing it. So I realized that the problem was not with the addition of the class, but with the minimizeCalculator() function itself.

* To fix the issue, I updated the minimizeCalculator() function to save the current position of the calculator before adding the minimized class. Then, when the minimize button is clicked again, the original size of the calculator is restored. However, even after updating the function, the calculator still wouldn't minimize correctly when it had been resized.

* Finally, I came up with a solution by adding an anonymous arrow function to the minimizeBtn event listener and removing the minimizeCalculator() function entirely. This solved the issue, and the calculator now minimizes correctly even after being resized. It is important to note that the calculator now saves its last current location and sizing simply because we are adding and removing the display style from none.

------------

### Maximize Challenge
* After finishing the minimize challenge, I moved on to the maximize challenge. My initial idea was to simply expand the calculator to fill the screen when the maximize button was clicked, but I quickly realized that this approach would cause the calculator to be off-center.

* To solve this problem, I tried setting the left and top properties of the calculator to 0, which did center the calculator, but it didn't look good on smaller screens. So, I decided to center the calculator by setting its left and top properties to 50% and then using the transform property to translate it back to the center of the screen. This approach worked well and looked good on all screen sizes.

* Next, I noticed that when I restored the calculator to its original size, it would always return to the same position on the screen, which was not necessarily the position it was in before it was maximized. To solve this problem, I first tried setting a default size and position for the calculator and manually aligning it with the initial DOM load calculator position. While this worked, it was not very satisfying, as it didn't allow the calculator to return to its exact previous size and position.

* So, I researched how to save the calculator's last known position and size, and I found that I could use the offsetLeft, offsetTop, offsetWidth, and offsetHeight properties to do this. With this information, I was able to create a function that would save the calculator's original size and position, and then restore them when the maximize button was clicked again. I thoroughly tested this solution and was satisfied with the final result.

* Overall, I found the maximize challenge to be a fun and rewarding experience, as it allowed me to learn more about how to manipulate DOM elements and create more complex user interfaces.

------------
