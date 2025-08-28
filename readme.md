# Answer of the Question

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
 
- getElementById selects one element by an unique ID .
- getElementsByClassName selects all element of same class .
- querySelector find element by using css selector .


2. How do you create and insert a new element into the DOM?

- Make a new element like this document.createElement("tagName") .
- Then we have to use textContent , innerHTML etc in element .
- To use a new element on DOM we have to target it's parents element     then we can insert new element where ever we want.


3. What is Event Bubbling and how does it work?

- Event Bubbling is a process where the event start's in child element then it go to parent , grandparent and Dom .


4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a process where you put your event in parent element and then select in which child you want to do the event .


5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() this method stops element default behavior it mostly use to stop link navigation , form submit , checkbox select .
- stopPropagation() it stops event bubbling means it stops the event to go parent .

