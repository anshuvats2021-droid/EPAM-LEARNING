
// 1. Simple Agent

function simpleAgent() {
    console.log("Hello! I am an AI Agent.");
}


// 2. Intelligent Agent

function intelligentAgent() {
    let temperature = 35;

    if (temperature > 30) {
        console.log("It is hot.");
    } else {
        console.log("Weather is normal.");
    }
}


// 3. Rational Agent

function rationalAgent() {
    let battery = 20;

    if (battery < 30) {
        console.log("Turn on power saving mode.");
    } else {
        console.log("Battery is sufficient.");
    }
}


// 4. Simple Reflex Agent

function reflexAgent(dirty) {
    if (dirty) {
        console.log("Agent: Clean the room.");
    } else {
        console.log("Agent: Room is already clean.");
    }
}


// 5. Model-Based Agent

function modelBasedAgent() {
    let previousState = "Dirty";
    let currentState = "Clean";

    console.log("Previous State:", previousState);
    console.log("Current State:", currentState);
    console.log("Agent updated its internal model.");
}


// 6. Goal-Based Agent

function goalBasedAgent() {
    let goal = "Reach destination";

    console.log("Goal:", goal);
    console.log("Finding the route...");
    console.log("Destination reached!");
}


// 7. Utility-Based Agent

function utilityBasedAgent() {
    let routes = {
        "Route A": 80,
        "Route B": 95,
        "Route C": 70
    };

    let bestRoute = Object.keys(routes).reduce((a, b) =>
        routes[a] > routes[b] ? a : b
    );

    console.log("Best Route:", bestRoute);
}


// 8. Learning Agent

function learningAgent(feedback) {
    if (feedback === "yes") {
        console.log("Good! Continue this approach.");
    } else {
        console.log("Agent needs improvement.");
    }
}


// 9. Rule-Based Agent

function ruleBasedAgent(age) {
    if (age >= 18) {
        console.log("Eligible for voting.");
    } else {
        console.log("Not eligible for voting.");
    }
}


// 10. Decision-Making Agent

function decisionAgent(raining) {
    if (raining) {
        console.log("Take an umbrella.");
    } else {
        console.log("No umbrella needed.");
    }
}


// 11. Memory-Based Agent

function memoryBasedAgent() {
    let memory = [];

    memory.push("User likes JavaScript");
    memory.push("User is learning AI Agents");

    console.log("Agent Memory:", memory);
}


// 12. Planning Agent

function planningAgent() {
    let tasks = [
        "Wake up",
        "Study",
        "Complete homework"
    ];

    console.log("Agent Plan:");

    tasks.forEach(task => {
        console.log(task);
    });
}


// 13. Tool-Using Agent

function toolUsingAgent(a, b) {
    let result = a + b;

    console.log("Agent used calculator tool.");
    console.log("Result:", result);
}


// 14. Problem-Solving Agent

function problemSolvingAgent() {
    let answer = 10 + 20;

    console.log("Problem solved.");
    console.log("Answer:", answer);
}


// 15. Single Agent

function singleAgent() {
    console.log("One agent is performing the task.");
    console.log("Task completed!");
}


// 16. Multi-Agent System

function multiAgentSystem() {
    console.log("Research Agent: Collecting data...");
    console.log("Analysis Agent: Analyzing data...");
    console.log("Writing Agent: Preparing report...");
    console.log("Work completed!");
}


// 17. Simple AI Chatbot

function chatbot(message) {
    message = message.toLowerCase();

    if (message === "hello") {
        return "Hello! How can I help you?";
    } else if (message === "how are you") {
        return "I am fine. Thank you!";
    } else if (message === "bye") {
        return "Goodbye!";
    } else {
        return "Sorry, I don't understand.";
    }
}


// 18. Agent Environment

function agentEnvironment() {
    let rooms = ["Dirty", "Clean", "Dirty"];

    rooms.forEach(room => {
        if (room === "Dirty") {
            console.log("Agent: Cleaning the room.");
        } else {
            console.log("Agent: Room is already clean.");
        }
    });
}


// ==========================================
// TESTING THE PROGRAMS
// ==========================================

simpleAgent();
intelligentAgent();
rationalAgent();
reflexAgent(true);
modelBasedAgent();
goalBasedAgent();
utilityBasedAgent();
learningAgent("yes");
ruleBasedAgent(20);
decisionAgent(true);
memoryBasedAgent();
planningAgent();
toolUsingAgent(10, 20);
problemSolvingAgent();
singleAgent();
multiAgentSystem();

console.log("Chatbot:", chatbot("hello"));

agentEnvironment();
