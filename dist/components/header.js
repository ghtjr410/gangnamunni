import { headerBackendData } from '../datas/headerData.js';
headerBackendData;
export class Header {
    constructor() {
    }
    dataBinding() {
        console.log("데이터바인딩");
        console.log(headerBackendData);
        const headerItemList = headerBackendData[0]
            .data.map(({ name, normalIconUrl, selectedIconUrl }) => ({ name, normalIconUrl, selectedIconUrl }))
            .filter((v, i) => i < 9);
        const upperHeader = document.querySelector(".upperHeader");
        headerItemList.forEach(({ name, normalIconUrl, selectedIconUrl }) => {
            const insertHTML = `
            <li>
            <img src="${normalIconUrl}" alt="">
            <img class="hidden" src="${selectedIconUrl}" alt="">
            <p>${name}</p>
            </li>
            `;
            upperHeader === null || upperHeader === void 0 ? void 0 : upperHeader.insertAdjacentHTML("beforeend", insertHTML);
        });
        upperHeader === null || upperHeader === void 0 ? void 0 : upperHeader.addEventListener('click', (event) => {
            const target = event.target;
            const li = target.closest('li');
            if (li) {
                const imgs = li.querySelectorAll('img');
                imgs.forEach(img => {
                    img.classList.toggle('hidden');
                });
                const p = li.querySelector('p');
                if (p) {
                    p.classList.toggle('red');
                }
            }
        });
    }
    render() {
        console.log("header.ts 도착");
        const headerFix = document.createElement('header');
        headerFix.className = 'header__fixedContainer';
        document.body.prepend(headerFix);
        headerFix.innerHTML = `
        <div class="fixedHeader">
            <img src="https://www.gangnamunni.com/images/kr/logo-kr.svg" alt="Logo">
            <div class="fixedHeader__searchBox">
                <div class="fixedHeader__searchInput">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input class="fixedHeader__searchInput__input" type="text" name="" id="">
                </div>
                
                <button class="fixedHeader__searchBox__btn">로그인/가입</button>
            </div>
        </div>
        
        `;
        const section01 = document.createElement('div');
        section01.className = 'header__Container';
        document.body.appendChild(section01);
        section01.innerHTML = `
        <nav class="upperHeader">
            <!-- <li>
            <img src="" alt="">
            <p>전체</p>
            </li> -->
        </nav>
        <div class="searchResult__container">
            <h1 class="searchResult">'
                <span class="searchCategory">코성형</span>' 이벤트 
                <span class="searchCount red">1234</span>건
            </h1>
        </div>
        `;
        this.dataBinding();
    }
}
//# sourceMappingURL=header.js.map