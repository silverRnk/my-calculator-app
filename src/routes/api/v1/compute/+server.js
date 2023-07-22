import { error, json } from '@sveltejs/kit';
import { SimpleCalculator } from '$lib/utils/Calculator';

/** @type {import('./$types').RequestHandler} */
export async function GET({url}) {
  const expression = url.searchParams.get('exp') ?? ""
  let expressionArray = expression.split(" ")

  try{
    let answer;
    answer = SimpleCalculator.calculate(expressionArray);
    return json({answer:answer})
  }catch(e){
    return json({error: 'Invalid'}, {status:401})
  }
}
