import { mainBackendDataEvent_20, mainBackendDataEvent_40, mainBackendDataEvent_60, mainBackendDataEvent_80, mainBackendDataEvent_100 } from '../datas/mainDataEvent.js';
mainBackendDataEvent_20;
mainBackendDataEvent_40;
mainBackendDataEvent_60;
mainBackendDataEvent_80;
mainBackendDataEvent_100;
const dataMapping = {
    1: mainBackendDataEvent_20,
    2: mainBackendDataEvent_40,
    3: mainBackendDataEvent_60,
    4: mainBackendDataEvent_80,
    5: mainBackendDataEvent_100,
};
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
export class MainEvent {
    constructor() {
        console.log("MainEvent");
    }
    eventDataBinding(index) {
        const dataSource = dataMapping[index];
        if (dataSource) {
            const mainItemList = dataSource[0].data
                .map(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => ({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }));
            console.log(mainItemList);
            this.creating(mainItemList);
        }
        else {
            console.log("데이터 끝");
        }
    }
    creating(itemList) {
        const mainEl = document.querySelector(".main__container");
        itemList.forEach(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => {
            console.log(`Title: ${title}, Image: ${titleImage}`);
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
        });
        const searchCountEl = document.querySelector(".searchCount");
        searchCountEl.innerText = Number(searchCountEl.innerText) + itemList.length;
    }
}
//# sourceMappingURL=mainEvent.js.map