function changeMode(size, weight, transform, background, color){
  return () => {
    document.documentElement.style.fontSize = size;
    document.documentElement.style.fontWeight = weight;
    document.documentElement.style.textTransform = transform;
    document.documentElement.style.backgroundColor = background;
    document.documentElement.style.color = color;
  }
}

function main(){
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  const p = document.createElement('p')
  p.innerHTML = 'Welcome Holberton!';

  const buttonSpooky = document.createElement('button')
  buttonSpooky.innerHTML = 'Spooky';

  const buttonDark = document.createElement('button')
  buttonDark.innerHTML = 'Dark mode';

  const buttonScream = document.createElement('button')
  buttonScream.innerHTML = 'Scream mode';

  buttonSpooky.onclick = () => {spooky()};
  buttonDark.onclick = () => {darkMode()};
  buttonScream.onclick = () => {screamMode()};

  document.body.appendChild(p);
  document.body.appendChild(buttonSpooky);
  document.body.appendChild(buttonDark);
  document.body.appendChild(buttonScream);
}

main();