function setup() {  //設定初始內容，只會執行一次
  createCanvas(windowWidth, windowHeight);  //產生一個畫布，寬為視窗寬度，高為視窗高度
  background(255); // 背景設為白色
}

function draw() {  //畫圖，每秒會畫60次
  var rect_width = 100 +mouseX/10  //方形的寬度
  var ellipse_width = 50 +mouseY/10  //圓形的寬度  

  //繪製方形
  rectMode(CENTER)  //設定方形的座標點放在方形的中間

 //方形的迴圈
  for(let j=0;j<50;j=j+1){  //產生第幾排，共50排
    for(let i=0;i<50;i=i+1){  //產生一整排的方形
        fill("#9AC981")  //填滿綠色
        rect(100+200*i,100+200*j,rect_width)  
    }
  }

  //圓形的迴圈，因為顏色不一樣所以迴圈分開寫
  for(let j=0;j<50;j=j+1){  //產生第幾排，共50排
    for(let i=0;i<50;i=i+1){  //產生一整排的圓形
      if(i<5){  //第0~4排共5排設定的顏色
        stroke("#DFE6DD")  //灰白色線條
      }else{  //第5排後設定的顏色
          stroke("#949494")  //灰色線條
      }
        fill(255);  //填滿白色
        ellipse(100+200*i,100+200*j,ellipse_width)  
    }
  }

  //繪製花
  let petals = 8; // 花瓣數量
  let radius = 40; // 花瓣的中心距離（讓花瓣靠近圓心）
  let petalWidth = 100; // 花瓣寬度
  let petalHeight = 140; // 花瓣高度
  let angleGap = PI / 64; // 花瓣之間的間隔角度
  noStroke()  //不要框線

  //單數排花的迴圈
  for(let j=0;j<50;j=j+1){
    for(let i=0;i<50;i=i+1){
        drawFlower(0+400*i,0+400*j,petals, radius, petalWidth, petalHeight) 
    }
  }
  
  //雙數排花的迴圈
  for(let j=0;j<50;j=j+1){
    for(let i=0;i<50;i=i+1){
        drawFlower(200+400*i,200+400*j,petals, radius, petalWidth, petalHeight)
    }
  }
    //繪製方形
    strokeWeight(5)  //線條的粗細
    noFill()
    //方形的迴圈
    for(let j=0;j<50;j=j+1){  //產生第幾排，共50排
      for(let i=0;i<50;i=i+1){  //產生一整排的方形
        if(i<5){  //第0~4排共5排設定的顏色
          stroke("#949494")  //灰色線條
        }else{  //第5排後設定的顏色
            stroke("#DFE6DD")  //灰白色線條
        }
          rect(100+200*i,100+200*j,rect_width)  
      }
    } 
}

// 定義繪製花朵的函數
function drawFlower(x, y, petals, radius, petalWidth, petalHeight) {
  push();
  translate(x, y); // 移動到指定位置
  
  // 繪製花瓣
  for (let i = 0; i < petals; i++) {
    push();
    rotate(TWO_PI * i / petals); // 旋轉每片花瓣的位置
    fill("#F9C2C8"); // 粉紅色花瓣
    // 繪製橢圓形花瓣，讓花瓣更靠近圓心，並允許重疊
    ellipse(0, -radius, petalWidth, petalHeight);
    pop();
  }
  pop();
}