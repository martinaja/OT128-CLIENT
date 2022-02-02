export const userLogOutService = () => {
  localStorage.removeItem('userData') //Replace 'userData' when define Item Name

  return console.log('user disconected') //Log out Button dissapear if user is not logged - modify in header
}
