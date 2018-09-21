## Chris Bell | Task Planner
For assignment 3, I built a task planner / scheduler website where you can create cards that represent a broad category in which you can append tasks to. You can add a new card by clicking on the "Add Card" button beneath the title. The title, subtitle, and initial task are defaulted and can be edited once created. All the data within the cards themselves are editable (title, subtitle, and tasks) and will update on blur so you don't have to take any extra steps apart from just editing the text like you would normally. You can add a new task via pressing "+" in the "Add Task" section of the cards. It will create a new task, defaulted to "newTask," which you can then edit to your liking. Tasks can be deleted by first deleting the text so just "" remains, and then by pressing the check next to it. Each card must have a task (why would you make a card without tasks in the task scheduler?) so deleting a task within a card with a single task will not work.

## Technical Achievements
- **Tech Achievement 1**: I was able to add on blur events for the title, subtitle, and tasks sections of each card to make the whole process more intuitive to the user and to eliminate having to walk through extraneous steps just to update the tasks or cards.
- **Tech Achievement 2**: I was able to parse a string separated by commas in order to create the list of tasks. In doing so, I also figured out how to manipulate the string when deleting and adding tasks in order for it to appear correctly for the user.
- **Tech Achievement 3**: The whole card and task system is dynamic. Cards can be deleted or created, and it will populate the page in real time accordingly. Plus, I create html elements based on the reading of the string of tasks and alter corresponding html when appropriate.
- **Tech Achievement 4**: Through the use of advanced CSS techniques and Bootstrap, I was able to make the website format properly for use not only on desktops and laptops, but also most mobile devices. 
- **Tech Achievement 5**: I added on click event listeners to the icons throughout the webpage to make the user interactions for intuitive and to add some design to the page so it was not just a wall of text.
### Design/Evaluation Achievements
- **Design Achievement 1**: I used CSS styles to make the page look interesting and make the cards clean and concise through the use of transparency, different text colors, and fonts.
- **Design Achievement 2**: I utilized fontAwesome icons and added them to the "Add Card" button as well as next to each individual task and the "Add Task" section. 
- **Design Achievement 3**: I made sure that the elements dynamically added retained the same format and styles as the pre-existing elements to retain consistency.

