const user = {
  age: 40,
  name: 'Marcus',
  magic: true,
  scream: function() {
    console.log('AAAAAAAAAAA')
  }
}

user.age //O(1)
user.spell = 'abra kadabra'; //O(1)
user.scream() //O(1)
console.log(user);