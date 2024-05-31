import { mainBackendData } from '../datas/mainData.js';
mainBackendData;
function calculateDiscountRate(cost, discountedCost) {
    if (cost <= 0) {
        throw new Error('Cost must be greater than zero');
    }
    const discountRate = ((cost - discountedCost) / cost) * 100;
    return discountRate > 0 ? Math.floor(discountRate) + "%" : "";
}
function convertToHundredUnits(amount) {
    if (typeof amount !== 'number' || amount < 0) {
        throw new Error('Invalid amount');
    }
    const tenThousandUnits = amount / 10000;
    return tenThousandUnits;
}
export class Main {
    constructor() {
        console.log("메인 왔습니다.");
    }
    dataBinding() {
        console.log("main 데이터바인딩");
        const mainItemList = mainBackendData[0].data
            .map(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => ({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }));
        console.log(mainBackendData[0].data
            .map(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => ({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost })));
        const mainEl = document.querySelector(".main__container");
        mainItemList.forEach(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => {
            const insertHTML = `
            <div class="card">
                <div class="card__left">
                    <div class="card__left__imgBox">
                        <img src="${titleImage}" alt="">
                    </div>
                </div>
                <div class="card__right">

                    <div class="card__right__hospital">
                        <i class="fa-solid fa-circle-check"></i>
                        <p>고객평가우수병원</p>
                    </div>

                    <p class="card__right__state">${hospitalSiGunGu}-${hospitalName}</p>
                    <p class="card__right__title">${title}</p>

                    <div class="card__right__ratingContainer">
                        <i class="card__right__icon fa-solid fa-star"></i>
                        <p class="card__right__rating">${rating}</p>
                        <p class="card__right__ratingCount">(${ratingCount})</p>
                    </div>
                    <div class="card__right__discountedContainer">
                        <p class="card__right__discountedCost">${convertToHundredUnits(discountedCost)}만원</p>
                        <p class="card__right__discountedRate">${calculateDiscountRate(cost, discountedCost)}</p>
                        <p class="card__right__discountedVAT">VAT 포함</p>
                    </div>
                    
                </div>
            </div>
            `;
            mainEl === null || mainEl === void 0 ? void 0 : mainEl.insertAdjacentHTML("beforeend", insertHTML);
            const searchCountEl = document.querySelector(".searchCount");
            searchCountEl.innerText = mainBackendData[0].data.length;
        });
    }
    render() {
        console.log("main 초기작업");
        const mainEl = document.createElement('main');
        mainEl.className = 'main__container';
        document.body.appendChild(mainEl);
        this.dataBinding();
    }
}
//# sourceMappingURL=main.js.map