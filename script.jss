/* ===== PART 1: VARIABLES AND CONDITIONALS ===== */

// Variable declarations with different types
let tasks = []; // Array to store all tasks
let taskIdCounter = 1; // Counter for unique task IDs
const maxTasks = 50; // Constant for maximum allowed tasks
var currentUser = "Student"; // User identifier

// Task priority levels
const PRIORITY_LEVELS = {
    high: { label: "High", color: "#f44336", value: 3 },
    medium: { label: "Medium", color: "#ff9800", value: 2 },
    low: { label: "Low", color: "#4CAF50", value: 1 }
};

/* ===== PART 2: CUSTOM FUNCTIONS ===== */

// Function 1: Add a new task with validation
function addTask() {
    // Get input values using DOM interaction
    const taskInput = document.getElementById('taskInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    // Conditional validation
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    // Check maximum tasks limit
    if (tasks.length >= maxTasks) {
        alert(`Maximum of ${maxTasks} tasks allowed!`);
        return;
    }

    // Create new task object
    const newTask = {
        id: taskIdCounter++,
        text: taskText,
        priority: priority,
        dateAdded: new Date().toLocaleString()
    };

    // Add task to array
    tasks.push(newTask);

    // Clear input field
    taskInput.value = '';

    // Update displays
    displayTasks();
    updateStatistics();

    // Conditional feedback based on priority
    if (priority === 'high') {
        console.log('High priority task added - consider tackling this first!');
    } else if (priority === 'medium') {
        console.log('Medium priority task added - schedule this appropriately.');
    } else {
        console.log('Low priority task added - handle when you have extra time.');
    }
}

// Function 2: Calculate task statistics
function calculateTaskStatistics() {
    const stats = {
        total: tasks.length,
        highPriority: 0,
        mediumPriority: 0,
        lowPriority: 0,
        averagePriority: 0
    };

    // Conditional counting and calculation
    if (tasks.length > 0) {
        let prioritySum = 0;

        // Count tasks by priority
        tasks.forEach(task => {
            switch(task.priority) {
                case 'high':
                    stats.highPriority++;
                    prioritySum += PRIORITY_LEVELS.high.value;
                    break;
                case 'medium':
                    stats.mediumPriority++;
                    prioritySum += PRIORITY_LEVELS.medium.value;
                    break;
                case 'low':
                    stats.lowPriority++;
                    prioritySum += PRIORITY_LEVELS.low.value;
                    break;
            }
        });

        // Calculate average priority
        stats.averagePriority = (prioritySum / tasks.length).toFixed(2);
    }

    return stats;
}

/* ===== PART 3: LOOP EXAMPLES ===== */

// Loop Example 1: Display tasks using forEach loop
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks

    // forEach loop to iterate through tasks
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.className = `task-item ${task.priority}-priority`;
        listItem.innerHTML = `
            <span class="task-text">${task.text}</span>
            <span class="task-priority">${PRIORITY_LEVELS[task.priority].label}</span>
        `;
        taskList.appendChild(listItem);
    });
}

// Loop Example 2: Update statistics using for loop
function updateStatistics() {
    const stats = calculateTaskStatistics();
    const statsContainer = document.getElementById('taskStats');
    
    // Clear existing stats
    statsContainer.innerHTML = '';

    // Array of stat information
    const statItems = [
        { label: 'Total Tasks', value: stats.total },
        { label: 'High Priority', value: stats.highPriority },
        { label: 'Medium Priority', value: stats.mediumPriority },
        { label: 'Low Priority', value: stats.lowPriority },
        { label: 'Avg Priority', value: stats.averagePriority }
    ];

    // For loop to create stat cards
    for (let i = 0; i < statItems.length; i++) {
        const statCard = document.createElement('div');
        statCard.className = 'stat-card';
        statCard.innerHTML = `
            <div class="stat-number">${statItems[i].value}</div>
            <div class="stat-label">${statItems[i].label}</div>
        `;
        statsContainer.appendChild(statCard);
    }
}

/* ===== PART 4: DOM INTERACTIONS ===== */

