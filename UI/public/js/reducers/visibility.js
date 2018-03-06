const initialState = {
  servants: []
}

export default function update(state = initialState, action) {
  if(action.type === 'SHOW') {
    return { servants: [
      {
        id: 1,
        servantClass: 'Archer',
        cost: 3,
        rarity: '★',
        atk_lvl_100: '9037',
        hp_lvl_100: '10979',
        img_icon: 'https://s3.us-east-2.amazonaws.com/servant-icons/STELLA.png',
      }
    ]}
  }
  else if(action.type === 'HIDE') {
    return { servants: [] }
  }
  return state;
}
