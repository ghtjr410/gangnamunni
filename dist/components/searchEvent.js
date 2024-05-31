import { mainBackendData } from '../datas/mainData.js';
mainBackendData;
import { mainBackendDataEvent_20, mainBackendDataEvent_40, mainBackendDataEvent_60, mainBackendDataEvent_80, mainBackendDataEvent_100 } from '../datas/mainDataEvent.js';
mainBackendDataEvent_20;
mainBackendDataEvent_40;
mainBackendDataEvent_60;
mainBackendDataEvent_80;
mainBackendDataEvent_100;
const dataMapping = [
    mainBackendDataEvent_20,
    mainBackendDataEvent_40,
    mainBackendDataEvent_60,
    mainBackendDataEvent_80,
    mainBackendDataEvent_100,
];
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
export class DynamicSearchMain {
    constructor(value) {
        console.log("아아 안녕하세요 여기는");
        this.searchText = value;
    }
    render() {
        const mainEl = document.querySelector(".main__container");
        console.log(`${this.searchText} 지금 도착했습니다`);
        const mainItemList = mainBackendData[0].data
            .map(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => ({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }));
        const filteredItems = mainItemList.filter(item => item.title.includes(this.searchText));
        // 여기서 재생산
        filteredItems.forEach(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => {
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
        const data1 = dataMapping.map((v) => v[0].data);
        data1.forEach(v => {
            v.forEach(({ titleImage, hospitalSiGunGu, hospitalName, title, rating, ratingCount, discountedCost, cost }) => {
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
                console.log(`${title} - ${this.searchText}`);
                if (title.includes(this.searchText)) {
                    console.log(this.searchText);
                    mainEl === null || mainEl === void 0 ? void 0 : mainEl.insertAdjacentHTML("beforeend", insertHTML);
                }
            });
        });
        // console.log(data2);
    }
}
//# sourceMappingURL=searchEvent.js.map