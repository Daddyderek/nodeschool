module.exports = (...ducks) =>
  ducks.reduce((count, duck) =>
    Object
      .prototype
      .hasOwnProperty
      .call(duck, 'quack')?
        ++count :
        count
  ,0);


