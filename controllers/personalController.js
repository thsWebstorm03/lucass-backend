const {Configuration, OpenAIApi} = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

const makeLoveLetter = async (req, res) => {

   let {name, des, tone, lang} = req.body;
   const content = `I want to write love letter on the following occasion. ${des}. Write a romantic love letter, capturing your feelings and emotions towards them with the above information and ${tone} in ${lang}, while incorporating words and phrases that evoke a romantic and influential tone.`;
   console.log("content:", content);
   const messages = [];
   try {
      messages.push({role: 'user', content});
      const completion = await openai.createChatCompletion({model: "gpt-3.5-turbo", messages: messages});
      const completion_text = completion.data.choices[0].message.content;
      console.log("completion_text:", completion_text);

      return res
         .status(200)
         .json({success: true, completion_text});
   } catch (error) {
      console.log("unknown error error ");
      if (error.response) {
         console.log("error:", error.response.status);
         console.log("data in error: ", error.response.data);
      } else {
         console.log("message in error: ", error.message);
      }
   }

}

const makeCoverLetter = async (req, res) => {

   let {name, des, tone, lang} = req.body;
   const content = `I want to write cover letter about the following experience. ${des}. Write a cover letter for a role with the above information and ${tone} in ${lang}, mentioning my experience. Please make the tone professional and persuasive.`;
   console.log("content:", content);
   const messages = [];
   try {
      messages.push({role: 'user', content});
      const completion = await openai.createChatCompletion({model: "gpt-3.5-turbo", messages: messages});
      const completion_text = completion.data.choices[0].message.content;
      console.log("completion_text:", completion_text);

      return res
         .status(200)
         .json({success: true, completion_text});
   } catch (error) {
      console.log("unknown error error ");
      if (error.response) {
         console.log("error:", error.response.status);
         console.log("data in error: ", error.response.data);
      } else {
         console.log("message in error: ", error.message);
      }
   }

}

module.exports = {
   makeLoveLetter,
   makeCoverLetter
}