const {Configuration, OpenAIApi} = require('openai');
const dotenv = require('dotenv');
dotenv.config();

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY});
const openai = new OpenAIApi(configuration);

const generateOilPaint = async (req, res) => {
   
   let {name, des, tone, lang} = req.body;
   const content = `Generate an oil painting-style image based on the following description. ${des}.`;
   console.log("content:", content);
   const messages = [];
   try {
     
      const response = await openai.createImage({
         prompt: `${content}`,
         n: 1,
         size: "256x256",
         })

         console.log(response.data.data[0].url)
         res.status(200).send({
            source: response.data.data[0].url
         })

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

const generateWaterColor = async (req, res) => {
   
   let {name, des, tone, lang} = req.body;
   const content = `Generate an watercolor-style image based on the following description. ${des}.`;
   console.log("content:", content);
   const messages = [];
   try {
     
      const response = await openai.createImage({
         prompt: `${content}`,
         n: 1,
         size: "256x256",
         })

         console.log(response.data.data[0].url)
         res.status(200).send({
            source: response.data.data[0].url
         })

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

const generateSketch = async (req, res) => {
   
   let {name, des, tone, lang} = req.body;
   const content = `Generate an sketch-style image based on the following description. ${des}.`;
   console.log("content:", content);
   const messages = [];
   try {
     
      const response = await openai.createImage({
         prompt: `${content}`,
         n: 1,
         size: "256x256",
         })

         console.log(response.data.data[0].url)
         res.status(200).send({
            source: response.data.data[0].url
         })

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

const generatePop = async (req, res) => {
   
   let {name, des, tone, lang} = req.body;
   const content = `Generate an pop art style image based on the following description. ${des}.`;
   console.log("content:", content);
   const messages = [];
   try {
     
      const response = await openai.createImage({
         prompt: `${content}`,
         n: 1,
         size: "256x256",
         })

         console.log(response.data.data[0].url)
         res.status(200).send({
            source: response.data.data[0].url
         })

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
   generateOilPaint,
   generateWaterColor,
   generateSketch,
   generatePop
}