// DOM Interaction 1: Clear all tasks
function clearAllTasks() {
    // Conditional confirmation
    if (tasks.length === 0) {
        alert('No tasks to clear!');
        return;
    }

    if (confirm('Are you sure you want to clear all tasks?')) {
        tasks = []; // Clear array
        taskIdCounter = 1; // Reset counter
        
        // Update DOM elements
        document.getElementById('taskList').innerHTML = '';
        updateStatistics();
        
        console.log('All tasks cleared successfully');
    }
}

// DOM Interaction 2: Run demonstration of JavaScript concepts
function runDemo() {
    const output = document.getElementById('demo-output');
    let demoText = '';

    demoText += '=== JAVASCRIPT CONCEPTS DEMONSTRATION ===\n\n';

    // Variables demonstration
    demoText += '1. VARIABLES:\n';
    demoText += `Current user: ${currentUser}\n`;
    demoText += `Task counter: ${taskIdCounter}\n`;
    demoText += `Max tasks allowed: ${maxTasks}\n`;
    demoText += `Current task count: ${tasks.length}\n\n`;

    // Conditionals demonstration
    demoText += '2. CONDITIONALS:\n';
    if (tasks.length === 0) {
        demoText += 'Status: No tasks available\n';
    } else if (tasks.length < 5) {
        demoText += 'Status: Light workload\n';
    } else if (tasks.length < 15) {
        demoText += 'Status: Moderate workload\n';
    } else {
        demoText += 'Status: Heavy workload\n';
    }

    // Ternary operator example
    const taskStatus = tasks.length > 0 ? 'You have tasks to complete' : 'No tasks yet';
    demoText += `Task status: ${taskStatus}\n\n`;

    // Functions demonstration
    demoText += '3. FUNCTIONS:\n';
    demoText += 'Custom functions created:\n';
    demoText += '- addTask(): Adds new tasks with validation\n';
    demoText += '- calculateTaskStatistics(): Computes task metrics\n\n';

    // Loops demonstration
    demoText += '4. LOOPS:\n';
    demoText += 'For loop counting 1 to 5: ';
    for (let i = 1; i <= 5; i++) {
        demoText += i + ' ';
    }
    demoText += '\n';

    // While loop example
    demoText += 'While loop countdown: ';
    let countdown = 3;
    while (countdown > 0) {
        demoText += countdown + ' ';
        countdown--;
    }
    demoText += 'Go!\n\n';

    // DOM Interactions demonstration
    demoText += '5. DOM INTERACTIONS:\n';
    demoText += '- Reading input values from form elements\n';
    demoText += '- Dynamically creating and updating HTML elements\n';
    demoText += '- Event handling through button clicks\n';
    demoText += '- Manipulating element styles and classes\n\n';

    demoText += '=== END DEMONSTRATION ===';

    // Display the demo output
    output.textContent = demoText;
}

// DOM Interaction 3: Initialize the application
function initializeApp() {
    // Set up initial display
    displayTasks();
    updateStatistics();
    
    // Add event listener for Enter key on task input
    document.getElementById('taskInput').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    console.log('Task Manager initialized successfully');
    console.log(`Welcome, ${currentUser}!`);
}

// Initialize the app when page loads
window.addEventListener('load', initializeApp);

/* ===== ADDITIONAL DEMONSTRATION FUNCTIONS ===== */

// Bonus: Array methods and advanced loops
function demonstrateAdvancedLoops() {
    console.log('=== ADVANCED LOOP DEMONSTRATIONS ===');
    
    // Map example - transform task priorities to numbers
    const priorityNumbers = tasks.map(task => PRIORITY_LEVELS[task.priority].value);
    console.log('Priority values:', priorityNumbers);

    // Filter example - get only high priority tasks
    const highPriorityTasks = tasks.filter(task => task.priority === 'high');
    console.log('High priority tasks:', highPriorityTasks);

    // Reduce example - sum all priority values
    const totalPriorityValue = tasks.reduce((sum, task) => 
        sum + PRIORITY_LEVELS[task.priority].value, 0);
    console.log('Total priority value:', totalPriorityValue);

    // For...of loop example
    console.log('Tasks using for...of loop:');
    for (const task of tasks) {
        console.log(`- ${task.text} (${task.priority})`);
    }
}

// Make the advanced demo function available globally
window.demonstrateAdvancedLoops = demonstrateAdvancedLoops;
