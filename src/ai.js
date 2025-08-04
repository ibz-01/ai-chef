import { HfInference } from "@huggingface/inference";
 

const SYSTEM_PROMPT = `

    You are an assistant that recieves a list of ingredients a user has and suggests a recipe they could make with some or all of those ingredients. You dont need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier ti render to a web page.

`

const HF_ACCESS_TOKEN = ""


const hf = new HfInference(HF_ACCESS_TOKEN)


export async function GetRecipeByAI(ingredientsArr)
{
    const ingredientString =  ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion( {
            model: "meta-llama/Meta-Llama-3.1-8B-Instruct",
            messages: [
               { role: "system", content: SYSTEM_PROMPT },
               { role: "user", content: `I have ${ingredientString}. Please give me a recipe you'd recommend I make`},
            
            ],
            max_tokens: 1024,

        })
        return response.choices[0].message.content
    } catch(err) {
        console.error(err.message)
    }

}