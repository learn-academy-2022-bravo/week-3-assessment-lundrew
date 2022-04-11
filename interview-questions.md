# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: The 'this' in JavaScript is relates to what 'this' is trying to access, such as this.state."enter prop name here". We use 'this' to access that property and use it throughout our code

  Researched answer: The 'this' keyword references a Javascript element depending on the scope or context of its use. 



2. What is React? Why would you use it?

  Your answer: React is a library extension of Javascript. The reason we use React is because it can update the DOM at a much quicker and efficient pace then vanilla Javascript.  

  Researched answer: React is an open-source Javascript library used to build user interfaces specifically for single-page applications. React also gives us the option of creating reusable UI components. React is great for building dynamic and engaging web interfaces. 



3. Which lifecycle method is required in a React class component?

  Your answer: The required lifecycle method in a React class component is render(). 

  Researched answer: The render() method is the most used lifecycle method. This method is the only required method within a class component in React. This method handles the rendering of your component to the UI. This happens during the 'mounting' and 'updating' of your component. 
  Below is an example of a basic rander() in React. 

  class Hello extends Component {
    render(){
      return <div>Hello {this.props.name}</divs>
    }
  }



4. What is JSX? What is one notable difference between HTML and JSX?

  Your answer: With JSX, we can implement html into our Javascript React code. JSX is a combination of HTML and JavaScript. 

  Researched answer: JSX is a syntax extension to Javascript. This extension gives us the capability of combining Javascript and HTML code. HTML and Javascript are usually written separately but with React, we can create components that contain the two. 



5. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is used to install files from the internet.

  Researched answer: Yarn is a package manager for your code which allows you to use and share vode with developers all around the world. Yarn is quick, secure and reliable. Yarn can be beneficial in using other developers' solutions to different problems, making it easier to develop software. These solutions made up of code is shared through something called a package or sometimes referred to as a module. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: 

  Researched answer: An anonymous function is a function without a name. Below is an example of one. If the anonymous function is not placed inside (), there will be a syntax error. 



//Correct
  (function() {
    //....
  })

//Incorrect 
  function() {
    //....
  }



## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering is a term to describe the ability to render different UI markup if a condition is true or false. This allows us to render different elements or components based on their condition. 

2. Object-oriented programming: Object oriented programming means that anything we can achieve in object-oriented programming is done through objects. 

3. Ruby: Ruby is a programming language and a general purpose language that can serve many purposes. Ruby is used for building desktop applications, static websites, data processing services and automation tools. 

4. Ruby blocks: Ruby blocks are anonymous functions that can be passed into methods. Ruby blocks are essentially the same thing as a method, except they do not have a name and do not belong to an object.

5. Ruby hashes: Ruby hashes are a collection of unique keys and their values. Hashes are like arrays, except the indexing is done with the help of arbitrary keys of any object type.
