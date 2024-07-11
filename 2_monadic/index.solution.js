import { runProgramm, numberMagic } from './programm.js'
import { Result } from './result.js'

function parseInput(input) {
    if(!input) {
        return Result.fail('Input must not be empty');
    }
    
    // Step 1: Parse input string to number
    const parsed = Number(input);

    // Step 2: Validate input for:
    // - input must be a valid number
    if(isNaN(parsed)) {
        return Result.fail('Input must be a valid number');
    }
    // - input must be greater than zero
    if(parsed < 0) {
        return Result.fail('Input must be greater than zero');
    }
    // - input must be less than 100
    if(parsed > 100) {
        return Result.fail('Input must be less than 100');
    }
    // Step 3: Return Ok or Fail Result
    return Result.ok(parsed);
}

runProgramm(value => {
    // Step 1: Parse input string
    // Step 2: Apply the numberMagic function to the parsed number
    const validationResult = parseInput(value).map(numberMagic);
    
    // Step 3: Log the result if it is a success, otherwise log the error
    if(!validationResult.isSuccess) {
        return console.error("ERROR:", validationResult.value);
    }
    console.log(validationResult.value);
})