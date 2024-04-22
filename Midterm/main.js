var canvas = document.getElementById("GameScreenCanvas");
var ctx = canvas.getContext("2d");

// ��Ʈ �׸��� �Լ�
function drawHeart() {


    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    

    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const scale = 3;

    ctx.moveTo(x, y);

    // ���� �ݿ�
    ctx.bezierCurveTo(x, y - scale, x - 5 * scale, y - 5 * scale, x - 15 * scale, y - 5 * scale);

    // ���� �Ʒ� �κ�
    ctx.bezierCurveTo(x - 25 * scale, y - 5 * scale, x - 25 * scale, y + 5 * scale, x - 25 * scale, y + 5 * scale);

    // ������ �Ʒ� �κ�
    ctx.bezierCurveTo(x - 25 * scale, y + 15 * scale, x, y + 35 * scale, x, y + 35 * scale);

    // ������ �ݿ�
    ctx.bezierCurveTo(x, y + 35 * scale, x + 25 * scale, y + 15 * scale, x + 25 * scale, y + 5 * scale);

    // ������ ��� �κ�
    ctx.bezierCurveTo(x + 25 * scale, y + 5 * scale, x + 25 * scale, y - 5 * scale, x + 15 * scale, y - 5 * scale);

    // ������ �ݿ�
    ctx.bezierCurveTo(x + 5 * scale, y - 5 * scale, x, y - scale, x, y);

    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
    ctx.lineWidth = 1; // �׵θ� ���� �β� ����
    ctx.strokeStyle = "black"; // �׵θ� ���� ���� ����
    ctx.stroke();
   
}


    
   


var randomx = Math.random()*200;
var randomy = Math.random()*300;
function star() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
  
    // ���� ũ��� ���� ���� (ũ�⸦ �۰� ����)
    const outerRadius = 80; // �ܺ� ������ (���� ũ��)
    const innerRadius = 40; // ���� ������ (���� ũ��)
    const rotation = Math.PI / 2 * 3; // ���� ȸ�� ����
    const numOfPoints = 5; // ������ ����

    ctx.beginPath();
    ctx.translate(randomx, randomy);
    ctx.moveTo(centerX + outerRadius * Math.cos(1.5), centerY + outerRadius * Math.sin(-1));

    // �� �������� ��ġ ����Ͽ� ���� �׸���
    for (let i = 1; i < numOfPoints * 2; i++) {
        const radius = i % 2 === 0 ? outerRadius : innerRadius;
        const angle = Math.PI / numOfPoints * i + rotation;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        ctx.lineTo(x, y);
    }
    
    ctx.fillStyle = "yellow"; // ���� ���� ����
    ctx.fill(); // �� ���θ� ä���
    ctx.closePath();
    ctx.lineWidth = 1; // �׵θ� ���� �β� ����
    ctx.strokeStyle = "black"; // �׵θ� ���� ���� ����
    ctx.stroke();
}

// �ʱ⿡ ��Ʈ �׸���

drawHeart();
star();