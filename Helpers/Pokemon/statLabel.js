const statLabel = (label) => {
  switch (label) {
    case 'speed': return 'Speed';
    case 'special-defense': return 'Sp. Def';
    case 'special-attack': return 'Sp. Atk';
    case 'defense': return 'Def';
    case 'attack': return 'Atk';
    case 'hp': return 'HP';
    default: return 'black';
  }
};

export default statLabel;
