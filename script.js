const zone1 = document.getElementById('zone1');
const zone2 = document.getElementById('zone2');
const addImageButton = document.getElementById('addImageButton');
const imageUrlInput = document.getElementById('imageUrlInput');

// 고정된 이미지 URL 목록
const fixedImages = [
    'https://stimg.sooplive.co.kr/LOGO/rr/rrvv17/m/rrvv17.webp',
    'https://stimg.sooplive.co.kr/LOGO/le/legendhyuk/m/legendhyuk.webp',
    'https://stimg.sooplive.co.kr/LOGO/kh/khm11903/m/khm11903.webp',
    'https://stimg.sooplive.co.kr/LOGO/lo/lovely5959/m/lovely5959.webp',
    'https://stimg.sooplive.co.kr/LOGO/wn/wnstn0905/m/wnstn0905.webp',
    'https://stimg.sooplive.co.kr/LOGO/dl/dlghfjs/m/dlghfjs.webp',
    'https://stimg.sooplive.co.kr/LOGO/59/595935/m/595935.webp',
    'https://stimg.sooplive.co.kr/LOGO/du/dudadi770/m/dudadi770.webp',
    'https://stimg.sooplive.co.kr/LOGO/hy/hyn8210/m/hyn8210.webp',
    'https://stimg.sooplive.co.kr/LOGO/da/dackda/m/dackda.webp',
    'https://stimg.sooplive.co.kr/LOGO/gi/girlbbo/m/girlbbo.webp',
    'https://stimg.sooplive.co.kr/LOGO/fl/flo413/m/flo413.webp',
    'https://stimg.sooplive.co.kr/LOGO/su/suhee0051/m/suhee0051.webp',
    'https://stimg.sooplive.co.kr/LOGO/do/doeupzi/m/doeupzi.webp',
    'https://stimg.sooplive.co.kr/LOGO/ki/kimseah94/m/kimseah94.webp',
    'https://stimg.sooplive.co.kr/LOGO/mo/mochiya/m/mochiya.webp',
    'https://stimg.sooplive.co.kr/LOGO/na/na2un/m/na2un.webp',
    'https://stimg.sooplive.co.kr/LOGO/yy/yyk3390/m/yyk3390.webp',
    'https://stimg.sooplive.co.kr/LOGO/la/larothy/m/larothy.webp',
    'https://stimg.sooplive.co.kr/LOGO/nm/nmangoquince/m/nmangoquince.webp',
    'https://stimg.sooplive.co.kr/LOGO/tl/tleod1818/m/tleod1818.webp',
    'https://stimg.sooplive.co.kr/LOGO/py/pyowoo/m/pyowoo.webp',
    'https://stimg.sooplive.co.kr/LOGO/gk/gkxl1004/m/gkxl1004.webp',
    'https://stimg.sooplive.co.kr/LOGO/yo/youngjjang96/m/youngjjang96.webp',
    'https://stimg.sooplive.co.kr/LOGO/co/cococ11/m/cococ11.webp',
    'https://stimg.sooplive.co.kr/LOGO/gu/guqlswls123/m/guqlswls123.webp',
    'https://stimg.sooplive.co.kr/LOGO/sa/sa5791/m/sa5791.webp',
    'https://stimg.sooplive.co.kr/LOGO/ky/kyaang123/m/kyaang123.webp',
    'https://stimg.sooplive.co.kr/LOGO/mi/mini1212/m/mini1212.webp',
    'https://stimg.sooplive.co.kr/LOGO/eh/ehehdldl/m/ehehdldl.webp',
    'https://stimg.sooplive.co.kr/LOGO/hi/hichume/m/hichume.webp',
    'https://stimg.sooplive.co.kr/LOGO/aa/aa6232/m/aa6232.webp',
    'https://stimg.sooplive.co.kr/LOGO/so/song1218/m/song1218.webp',
    'https://stimg.sooplive.co.kr/LOGO/ql/qlxkals1528/m/qlxkals1528.webp',
    'https://stimg.sooplive.co.kr/LOGO/hy/hyundana/m/hyundana.webp',
    'https://stimg.sooplive.co.kr/LOGO/rk/rkdmsdl782/m/rkdmsdl782.webp',
    'https://stimg.sooplive.co.kr/LOGO/gm/gmmw/m/gmmw.webp',
    'https://stimg.sooplive.co.kr/LOGO/ch/chamingcha/m/chamingcha.webp',
    'https://stimg.sooplive.co.kr/LOGO/im/imha22/m/imha22.webp',
    'https://stimg.sooplive.co.kr/LOGO/no/northpole/m/northpole.webp',
    'https://stimg.sooplive.co.kr/LOGO/za/zamgyeol/m/zamgyeol.webp',
    'https://stimg.sooplive.co.kr/LOGO/ma/maoruyakr/m/maoruyakr.webp',
    'https://stimg.sooplive.co.kr/LOGO/vf/vf3366/m/vf3366.webp',
    'https://stimg.sooplive.co.kr/LOGO/ch/cheto1206/m/cheto1206.webp',
    'https://stimg.sooplive.co.kr/LOGO/kj/kjkj4424/m/kjkj4424.webp',
    'https://stimg.sooplive.co.kr/LOGO/eh/ehehdldl/m/ehehdldl.webp',
    'https://stimg.sooplive.co.kr/LOGO/tn/tn2704/m/tn2704.webp',
    'https://stimg.sooplive.co.kr/LOGO/yo/yoonesaem/m/yoonesaem.webp',
    'https://stimg.sooplive.co.kr/LOGO/ug/ugameming/m/ugameming.webp',
    'https://stimg.sooplive.co.kr/LOGO/du/duvl123/m/duvl123.webp',
    'https://stimg.sooplive.co.kr/LOGO/bl/blackchu/m/blackchu.webp',
    'https://stimg.sooplive.co.kr/LOGO/do/dobby1031/m/dobby1031.webp',
    'https://stimg.sooplive.co.kr/LOGO/9a/9ambler/m/9ambler.webp',
    'https://stimg.sooplive.co.kr/LOGO/ki/kissday621/m/kissday621.webp',
    'https://stimg.sooplive.co.kr/LOGO/zk/zkwks4413/m/zkwks4413.webp',
    'https://stimg.sooplive.co.kr/LOGO/yj/yjkim5500/m/yjkim5500.webp',
    'https://stimg.sooplive.co.kr/LOGO/zz/zz102zz/m/zz102zz.webp',
    'https://stimg.sooplive.co.kr/LOGO/ch/chunbongtv/m/chunbongtv.webp',
    'https://stimg.sooplive.co.kr/LOGO/rn/rnjsrhddl/m/rnjsrhddl.webp',
    'https://stimg.sooplive.co.kr/LOGO/cd/cdbswhd8913/m/cdbswhd8913.webp',
    'https://stimg.sooplive.co.kr/LOGO/zk/zkdhtm1424/m/zkdhtm1424.webp',
    'https://stimg.sooplive.co.kr/LOGO/po/poos69/m/poos69.webp',
    'https://stimg.sooplive.co.kr/LOGO/qk/qkfhzhals/m/qkfhzhals.webp',
    'https://stimg.sooplive.co.kr/LOGO/gu/gudcjf604/m/gudcjf604.webp',
    'https://stimg.sooplive.co.kr/LOGO/wo/wogustnrkd/m/wogustnrkd.webp',
    'https://stimg.sooplive.co.kr/LOGO/ap/apzks1236/m/apzks1236.webp',
    'https://stimg.sooplive.co.kr/LOGO/rk/rkdakstlr911/m/rkdakstlr911.webp',
    'https://stimg.sooplive.co.kr/LOGO/cn/cnsgkcnehd74/m/cnsgkcnehd74.webp',
    'https://stimg.sooplive.co.kr/LOGO/ho/hockey05/m/hockey05.webp',
    'https://stimg.sooplive.co.kr/LOGO/ti/tichiel93/m/tichiel93.webp',
    'https://stimg.sooplive.co.kr/LOGO/pk/pkdlwpans/m/pkdlwpans.webp',
    'https://stimg.sooplive.co.kr/LOGO/dn/dngus1989/m/dngus1989.webp',
    'https://stimg.sooplive.co.kr/LOGO/cb/cbn270/m/cbn270.webp',
    'https://stimg.sooplive.co.kr/LOGO/ak/aksen7833/m/aksen7833.webp',
    'https://stimg.sooplive.co.kr/LOGO/wn/wnfkrhs/m/wnfkrhs.webp',
    'https://stimg.sooplive.co.kr/LOGO/km/kmo7895/m/kmo7895.webp',
    'https://stimg.sooplive.co.kr/LOGO/eo/eodn1217/m/eodn1217.webp',
    'https://stimg.sooplive.co.kr/LOGO/re/reaperd123/m/reaperd123.webp',
    'https://stimg.sooplive.co.kr/LOGO/wo/won9sdg955/m/won9sdg955.webp',
    'https://stimg.sooplive.co.kr/LOGO/eh/ehsaksdl00/m/ehsaksdl00.webp',
    'https://stimg.sooplive.co.kr/LOGO/h0/h060709/m/h060709.webp',
    'https://stimg.sooplive.co.kr/LOGO/wj/wjdekgus112/m/wjdekgus112.webp',
    'https://stimg.sooplive.co.kr/LOGO/jr/jrdart/m/jrdart.webp',
    'https://stimg.sooplive.co.kr/LOGO/ab/abcc777/m/abcc777.webp',
    'https://stimg.sooplive.co.kr/LOGO/ca/cah0482/m/cah0482.webp',
    'https://stimg.sooplive.co.kr/LOGO/si/siiyeon/m/siiyeon.webp',
    'https://stimg.sooplive.co.kr/LOGO/kd/kdb1223/m/kdb1223.webp',
    'https://stimg.sooplive.co.kr/LOGO/ti/tinkerblond/m/tinkerblond.webp',
    'https://stimg.sooplive.co.kr/LOGO/bi/bibitrue/m/bibitrue.webp',
    'https://stimg.sooplive.co.kr/LOGO/0e/0e0e4e/m/0e0e4e.webp',
    'https://stimg.sooplive.co.kr/LOGO/cj/cjstkdbsl3/m/cjstkdbsl3.webp',
    'https://stimg.sooplive.co.kr/LOGO/na/namyeonhee/m/namyeonhee.webp',
    'https://stimg.sooplive.co.kr/LOGO/fi/fishstory/m/fishstory.webp',
    'https://stimg.sooplive.co.kr/LOGO/kc/kcw1217/m/kcw1217.webp',
    'https://stimg.sooplive.co.kr/LOGO/al/alicehiyam/m/alicehiyam.webp',
    'https://stimg.sooplive.co.kr/LOGO/li/lika07/m/lika07.webp',
    'https://stimg.sooplive.co.kr/LOGO/mi/mini8282/m/mini8282.webp',
    'https://stimg.sooplive.co.kr/LOGO/mi/mint616/m/mint616.webp',
    'https://stimg.sooplive.co.kr/LOGO/gp/gptj000/m/gptj000.webp',
    'https://stimg.sooplive.co.kr/LOGO/ha/hansoree12/m/hansoree12.webp',
    'https://stimg.sooplive.co.kr/LOGO/he/heeddo0910/m/heeddo0910.webp',
    'https://stimg.sooplive.co.kr/LOGO/su/sunne1010/m/sunne1010.webp',
    'https://stimg.sooplive.co.kr/LOGO/di/dinggoolx3/m/dinggoolx3.webp',
    'https://stimg.sooplive.co.kr/LOGO/ra/rancho0o/m/rancho0o.webp',
    'https://stimg.sooplive.co.kr/LOGO/nn/nnagongju54/m/nnagongju54.webp',
    'https://stimg.sooplive.co.kr/LOGO/ai/aigong7576/m/aigong7576.webp',
    'https://stimg.sooplive.co.kr/LOGO/nd/nduang18/m/nduang18.webp',
    'https://stimg.sooplive.co.kr/LOGO/ak/akdma9692/m/akdma9692.webp',
    'https://stimg.sooplive.co.kr/LOGO/eu/eunpp0/m/eunpp0.webp',
    'https://stimg.sooplive.co.kr/LOGO/br/breezy25/m/breezy25.webp',
    'https://stimg.sooplive.co.kr/LOGO/ti/tinkcho123/m/tinkcho123.webp',
    'https://stimg.sooplive.co.kr/LOGO/rk/rkdalstnld/m/rkdalstnld.webp',
    'https://stimg.sooplive.co.kr/LOGO/ha/han2243944/m/han2243944.webp',
    'https://stimg.sooplive.co.kr/LOGO/wi/wifkcn194/m/wifkcn194.webp',
    'https://stimg.sooplive.co.kr/LOGO/sa/sarnrgus/m/sarnrgus.webp'
];

