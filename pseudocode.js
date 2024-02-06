// conceptual approach:
// create an array to store freelancer data (represented as an array of objects)
// create a render() function that updates the existing page with elements representing new freelancer data (replace current contents using replaceChildren)
// (alternate approach: use .append() instead, to add a single freelancer rather than re-redenering the whole list)
//----------------------------------------------------------------------------------------------------------------------------------------------------
// pieces I need to code:
// an array of freelancers to start with
// arrays of names and occupations to generate new random freelancers

// function to render all the freelancers 
  //renderFreelancers should:
    // select the freelancers list by id
    // create the new list to be displayed in the browser
    // replace the existing contents of the freelancers list with our new list

// function to calculate and render the average
  // renderAverage should:
    // select the averagePrice div
    // calculate the average
    // update the averagePrice div to display the new calculate average

// function to add a new freelancer to the list (should also call the renderFreelancers and renderAverage functions)
  // addNewFreelancer should:
    // select a name and occupation at random from the lists at the top
    // generate a random hourly rate (between 30-100)
    // call the renderFreelancers and renderAverage functions

// call renderFreelancers - initial render
// generate new random freelancers at a pre-set interval 

//----------------------------------------------------------------------------------------------------------------------------------------------------


