setTimeout(() => {
  const t = document.querySelector(".text");
  var v = Math.random();
  const ac = {
    num: 27,
    badNum: 36,
  };
  ac.ok = v < 0.5;
  ac.isfan = v < 0.25;
  ac.iscow = v > 0.75;
  if (ac.ok) {
    if (ac.isfan) {
      const f = document.querySelector(".f");
      t.innerText = "吹风扇";
      f.className = f.className + " s";
      return;
    }
    const a = document.querySelector(".a");
    const v = document.querySelector(".num-val");

    t.innerText = "吹空调";
    v.innerText = ac.num;
    a.className = a.className + " s";

    document.querySelector(".oper").addEventListener("click", function (e) {
      if (e.target && e.target.dataset) {
        if (e.target.dataset.t === "1") {
          v.innerText = ++ac.num > 31 ? (ac.num = 31) : ac.num;
          if (ac.num === 31) {
            setTimeout(() => {
              alert("你怎么不吹空调外机");
            }, 100);
          }
        } else if (e.target.dataset.t === "0") {
          v.innerText = --ac.num < 16 ? (ac.num = 16) : ac.num;
        }
      }
    });
  } else {
    if (ac.iscow) {
      t.innerText = "吹牛";
      const c = document.querySelector(".c");
      c.className = c.className + " s";
      return;
    }
    const d = document.querySelector(".d");
    const b = document.querySelector(".bad-val");

    const l = document.querySelector(".leaf");
    l.style.opacity = 1;

    t.innerText = "吹空调外机";
    const val = ac.badNum + Math.floor(Math.random() * 10);
    b.innerText = val;

    function showCanvas() {
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      // création d'un tableau
      particle = [];
      (particleCount = 0),
        (gravity = 0.3),
        (colors = [
          "#f44336",
          "#e91e63",
          "#9c27b0",
          "#673ab7",
          "#3f51b5",
          "#2196f3",
          "#03a9f4",
          "#00bcd4",
          "#009688",
          "#4CAF50",
          "#8BC34A",
          "#CDDC39",
          "#FFEB3B",
          "#FFC107",
          "#FF9800",
          "#FF5722",
          "#795548",
        ]);

      for (var i = 0; i < 300; i++) {
        particle.push({
          x: width / 2,
          y: height / 2,
          boxW: randomRange(5, 20),
          boxH: randomRange(5, 20),
          size: randomRange(2, 8),

          spikeran: randomRange(3, 5),

          velX: randomRange(-8, 8),
          velY: randomRange(-50, -10),

          angle: convertToRadians(randomRange(0, 360)),
          color: colors[Math.floor(Math.random() * colors.length)],
          anglespin: randomRange(-0.2, 0.2),

          draw: function () {
            context.save();
            context.translate(this.x, this.y);
            context.rotate(this.angle);
            context.fillStyle = this.color;
            context.beginPath();
            // drawStar(0, 0, 5, this.boxW, this.boxH);
            context.fillRect(
              (this.boxW / 2) * -1,
              (this.boxH / 2) * -1,
              this.boxW,
              this.boxH
            );
            context.fill();
            context.closePath();
            context.restore();
            this.angle += this.anglespin;
            this.velY *= 0.999;
            this.velY += 0.3;

            this.x += this.velX;
            this.y += this.velY;
            if (this.y < 0) {
              this.velY *= -0.2;
              this.velX *= 0.9;
            }
            if (this.y > height) {
              this.anglespin = 0;
              this.y = height;
              this.velY *= -0.2;
              this.velX *= 0.9;
            }
            if (this.x > width || this.x < 0) {
              this.velX *= -0.5;
            }
          },
        });
      }
      r1 = {
        x: width / 2 - 150,
        y: height / 2 - 150,
        width: 300,
        height: 500,
        velX: 0,
        velY: -10,
        alphatop: 0,
      };

      function drawScreen() {
        size = 50;
        pFontName = "Lucida Sans Unicode";
        context.font = size + "pt " + pFontName;
        // context.fillText("Confetti party !!!", width / 2, 150);
        if (r1.alphatop < 1) {
          r1.alphatop += 0.01;
        } else {
          r1.alphatop = 1;
        }
        context.globalAlpha = r1.alphatop;
        context.textAlign = "center";

        if (r1.alphatop === 1) {
          r1.velY *= 0.999;
          r1.velY += 0.3;

          r1.x += r1.velX;
          r1.y += r1.velY;
        }

        if (r1.y + r1.height > height) {
          r1.anglespin = 0;
          r1.y = height - r1.height;
          r1.velY *= -0.8;
          r1.velX *= 0.9;
        }

        context.globalAlpha = 1;
        for (var i = 0; i < particle.length; i++) {
          particle[i].draw();
        }
      }

      function loadImage(url) {
        var img = document.createElement("img");
        img.src = url;
        return img;
      }

      function update() {
        context.clearRect(0, 0, width, height);

        drawScreen();

        requestAnimationFrame(update);
      }

      update();

      function randomRange(min, max) {
        return min + Math.random() * (max - min);
      }

      function randomInt(min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
      }

      function convertToRadians(degree) {
        return degree * (Math.PI / 180);
      }

      function drawStar(cx, cy, spikes, outerRadius, innerRadius, color) {
        var rot = (Math.PI / 2) * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / spikes;

        context.strokeSyle = "#000";
        context.beginPath();
        context.moveTo(cx, cy - outerRadius);
        for (i = 0; i < spikes; i++) {
          x = cx + Math.cos(rot) * outerRadius;
          y = cy + Math.sin(rot) * outerRadius;
          context.lineTo(x, y);
          rot += step;

          x = cx + Math.cos(rot) * innerRadius;
          y = cy + Math.sin(rot) * innerRadius;
          context.lineTo(x, y);
          rot += step;
        }
        context.lineTo(cx, cy - outerRadius);
        context.closePath();
        context.fillStyle = color;
        context.fill();
      }
    }
    if (val >= 38) {
      const c = document.querySelector(".tips");
      setTimeout(() => {
        showCanvas();
        c.innerText = "恭喜中暑";
      }, 1200);
    }
    d.className = d.className + " s";
  }
}, 1600);
