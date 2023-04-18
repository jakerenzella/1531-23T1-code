import { Configuration, OpenAIApi } from "openai";

const promptBase = `
    
`;

const configuration = new Configuration({
  apiKey: '<PUT-YOUR-KEY-HERE>',
});

const openai = new OpenAIApi(configuration);

export async function askChatGPT(prompt: string) {
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });

  return completion.data.choices[0].message?.content;
}
