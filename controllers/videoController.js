const express = require('express');
const {Configuration, OpenAIApi} = require('openai');
const router = express.Router();
const blogController = require('../controllers/blogController');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

const getYouVideo = async(req, res) => {
   let {des, tone, lang} = req.body;

   const content = `I want to find videos with the following description.${des}. Generate YouTube video ideas with the above information and ${tone} in ${lang}, be creative and consider current trends and successful videos in this field.`;
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

const getInsCaptions = async(req, res) => {
   let {des, tone, lang} = req.body;

   const content = `I want to find social posts with the following description.${des}. Write a creative and trendy Instagram captions with the above information and ${tone} in ${lang}.`;
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

const getHashtag = async(req, res) => {
   let {des, tone, lang} = req.body;

   const content = `I want to find social posts with the following description.${des}. Generate hashtags for a social media post with the above information and ${tone} in ${lang}, be creative and trendy, capturing the attention of the target audience.`;
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
   getYouVideo,
   getInsCaptions,
   getHashtag
}