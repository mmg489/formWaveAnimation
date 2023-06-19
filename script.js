/*Using JS, we are going to wrap each letter in a span, a transition is going to be applied
to move the transition up using transform:translateY, and we are going to add a transition delay
so that it creates the wave effect*/ 


const labels =document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    /*this ^^^ is taking all the letters in the label (so where you see email and password)
    and grabbing the inner text then in the next line we call the split
    which splits the letters into an array */
        .split('')
        .map((letter,idx) => `<span style="transition-delay:${idx*50}ms">${letter}</span>`)
        /*.map is basically manipulating the split letters that are now an array into 
        having each individual letter be wrapped by its own span, that way we can apply the 
        transition that will create the wave effect to each letter individually. 
        After that we are using .join to convert the letters back into a string.*/
        .join('')
})