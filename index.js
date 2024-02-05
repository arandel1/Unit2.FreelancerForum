// In this workshop, you will createa platform where independent freelancers can advertise their services.

// Build your website according to this user story:

// A visitor enters the website and finds a list of available freelancers. Each freelancer has a name, an occupation, and a starting price for their services. They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50. The visitor also finds a message that displays the average starting price of all the freelancers. In this example, the average starting price is $40. A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50. New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

// need an array for freelancer names, freelancer occupations, and freelancer price
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

// need to display this array in a table with a header ("Freelancer Forum")
// need a sub-header with a calculated average starting price ("The average starting price is $__")
// need a sub-header/table heading ("Available Freelancers")
// a table that displays freelancers' name, freelancers' occupation, and freelancers' starting price
// need to have a prompt where users can submit new freelancer info

function render(){
// select the root div
  const root = document.getElementById("root")
  // make an h1 heading for Freelancer Forum
  const heading = document.createElement ("h1")
  heading.textContent = "Freelancer Forum"

  // make a calaculate average starting price using `The average starting price is ${avgStartingPrice}`
  // will need to use array.methods to calculate the average price of each freelancer -- call it avgStartingPrice.
  
  
  // make an h2 heading for Available Freelancers
  heading.textContent = "Available Freelancers"
  // make an unordered list to display freelancers
  const freelancerList = document.createElement("ul")
  // add a list item for each freelancer
  freelancers.forEach(freelancer => {
  // create a new list to represent each freelancer
    const freelancerElement = document.createElement("li")
    freelancerElement.textContent = `${freelancer.name} ${freelancer.occupation} $${freelancer.price}`
    freelancerList.append(freelancerElement)
  })

  root.append(heading, freelancerList)
}

render()