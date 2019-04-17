export const validateBudget = budget => {
  let totalBudget = parseInt(budget, 10)|| 0;

  if(totalBudget > 0 ) {
      return totalBudget;
  } else {
      return false;
  }
}

export const checkBudget = (budget,restBudget) => {
  let clase;
   
  if( (budget / 4) > restBudget) {
       clase = 'alert alert-danger';
  } else if( (budget / 2) > restBudget) {
      clase = 'alert alert-warning'
  } else {
      clase = 'alert alert alert-success';
  }
  return clase;
} 