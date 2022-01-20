 // let testData = JSON.parse(localStorage.getItem("cart"))||[]
    let testData = [
      {
        img: "data:image/png;base64,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",
        name: "Onsitego 1 Year Extended Warranty for Smartphone (Rs.60,000 -Rs.85,000)",
        pId: 18493,
        price: 3999.0,
      },
      {
        img: "data:image/png;base64,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",
        name: "Onsitego 1 Year Extended Warranty for Smartphone (Rs.60,000 -Rs.85,000)",
        pId: 184092,
        price: 3999.0,
      },
      {
        img: "data:image/png;base64,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",
        name: "Onsitego 1 Year Extended Warranty for Smartphone (Rs.60,000 -Rs.85,000)",
        pId: 144093,
        price: 3999.0,
      },
      {
        img: "data:image/png;base64,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",
        name: "Onsitego 1 Year Extended Warranty for Smartphone (Rs.60,000 -Rs.85,000)",
        pId: 1802093,
        price: 3999.0,
      },
      {
        img: "data:image/png;base64,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",
        name: "Onsitego 1 Year Extended Warranty for Smartphone (Rs.60,000 -Rs.85,000)",
        pId: 17093,
        price: 3999.0,
      },
    ];
    var totalCost = 0;
    const prTab = document.querySelector("#cardPro");
    function mapCart(dta) {
      prTab.innerHTML = null;
      totalCost = 0;
      dta.forEach(({ img, name, pId, price }) => {
        let proCard = document.createElement("div");
        let prdetail = document.createElement("div");
        let del = document.createElement("div");
        del.setAttribute("class", "del");
        del.innerHTML = `<i class="far fa-trash-alt" style="color: #00e9bf"></i>`;
        del.addEventListener("click", () => {
          delCart(pId);
        });
        let imgB = document.createElement("img");
        imgB.src = img;
        let h2 = document.createElement("h2");
        h2.innerHTML = name;
        let proID = document.createElement("p");
        proID.innerHTML = `Product Id: ${pId}`;
        let proPrice = document.createElement("p");
        proPrice.innerHTML = `₹ ${price}`;
        totalCost += price;
        proCard.setAttribute("class", "proCard");
        prdetail.setAttribute("class", "prdetail");
        prdetail.append(h2, proID, proPrice);
        proCard.append(imgB, prdetail, del);
        prTab.append(proCard);
      });
      cartChange();
    }
    function delCart(id) {
      testData = testData.filter(({ pId }) => pId != id);
      mapCart(testData);

      localStorage.setItem("cart", JSON.stringify(testData));
    }
    function cartChange() {
      document.querySelector(
        "#cartValue"
      ).innerHTML = `Your Cart ( ${testData.length} items ) ₹${totalCost}`;
      document.querySelector("#price").innerHTML = `₹${totalCost}`;
      document.querySelector("#totalCost").innerHTML = `₹${totalCost}`;
    }
    function promoAply() {
      let coupan = document.querySelector("#coupan").value;
      if (coupan == "OFF30") totalCost = (totalCost / 100) * 70;
      cartChange();
    }
    function openPay() {
      localStorage.setItem("totalCost", JSON.stringify(totalCost));
      window.open("/Address.html", "_self");
    }
    mapCart(testData);