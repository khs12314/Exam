var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

// 하트 그리기 함수
function drawHeart() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    

    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const scale = 3;

    ctx.moveTo(x, y);

    // 왼쪽 반원
    ctx.bezierCurveTo(x, y - scale, x - 5 * scale, y - 5 * scale, x - 15 * scale, y - 5 * scale);

    // 왼쪽 아래 부분
    ctx.bezierCurveTo(x - 25 * scale, y - 5 * scale, x - 25 * scale, y + 5 * scale, x - 25 * scale, y + 5 * scale);

    // 오른쪽 아래 부분
    ctx.bezierCurveTo(x - 25 * scale, y + 15 * scale, x, y + 35 * scale, x, y + 35 * scale);

    // 오른쪽 반원
    ctx.bezierCurveTo(x, y + 35 * scale, x + 25 * scale, y + 15 * scale, x + 25 * scale, y + 5 * scale);

    // 오른쪽 상단 부분
    ctx.bezierCurveTo(x + 25 * scale, y + 5 * scale, x + 25 * scale, y - 5 * scale, x + 15 * scale, y - 5 * scale);

    // 오른쪽 반원
    ctx.bezierCurveTo(x + 5 * scale, y - 5 * scale, x, y - scale, x, y);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.lineWidth = 1; // 테두리 선의 두께 설정
    ctx.strokeStyle = "black"; // 테두리 선의 색상 설정
    ctx.stroke();
   
}


    
   


var randomx = Math.random()*200;
var randomy = Math.random()*300;
function star() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
  
    // 별의 크기와 각도 설정 (크기를 작게 조절)
    const outerRadius = 80; // 외부 반지름 (작은 크기)
    const innerRadius = 40; // 내부 반지름 (작은 크기)
    const rotation = Math.PI / 2 * 3; // 별의 회전 각도
    const numOfPoints = 5; // 꼭짓점 개수

    ctx.beginPath();
    ctx.translate(randomx, randomy);
    ctx.moveTo(centerX + outerRadius * Math.cos(1.5), centerY + outerRadius * Math.sin(-1));

    // 각 꼭짓점의 위치 계산하여 선을 그리기
    for (let i = 1; i < numOfPoints * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = Math.PI / numOfPoints * i + rotation;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    
    ctx.fillStyle = "yellow"; // 별의 색상 설정
    ctx.fill(); // 별 내부를 채우기
    ctx.closePath();
    ctx.lineWidth = 1; // 테두리 선의 두께 설정
    ctx.strokeStyle = "black"; // 테두리 선의 색상 설정
    ctx.stroke();
}

// 초기에 하트 그리기

drawHeart();
star();