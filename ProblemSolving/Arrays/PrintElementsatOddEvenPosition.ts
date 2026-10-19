const leaderBoard : Array<string> = ['james','bill','emma','david','tim','nora'];

function printElementatOddEvenPosition(lb : string[]) : string {
    
     let evenPositionElements : string[] = [];
     let oddPositionElements :string[] = [];

        for (let i = 0; i < lb.length; i++)
             {
                if(i%2 === 0 ){
                   evenPositionElements.push(lb[i])
                }

                else{
                    oddPositionElements.push(lb[i])
                }
            
        }
       return `Elements at even position are : ${evenPositionElements} while elements at odd position are ${oddPositionElements}`
}
console.log(printElementatOddEvenPosition(leaderBoard));