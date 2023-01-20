const dessert = { type: 'pie' };
dessert.type = 'pudding';

const seconds = dessert;
seconds.type = 'fruit';

console.log(dessert.type);
