const statColor = (label) => {
  switch (label) {
    case 'speed': return 'pink';
    case 'special-defense': return 'lightgreen';
    case 'special-attack': return 'lightblue';
    case 'defense': return 'yellow';
    case 'attack': return 'orange';
    case 'hp': return 'red';
    default: return 'black';
  }
};

export default statColor;
