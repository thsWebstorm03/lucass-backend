const {Configuration, OpenAIApi} = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

const generateNames = async (req, res) => {

   let {name, des, tone, lang} = req.body;
   const content = `Some of my production description is as the following. ${des}. Generate 5 creative and trendy names for a product with the above information and ${tone} in ${lang}. Consider the product's purpose, target audience, and branding when creating the names.`;
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

const generateIdeas = async (req, res) => {

   let {name, des, tone, lang} = req.body;
   const content = `I am passionate about the following. ${des}. Generate 5 creative and innovative startup ideas that align with my passions with the above information and ${tone} in ${lang}.`;
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
   generateNames,
   generateIdeas
}