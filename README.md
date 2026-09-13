i.Name of the project: A-5 Dev Stack Builder Website

ii.Description: DevStack is a modern, interactive web platform designed for developers and project leads to seamlessly explore, compare, and assemble their ideal tech stack.

Key Features & Highlights

Curated Technology Library: Browse popular frontend, backend, database, and DevOps tools—complete with categorized tags, difficulty levels, and performance ratings.

Interactive Stack Builder: Add or remove technologies dynamically with real-time feedback using a dedicated "Your Stack" interactive sidebar.

Sleek & Responsive UI: Built with a modern glassmorphism design system, smooth gradient accents, dynamic state management, and a sticky navigation header for intuitive user experience across all devices.

iii. The technologies used in building DevStack:

1.React
2.TypeScript
3.Tailwind CSS
4.Vite

iv.3 features about the project:

* Interactive Stack Builder:Real-time state management allows users to add or remove tools dynamically and visualize their custom configuration in a dedicated sidebar.
* Curated Technology Cards: Cleanly presents key metadata—including performance badges, difficulty levels, and star ratings—for every frontend, backend, database, and DevOps tool.
* Modern & Responsive UI: Built with sticky glassmorphism navigation, modern color gradients, and Tailwind CSS grid layouts optimized for all screen sizes.

Question & Answer
i. What is JSX and why is it used in React?
Ans:
JSX (JavaScript XML) is a syntax extension for JavaScript that let us write HTML-like structure directly inside a JavaScript file alongside our logic.

* HTML-Like Syntax in JS: It allow us to describe what the user interface should look like using familiar tags like `<div>`, `<h1>`, and custom React components within our `.jsx` or `.tsx` files.
* Syntactic Sugar: Under the hood, compilers like Babel or Vite transform JSX tags into standard JavaScript function calls—specifically `React.createElement()` or the modern JSX transform (`jsx()`).


Why It Is Used in React

* Combines UI and Logic: React embraces the philosophy that rendering logic and UI markup are inherently coupled. JSX allow us to manage both in a single component file without context-switching between separate HTML and JS files.
* Full Power of JavaScript: Because JSX is JavaScript, we can easily embed dynamic values, conditions, loops, and math expressions directly into our markup using curly braces (`{ expression }`).
* Compile-Time Error Checking: When paired with tools like TypeScript, JSX catches missing props, typoed tags, and syntax errors during development rather than breaking at runtime.
* Improved Readability: Writing nested JavaScript objects or `React.createElement()` calls manually gets verbose and hard to maintain. JSX provides a clean, visual structure that is much easier to read and debug.

ii.What is the difference between props and state?

Ans:
 Difference Between Props and State

Props (Properties): Read-only data passed down from a parent component to a child component to configure it. Components cannot modify their own props.

State: Local, mutable data managed internally by a component that can change over time (usually via user interactions). When state updates, the component re-renders.

iii.What does the useState hook do, and where did you use it in this project?

Purpose: useState is a React Hook that declares a state variable in a functional component, allowing React to preserve values between renders and trigger a re-render when those values change.

Project Usage: It manages the stack array (holding selected tech items) and the loading boolean state in App.tsx (or technologies array if fetching dynamically).

iv.What does the useEffect hook do, and why did you need it to load the JSON data?

Purpose: useEffect performs side effects in functional components, such as data fetching, subscriptions, or manual DOM manipulations after rendering.

Why Needed: Fetching JSON data is an asynchronous side effect. useEffect ensures data fetching runs once when the component mounts (using an empty dependency array []), preventing infinite fetching loops on every re-render.

v.Why does every item in a .map() list need a unique key prop?

React uses the key prop to identify which items have changed, been added, or been removed. It optimizes DOM re-rendering using its Virtual DOM diffing algorithm. Without unique keys, React re-renders the entire list on state changes instead of updating only the modified element, leading to performance hits and potential state UI bugs.

vi.What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering in React displays specific visual elements or layout blocks based on a JavaScript truthy/falsy condition.

Example from the Project:

TypeScript
{/* Loading State vs. Content */}
{loading ? (
  <Loader />
) : (
  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    {/* Grid content */}
  </div>
)}
Or for an empty stack message:

TypeScript
{stack.length === 0 ? (
  <p className="text-gray-400">No technologies selected yet.</p>
) : (
  stack.map((item) => <StackItem key={item.id} tech={item} />)
)}
vii.How do you pass data from a parent component to a child component, and how does a child send something back to the parent? 

Parent to Child: Data is passed down directly using standard component props (e.g., <TechCard tech="{tech}"/>).

Child to Parent: The parent passes a callback function down to the child as a prop. When an event happens in the child (like clicking a button), the child invokes that callback function and passes the updated data back as an argument (e.g., onAdd(tech)).