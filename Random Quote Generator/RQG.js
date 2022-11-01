let quotes = [
    `Events do not just happen, but arrive by appointment. -Epictetus`,
    `so other people hurt me? that's their problem. Their character and actions are not mine. What. -Marcus Aurelius`,
    `If melodiously piping flutes sprang from the olive, would you doubt that a knowledge of flute - playing resided in the olive? And what if the plane trees bore harps which gave forth rhythmical sounds? clearly you would think in the same way that the are of music was possessed by the plane trees. Why, then, seeing that the universe gives birth to beings that are animate and wise, should it not be considered animate and wise itself? -Zeno of Citium.`,
    `No man ever wetter clay and then left it, as if there would be bricks by chance and fortune. -Plutarch`,
    `We ought to fly away from Earth to Heaven as quickly as we can; and to fly away is to become like God, as far as this is possible; and to become like him is to become holy, just, and wise. -Plato`,
    `Beauty is a short-lived tyranny. -Socrates`,
    `Opinion is the medium between knowledge and ignorance. -Plato`,
    `So other people hurt me? that's their problem. Their character and actions are not mine. What. -Marcus Aurelius`,
    `The only good is knowledge adn the only evil is ignorance. -Herodotus`,
    `Nothing is enought for the man to whom is enough is too little. -Epicurus`,
    `Life contains but two tragedies. one is not to get your heart's desire; the other is to get it. -Socrates`,
    `Every rascal is not a thief, but every thief is a rascal. -Aristotle`,
    `All men whist they are awake are in one common world: bet each of them, when he is asleep, is in a world of his own. -Plutarch`,
    `The very spring and root of honesty and virtue lie in good education. -Plutarch`,
    `Good means not merely not to do wrong, but rather not to desire to do wrong. -Democritus`,
    `Give me beauty in the inward soul; may the outward and the inward man be at one. -Socrates`,
    `For what the horse does under complusion, as simon also observes is done without understanding; and there is no beauty in it either, any more than if one should whip and spur a dancer. -Xenophon`,
    `It is Homer who has chiefly taught other poets the art of telling lies skillfully. -Aristotle`,
    `Courage consists not in hazarding without fear; but being resoultely minded in a just cause. -Plutarch`,
    `We do not so much need the help of our friends as the confidence of their help in need. -Epicurus`,
    `Knowledge becomes evil if the aim be not virtuous. -Plato`,
    `Pleasure in the job puts perfection in the work. -Aristotle`,
    `Of all Possesion a friend is the most precious. -Herodotus`,
    `The wrongdoer is more unfortunate then the man wronged. -Democritus`,
  ];
  
  document.addEventListener("PhilosophyQuoteGenerator", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
})
  
    // Do all of your work inside the document.addEventListener  
  
  // Part 1
document.querySelector('#Philosophy-Quote-Generator').textContent = 'Something Shorter'
  
  // Part 2
document.querySelector('body').style.backgroundColor = 'grey'
  
  // Part 3
const Philosophers = document.querySelectorAll('#Philosophers > li')
  
document.querySelector('Philosophers').removeChild(Philosophers[Philosophers.length - 1])
  
  // Part 4
document.querySelectorAll('.special-quote').forEach((item) => {
  item.style.fontSize = '2rem'
})
  
  // Part 5
document.querySelectorAll('#Philosophers > li').forEach((item) => {
  if(item.textContent.trim() === ''){
    document.querySelector('#Philosophers').removeChild(item)
  }
})
  
  // Part 6
const li = document.createElement('li')
li.textContent = 'Philosophers'
document.querySelector('#Philosophers').appendChild(li)
  
  // Part 7
const blogPost = document.createElement('div')
blogPost.classList.add('blog-post')
const heading = document.createElement('h2')
heading.textContent = 'Philosophers'
const pEl = document.createElement('p')
pEl.textContent = 'Influential Philosophers'
  
document.querySelector('.main').appendChild(blogPost)
  
blogPost.appendChild(heading)
blogPost.appendChild(pEl)
  
  // Part 8
document.querySelector('#quote-title').addEventListener('click', (evt) => {
  randomQuote()
})
  
  // Part 9
  
document.querySelectorAll('.blog-post').forEach((item) => {
  item.addEventListener('mouseout', (evt) => {
    evt.currentTarget.classList.toggle('black')
  })
  item.addEventListener('mouseenter', (evt) => {
  evt.stopPropagation()
  evt.currentTarget.classList.toggle('black')
  })
})