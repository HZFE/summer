const t = document.querySelector(".text");
setTimeout(() => {
  (() => {
    const ac = {
      num: 27,
      badNum: 35,
    };
    ac.ok = Math.random() < 0.3;
    if (ac.ok) {
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
      const d = document.querySelector(".d");
      const b = document.querySelector(".bad-val");
      const ba = document.querySelector(".basic");

      // ba.addEventListener("load", function (e) {
      const l = document.querySelector(".leaf");
      l.style.opacity = 1;
      // });

      t.innerText = "吹空调外机";
      const val = ac.badNum + Math.floor(Math.random() * 10);
      b.innerText = val;
      if (val >= 38) {
        const c = document.querySelector(".tips");
        setTimeout(() => {
          c.innerText = "恭喜中暑";
        }, 1200);
      }
      d.className = d.className + " s";
    }
  })();
}, 1600);