let input;
let slider;
let button;
let dropdown;
let iframe;
let shake = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  input = createInput("淡江大學"); //設定輸入框預設文字
  input.position(10, 10);//設定輸入框位置
  input.size(200, 50);//設定輸入框大小
  
  slider = createSlider(12, 40, 32); //設定滑桿範圍為12~40，預設值為32
  slider.position(250, 30); //設定滑桿位置
  slider.size(150); //設定滑桿寬度
  
  button = createButton('跳動'); // Create button with text "跳動"
  button.position(420, 30); // Set button position
  button.mousePressed(() => shake = !shake); // Toggle shake on button press

  dropdown = createSelect(); // Create dropdown menu
  dropdown.position(550, 30); // Set dropdown position
  dropdown.option('淡江大學'); // Add option "淡江大學"
  dropdown.option('教育科技系'); // Add option "教育科技系"
  dropdown.option('教學平台'); // Add option "教學平台"
  dropdown.changed(() => {
    let selected = dropdown.value();
    if (selected === '淡江大學') {
      iframe.attribute('src', 'https://www.tku.edu.tw/'); // Set iframe source to TKU website
    } else if (selected === '教育科技系') {
      iframe.attribute('src', 'https://www.et.tku.edu.tw/'); // Set iframe source to ET website
    } else if (selected === '教學平台') {
      iframe.attribute('src', 'https://hackmd.io/@yuan07/S143P7W2Jg'); // Set iframe source to 教學平台
    }
  });

  iframe = createElement('iframe'); // Create iframe element
  iframe.position(10, 70); // Set iframe position
  iframe.size(500, 500); // Set iframe size to 500x500
}

function draw() {//draw()函數會在每一幀都執行
  background("#dad7cd");//設定背景顏色為#dad7cd
  textSize(slider.value()); // Set text size based on slider value
  fill("#588157");//設定字體顏色為#588157
  let inputText = input.value(); //設定inputText為輸入框的值
  for (let y = 100; y < height; y += 40) {
    for (let x = 0; x < width; x += 300) { //設定文字之間的間距
      let yOffset = shake ? random(-2, 2) : 0; // Reduce shake range to slow down shaking
      text(inputText, x, y + yOffset); //輸出文字
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  iframe.size(500, 500); // Adjust iframe size to 500x500 on window resize
}//當視窗大小改變時，畫布大小也會跟著改變