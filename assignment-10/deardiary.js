var diaryEntries = [];

class DiaryEntry {
  constructor(topic, dt, entry) {
    this.topic = {};
    this.topic.S = topic;
    this.dt = {}; 
    this.dt.N = new Date(dt).valueOf().toString();
    this.entry = {};
    this.entry.S = entry;
  }
}

diaryEntries.push(new DiaryEntry('October 7, 2015 13:00:00', "8hr", "90%"));
diaryEntries.push(new DiaryEntry('October 8, 2018 12:10:00',  "6hr", "10%"));
diaryEntries.push(new DiaryEntry('October 9, 2018 19:00:00',  "4hr", "40%"));
diaryEntries.push(new DiaryEntry('October 10, 2018 23:00:00', "3hr", "90%"));
diaryEntries.push(new DiaryEntry('October 11, 2018 12:10:00', "3hr", "40%"));
diaryEntries.push(new DiaryEntry('October 12, 2018 19:00:00',  "9hr", "90%"));
diaryEntries.push(new DiaryEntry('October 13, 2018 22:15:00',  "9hr", "40%"));
diaryEntries.push(new DiaryEntry('October 14, 2018 12:10:00',  "9hr", "30%"));
diaryEntries.push(new DiaryEntry('October 15, 2018 19:00:00',  "9hr", "90%"));
diaryEntries.push(new DiaryEntry('October 16, 2018 19:00:00',  "9hr", "90%"));
diaryEntries.push(new DiaryEntry('October 17, 2018 19:00:00',  "9hr", "100%"));
diaryEntries.push(new DiaryEntry('October 18, 2018 19:00:00',  "9hr", "90%"));
diaryEntries.push(new DiaryEntry('October 19, 2018 19:00:00',  "6hr", "90%"));
diaryEntries.push(new DiaryEntry('October 20, 2018 19:00:00',  "9hr", "20%"));
diaryEntries.push(new DiaryEntry('October 21, 2018 19:00:00',  "12hr", "90%"));
diaryEntries.push(new DiaryEntry('October 22, 2018 19:00:00',  "9hr", "20%"));
diaryEntries.push(new DiaryEntry('October 23, 2018 19:00:00',  "3hr", "40%"));


console.log(diaryEntries);

var AWS = require('aws-sdk'); // npm install aws-sdk
AWS.config = new AWS.Config();
AWS.config.accessKeyId = process.env.AWS_ID;
AWS.config.secretAccessKey = process.env.AWS_KEY;
AWS.config.region = "us-east-1";

var async = require('async'); 
var dynamodb = new AWS.DynamoDB();

async.eachSeries(diaryEntries, function(value, callback) {
    
    var params = {};
    params.Item = value; 
    params.TableName = "mydiary";
    
    dynamodb.putItem(params, function (err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
    
    setTimeout(callback, 1000);
}, function() {
    console.log('Done!');
});

// using chart.js to visualize 

