let counter = 0;
function inception() {
  console.log(counter);
  if(counter > 5 ) {
    return 'done!';
  }
  counter++;
  return inception();
}

inception();