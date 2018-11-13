// Copyright (c) 2018 ml5
// 
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ML5 Example
KNN_Image
KNN Image Classifier example with p5.js
=== */

let knn;
let video;

function setup() {
  noCanvas();
  video = createCapture(VIDEO).parent('videoContainer');
  // Create a KNN Image Classifier

  knn = new ml5.KNNImageClassifier(3, 1, modelLoading, video.elt);
  knn.load('test.json', modelLoaded);
  
  createButtons();
}

function createButtons() {
 
  // Predict Button
  buttonPredict = select('#buttonNew');
  buttonPredict.mousePressed(restart);
}


function restart() {

   predict();

}


// A function to be called when the model has been loaded
function modelLoaded() {
  select('#loading').html('水果模組載入成功');
}

function modelLoading() {
  select('#loading').html('水果模組載入中……');
}


// Predict the current frame.
function predict() {
  knn.predictFromVideo(gotResults);
}

// Show the results
function gotResults(results) {
  let msg;

  if (results.classIndex == 1) {
    //msg = '剪刀';
	document.getElementById("myImg").src = "a1.png";
  } else if (results.classIndex == 2) {
    //msg = '石頭';
	document.getElementById("myImg").src = "a2.png";
  } else if (results.classIndex == 3) {
    //msg = '布';
	document.getElementById("myImg").src = "a3.png";
  }else if (results.classIndex == 4) {
    //msg = '石頭';
    document.getElementById("myImg").src = "a4.png";
  } else if (results.classIndex == 5) {
    //msg = '石頭';
    document.getElementById("myImg").src = "a5.png";
  } else if (results.classIndex == 6) {
    //msg = '石頭';
    document.getElementById("myImg").src = "a6.png";
  } else if (results.classIndex == 7) {
    //msg = '石頭';
    document.getElementById("myImg").src = "a7.png";
  } else if (results.classIndex == 8) {
    //msg = '石頭';
    document.getElementById("myImg").src = "a8.png";
  } 
  //select('#result').html(msg);

  setTimeout(function(){
    predict();
  }, 50);
}

// Clear the data in one class
function clearClass(classIndex) {
  knn.clearClass(classIndex);
}

