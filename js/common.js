document.addEventListener('DOMContentLoaded', () => {

    //햄버거 메뉴 클릭시 header에 on 클래스 토글
    const $ham = document.querySelector('.ham');
    const $header = document.querySelector('header');
    $ham.addEventListener('click', () => {
        $header.classList.toggle('on');
        document.body.classList.toggle('rock');
    });

    //메뉴 li들에 순차적 delay 주기
    const gnbItems = document.querySelectorAll('header .fix .gnb>ul>li');
    gnbItems.forEach((li, index) => {
        li.style.transitionDelay = `${0.2 * (index + 1)}s`;
    })

    //스크롤시 header 색상 바꾸기, blur 바꾸기
    window.addEventListener('scroll', () => {
        const st = window.scrollY;
        if (st >= 80) {
            $header.classList.add('sc');
        } else {
            $header.classList.remove('sc');
        }
    });

});//dom end
