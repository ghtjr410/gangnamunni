import { Header } from './components/header.js';
import { Main } from './components/main.js';
import { MainEvent } from './components/mainEvent.js';
import { DynamicSearchMain } from './components/searchEvent.js';
document.addEventListener('DOMContentLoaded', () => {
    console.log("진입점");
    const header = new Header();
    header.render();
    const main = new Main();
    main.render();
    let index = 1;
    const mainEvent = new MainEvent();
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (scrollTop + windowHeight >= documentHeight) {
            console.log(index);
            mainEvent.eventDataBinding(index);
            index += 1;
        }
    });
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            console.log("엔터");
            const inputEl = document.querySelector(".fixedHeader__searchInput__input");
            // 1. main태그 안에 card태그를 포함한 모든 엘리먼트를 삭제
            const mainElement = document.querySelector('main');
            // main 태그 안의 모든 자식 요소 삭제
            while (mainElement.firstChild) {
                mainElement.removeChild(mainElement.firstChild);
            }
            const dsm = new DynamicSearchMain(inputEl.value);
            dsm.render();
        }
    });
});
//# sourceMappingURL=index.js.map