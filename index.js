const functions = require("firebase-functions");
const {randomUUID} = require("crypto");
const admin = require("firebase-admin");
admin.initializeApp();

const db = admin.firestore();

const axios = require("axios");

const logger = require("firebase-functions/logger");

const {onSchedule} = require("firebase-functions/v2/scheduler");

const docRef = db.collection("facts").doc("wVxqRwCoIVoDsMqWGqHeHe");

const params = {};

exports.scheduledRun = onSchedule("every day 20:00", async (event) =>{
  axios.get("https://binaryjazz.us/wp-json/genrenator/v1/genre/", {params})
      .then((response) => {
        const apiResponse = response.data;
        docRef.set({
          current: apiResponse,
        });
        // res.send(apiResponse[Math.floor(Math.random() * 5)].text)
      }).catch((error) => {
        console.log(error);
        logger.error(error, {structuredData: true});
      });
  logger.log("Hi Logs!");
});


exports.flashBriefing = functions.https.onRequest((request, response) => {
  console.log("Flash Briefing Requested!");

  const flashBriefingData = [
    {
      "uid": randomUUID(),
      "updateDate": new Date().toISOString(),
      "titleText": "What kind of test will I do today?",
      "mainText": "The quick brown fox jumped.",
      "streamUrl": null,
      "redirectionUrl": "https://example.com",
    },
  ];

  response.set("Content-Type", "application/json");
  response.json(flashBriefingData);
});