// 페이지 로드 시 고정된 이미지를 영역 1에 추가
window.onload = function() {
    fixedImages.forEach(url => {
        addImageToZone(url, zone1);
    });
};

// 이미지 추가 버튼 클릭 이벤트 처리
addImageButton.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value;
    if (imageUrl) {
        addImageToZone(imageUrl, zone1); // URL로 이미지 추가 시 영역 1에 추가
        imageUrlInput.value = ''; // 입력 필드 초기화
    }
});

// 이미지 영역에 추가하는 함수
function addImageToZone(url, zone) {
    const imgElement = document.createElement('div');
    imgElement.style.backgroundImage = `url(${url})`;
    imgElement.classList.add('circle-image');

    // 이미지 클릭 이벤트 처리
    imgElement.addEventListener('click', () => {
        moveImage(imgElement);
    });

    zone.appendChild(imgElement);
}

// 이미지 이동 함수
function moveImage(imgElement) {
    // 현재 이미지가 있는 곳에 따라 반대 영역으로 이동
    if (imgElement.parentElement.id === 'zone1') {
        zone2.appendChild(imgElement); // 영역 1 -> 영역 2로 이동
        imgElement.style.width = '140px'; // 영역 2에선 이미지 크기 120px
        imgElement.style.height = '140px';
    } else {
        zone1.appendChild(imgElement); // 영역 2 -> 영역 1로 이동
        imgElement.style.width = '80px'; // 영역 1에선 이미지 크기 60px
        imgElement.style.height = '80px';
    }
}
