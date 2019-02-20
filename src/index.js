import 'dotenv/config';

console.log('Super basic nodeJS project');

/* 
 * accessing secret 
 * need to have MY_SECRET variable inside .env
*/
if (process.env.MY_SECRET) {
  console.log(process.env.MY_SECRET);
}
