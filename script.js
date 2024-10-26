const zone1 = document.getElementById('zone1');
const zone2 = document.getElementById('zone2');
const addImageButton = document.getElementById('addImageButton');
const imageUrlInput = document.getElementById('imageUrlInput');

// 고정된 이미지 URL 목록과 이름, 외곽선 여부
const fixedImages = [
            { name: '성태', url: 'https://stimg.sooplive.co.kr/LOGO/rr/rrvv17/m/rrvv17.webp', hasBorder: true },
            { name: '오아', url: 'https://stimg.sooplive.co.kr/LOGO/le/legendhyuk/m/legendhyuk.webp', hasBorder: true }, 
            { name: '봉준', url: 'https://stimg.sooplive.co.kr/LOGO/kh/khm11903/m/khm11903.webp', hasBorder: true },
            { name: '수피', url: 'https://stimg.sooplive.co.kr/LOGO/lo/lovely5959/m/lovely5959.webp', hasBorder: true }, 
            { name: '사장', url: 'https://stimg.sooplive.co.kr/LOGO/wn/wnstn0905/m/wnstn0905.webp', hasBorder: true },
            { name: '깨박', url: 'https://stimg.sooplive.co.kr/LOGO/dl/dlghfjs/m/dlghfjs.webp', hasBorder: true },       
            { name: '임아니', url: 'https://stimg.sooplive.co.kr/LOGO/10/1004suna/m/1004suna.webp', hasBorder: false },
            { name: '상어녀', url: 'https://stimg.sooplive.co.kr/LOGO/59/595935/m/595935.webp', hasBorder: false },
            { name: '듀단', url: 'https://stimg.sooplive.co.kr/LOGO/du/dudadi770/m/dudadi770.webp', hasBorder: false },
            { name: '토끼예나', url: 'https://stimg.sooplive.co.kr/LOGO/hy/hyn8210/m/hyn8210.webp', hasBorder: false },
            { name: '안겨', url: 'https://stimg.sooplive.co.kr/LOGO/da/dackda/m/dackda.webp', hasBorder: false },
            { name: '걸뽀', url: 'https://stimg.sooplive.co.kr/LOGO/gi/girlbbo/m/girlbbo.webp', hasBorder: false },
            { name: '수힛', url: 'https://stimg.sooplive.co.kr/LOGO/su/suhee0051/m/suhee0051.webp', hasBorder: false },
            { name: '도읍지', url: 'https://stimg.sooplive.co.kr/LOGO/do/doeupzi/m/doeupzi.webp', hasBorder: false },
            { name: '김세아', url: 'https://stimg.sooplive.co.kr/LOGO/ki/kimseah94/m/kimseah94.webp', hasBorder: false },
            { name: '박나닝', url: 'https://stimg.sooplive.co.kr/LOGO/na/na2un/m/na2un.webp', hasBorder: false },
            { name: '땡지', url: 'https://stimg.sooplive.co.kr/LOGO/yy/yyk3390/m/yyk3390.webp', hasBorder: false },
            { name: '라로시', url: 'https://stimg.sooplive.co.kr/LOGO/la/larothy/m/larothy.webp', hasBorder: false },
            { name: '망구랑', url: 'https://stimg.sooplive.co.kr/LOGO/nm/nmangoquince/m/nmangoquince.webp', hasBorder: false },
            { name: '표우', url: 'https://stimg.sooplive.co.kr/LOGO/py/pyowoo/m/pyowoo.webp', hasBorder: false },
            { name: '하티하티', url: 'https://stimg.sooplive.co.kr/LOGO/gk/gkxl1004/m/gkxl1004.webp', hasBorder: false },
            { name: '영쨩', url: 'https://stimg.sooplive.co.kr/LOGO/yo/youngjjang96/m/youngjjang96.webp', hasBorder: false },
            { name: '코코양', url: 'https://stimg.sooplive.co.kr/LOGO/co/cococ11/m/cococ11.webp', hasBorder: false },
            { name: '따스히', url: 'https://stimg.sooplive.co.kr/LOGO/gu/guqlswls123/m/guqlswls123.webp', hasBorder: false },
            { name: '린링', url: 'https://stimg.sooplive.co.kr/LOGO/mi/mini1212/m/mini1212.webp', hasBorder: false },
            { name: '초아', url: 'https://stimg.sooplive.co.kr/LOGO/eh/ehehdldl/m/ehehdldl.webp', hasBorder: false },
            { name: '히츠메', url: 'https://stimg.sooplive.co.kr/LOGO/hi/hichume/m/hichume.webp', hasBorder: false },
            { name: '쥐돌이', url: 'https://stimg.sooplive.co.kr/LOGO/aa/aa6232/m/aa6232.webp', hasBorder: false },
            { name: '아이쨩', url: 'https://stimg.sooplive.co.kr/LOGO/ql/qlxkals1528/m/qlxkals1528.webp', hasBorder: false },
            { name: '현단아', url: 'https://stimg.sooplive.co.kr/LOGO/hy/hyundana/m/hyundana.webp', hasBorder: false },
            { name: '한아련', url: 'https://stimg.sooplive.co.kr/LOGO/rk/rkdmsdl782/m/rkdmsdl782.webp', hasBorder: false },
            { name: '새라새라', url: 'https://stimg.sooplive.co.kr/LOGO/gm/gmmw/m/gmmw.webp', hasBorder: false },
            { name: '차밍챠', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chamingcha/m/chamingcha.webp', hasBorder: false },
            { name: '임하밍', url: 'https://stimg.sooplive.co.kr/LOGO/im/imha22/m/imha22.webp', hasBorder: false },
            { name: '엔쥬', url: 'https://stimg.sooplive.co.kr/LOGO/no/northpole/m/northpole.webp', hasBorder: false },
            { name: '잠결', url: 'https://stimg.sooplive.co.kr/LOGO/za/zamgyeol/m/zamgyeol.webp', hasBorder: false },
            { name: '마왕루야', url: 'https://stimg.sooplive.co.kr/LOGO/ma/maoruyakr/m/maoruyakr.webp', hasBorder: false },
            { name: '클로이', url: 'https://stimg.sooplive.co.kr/LOGO/vf/vf3366/m/vf3366.webp', hasBorder: false },
            { name: '먹체토', url: 'https://stimg.sooplive.co.kr/LOGO/ch/cheto1206/m/cheto1206.webp', hasBorder: false },
            { name: '체리꿀맛', url: 'https://stimg.sooplive.co.kr/LOGO/tn/tn2704/m/tn2704.webp', hasBorder: false },
            { name: '모요', url: 'https://stimg.sooplive.co.kr/LOGO/du/duvl123/m/duvl123.webp', hasBorder: false },
            { name: '도현', url: 'https://stimg.sooplive.co.kr/LOGO/do/dobby1031/m/dobby1031.webp', hasBorder: false },
            { name: '감블러', url: 'https://stimg.sooplive.co.kr/LOGO/9a/9ambler/m/9ambler.webp', hasBorder: false },
            { name: '롤선생', url: 'https://stimg.sooplive.co.kr/LOGO/ki/kissday621/m/kissday621.webp', hasBorder: false },
            { name: '꿀탱탱', url: 'https://stimg.sooplive.co.kr/LOGO/zk/zkwks4413/m/zkwks4413.webp', hasBorder: false },
            { name: '조디악', url: 'https://stimg.sooplive.co.kr/LOGO/yj/yjkim5500/m/yjkim5500.webp', hasBorder: false },
            { name: '코뚱잉', url: 'https://stimg.sooplive.co.kr/LOGO/zz/zz102zz/m/zz102zz.webp', hasBorder: false },
            { name: '춘봉', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chunbongtv/m/chunbongtv.webp', hasBorder: false },
            { name: '윤루트', url: 'https://stimg.sooplive.co.kr/LOGO/rn/rnjsrhddl/m/rnjsrhddl.webp', hasBorder: false },
            { name: '최윤종', url: 'https://stimg.sooplive.co.kr/LOGO/cd/cdbswhd8913/m/cdbswhd8913.webp', hasBorder: false },
            { name: 'DG98', url: 'https://stimg.sooplive.co.kr/LOGO/zk/zkdhtm1424/m/zkdhtm1424.webp', hasBorder: false },
            { name: '트할', url: 'https://stimg.sooplive.co.kr/LOGO/po/poos69/m/poos69.webp', hasBorder: false },
            { name: '에스카', url: 'https://stimg.sooplive.co.kr/LOGO/qk/qkfhzhals/m/qkfhzhals.webp', hasBorder: false },
            { name: '블랙워크', url: 'https://stimg.sooplive.co.kr/LOGO/gu/gudcjf604/m/gudcjf604.webp', hasBorder: false },
            { name: '섹시피그', url: 'https://stimg.sooplive.co.kr/LOGO/wo/wogustnrkd/m/wogustnrkd.webp', hasBorder: false },
            { name: '학살', url: 'https://stimg.sooplive.co.kr/LOGO/ap/apzks1236/m/apzks1236.webp', hasBorder: false },
            { name: '강만식', url: 'https://stimg.sooplive.co.kr/LOGO/rk/rkdakstlr911/m/rkdakstlr911.webp', hasBorder: false },
            { name: '조경훈', url: 'https://stimg.sooplive.co.kr/LOGO/cn/cnsgkcnehd74/m/cnsgkcnehd74.webp', hasBorder: false },
            { name: '필메', url: 'https://stimg.sooplive.co.kr/LOGO/ho/hockey05/m/hockey05.webp', hasBorder: false },
            { name: '빠뽀', url: 'https://stimg.sooplive.co.kr/LOGO/ti/tichiel93/m/tichiel93.webp', hasBorder: false },
            { name: '싸패', url: 'https://stimg.sooplive.co.kr/LOGO/pk/pkdlwpans/m/pkdlwpans.webp', hasBorder: false },
            { name: '전하', url: 'https://stimg.sooplive.co.kr/LOGO/dn/dngus1989/m/dngus1989.webp', hasBorder: false },
            { name: '수찬', url: 'https://stimg.sooplive.co.kr/LOGO/cb/cbn270/m/cbn270.webp', hasBorder: false },
            { name: '꾸티뉴', url: 'https://stimg.sooplive.co.kr/LOGO/ak/aksen7833/m/aksen7833.webp', hasBorder: false },
            { name: '데이드림', url: 'https://stimg.sooplive.co.kr/LOGO/wn/wnfkrhs/m/wnfkrhs.webp', hasBorder: false },
            { name: '아칸', url: 'https://stimg.sooplive.co.kr/LOGO/km/kmo7895/m/kmo7895.webp', hasBorder: false },
            { name: '얼이', url: 'https://stimg.sooplive.co.kr/LOGO/eo/eodn1217/m/eodn1217.webp', hasBorder: false },
            { name: '퍼드', url: 'https://stimg.sooplive.co.kr/LOGO/re/reaperd123/m/reaperd123.webp', hasBorder: false },
            { name: '주화이', url: 'https://stimg.sooplive.co.kr/LOGO/eh/ehsaksdl00/m/ehsaksdl00.webp', hasBorder: false },
            { name: '정다니', url: 'https://stimg.sooplive.co.kr/LOGO/wj/wjdekgus112/m/wjdekgus112.webp', hasBorder: false },
            { name: '이지상', url: 'https://stimg.sooplive.co.kr/LOGO/jr/jrdart/m/jrdart.webp', hasBorder: false },
        { name: '주드', url: 'https://stimg.sooplive.co.kr/LOGO/rk/rkdalstnld/m/rkdalstnld.webp', hasBorder: false },
        { name: '온자두', url: 'https://stimg.sooplive.co.kr/LOGO/ak/akdma9692/m/akdma9692.webp', hasBorder: false },
        { name: '피크리', url: 'https://stimg.sooplive.co.kr/LOGO/rm/rmsidvldpf/m/rmsidvldpf.webp', hasBorder: false },
        { name: '난워니', url: 'https://stimg.sooplive.co.kr/LOGO/wh/whiteone325/m/whiteone325.webp', hasBorder: false },
        { name: '삼성민', url: 'https://stimg.sooplive.co.kr/LOGO/ha/han2243944/m/han2243944.webp', hasBorder: false },
        { name: '김멘탈', url: 'https://stimg.sooplive.co.kr/LOGO/sk/skycca/m/skycca.webp', hasBorder: false },
        { name: '댕뚜비', url: 'https://stimg.sooplive.co.kr/LOGO/hu/huy7856/m/huy7856.webp', hasBorder: false },
        { name: '강주이', url: 'https://stimg.sooplive.co.kr/LOGO/lk/lkjh1234/m/lkjh1234.webp', hasBorder: false },
        { name: '소연화', url: 'https://stimg.sooplive.co.kr/LOGO/tk/tkfkdgodufks/m/tkfkdgodufks.webp', hasBorder: false },
        { name: '낑한솔', url: 'https://stimg.sooplive.co.kr/LOGO/ha/hansoree12/m/hansoree12.webp', hasBorder: false },
        { name: '드래프트', url: 'https://stimg.sooplive.co.kr/LOGO/eh/ehdghks1857/m/ehdghks1857.webp', hasBorder: false },
        { name: '스윙', url: 'https://stimg.sooplive.co.kr/LOGO/j3/j3y3c3/m/j3y3c3.webp', hasBorder: false },
        { name: '나옹이빵', url: 'https://stimg.sooplive.co.kr/LOGO/na/naong2bbang/m/naong2bbang.webp', hasBorder: false },
        { name: '성피아', url: 'https://stimg.sooplive.co.kr/LOGO/oo/ooojoijo/m/ooojoijo.webp', hasBorder: false },
        { name: '하나마나', url: 'https://stimg.sooplive.co.kr/LOGO/ha/hanamana1015/m/hanamana1015.webp', hasBorder: false },
        { name: '비에타', url: 'https://stimg.sooplive.co.kr/LOGO/ek/ektha9511/m/ektha9511.webp', hasBorder: false },
        { name: '로티', url: 'https://stimg.sooplive.co.kr/LOGO/wk/wkho0208/m/wkho0208.webp', hasBorder: false },
        { name: '이무지', url: 'https://stimg.sooplive.co.kr/LOGO/mo/moojj030/m/moojj030.webp', hasBorder: false },
        { name: '김웰로', url: 'https://stimg.sooplive.co.kr/LOGO/we/wellro314/m/wellro314.webp', hasBorder: false },
        { name: '성장', url: 'https://stimg.sooplive.co.kr/LOGO/wk/wkdghks99/m/wkdghks99.webp', hasBorder: false },
        { name: '아르', url: 'https://stimg.sooplive.co.kr/LOGO/hy/hyj123123/m/hyj123123.webp', hasBorder: false },
        { name: '세리아', url: 'https://stimg.sooplive.co.kr/LOGO/se/seriya0312/m/seriya0312.webp', hasBorder: false },
        { name: '또니', url: 'https://stimg.sooplive.co.kr/LOGO/tj/tjsgml899/m/tjsgml899.webp', hasBorder: false },
        { name: '세이호', url: 'https://stimg.sooplive.co.kr/LOGO/jj/jjjhhh0034/m/jjjhhh0034.webp', hasBorder: false },
        { name: '고토', url: 'https://stimg.sooplive.co.kr/LOGO/ym/ymk3525/m/ymk3525.webp', hasBorder: false },
        { name: '야옴', url: 'https://stimg.sooplive.co.kr/LOGO/ya/yaom0728/m/yaom0728.webp', hasBorder: false },
        { name: '헬띠', url: 'https://stimg.sooplive.co.kr/LOGO/go/gofl1244/m/gofl1244.webp', hasBorder: false },
        { name: '김대휘', url: 'https://stimg.sooplive.co.kr/LOGO/kg/kgod678/m/kgod678.webp', hasBorder: false },
        { name: '로또비', url: 'https://stimg.sooplive.co.kr/LOGO/lo/lottobebe/m/lottobebe.webp', hasBorder: false },
        { name: '뿌잉', url: 'https://stimg.sooplive.co.kr/LOGO/so/so218218/m/so218218.webp', hasBorder: false },
        { name: '김수호님', url: 'https://stimg.sooplive.co.kr/LOGO/tn/tnghdbsgh/m/tnghdbsgh.webp', hasBorder: false },
        { name: '박재박', url: 'https://stimg.sooplive.co.kr/LOGO/ja/jaeparkk/m/jaeparkk.webp', hasBorder: false },
        { name: '한둬얼', url: 'https://stimg.sooplive.co.kr/LOGO/qn/qn308dud/m/qn308dud.webp', hasBorder: false },
        { name: '허니론', url: 'https://stimg.sooplive.co.kr/LOGO/se/seochol/m/seochol.webp', hasBorder: false },
        { name: '지야', url: 'https://stimg.sooplive.co.kr/LOGO/je/jeeyab/m/jeeyab.webp', hasBorder: false },
        { name: '이톨', url: 'https://stimg.sooplive.co.kr/LOGO/tj/tjsrhr123/m/tjsrhr123.webp', hasBorder: false },
        { name: '바뮤', url: 'https://stimg.sooplive.co.kr/LOGO/ba/bamyu0/m/bamyu0.webp', hasBorder: false },
        { name: '바먀', url: 'https://stimg.sooplive.co.kr/LOGO/wo/wooyah21/m/wooyah21.webp', hasBorder: false },
        { name: '장마찌', url: 'https://stimg.sooplive.co.kr/LOGO/ja/jangmazzi/m/jangmazzi.webp', hasBorder: false },
        { name: '모나양', url: 'https://stimg.sooplive.co.kr/LOGO/mo/monas2/m/monas2.webp', hasBorder: false },
        { name: '온네님', url: 'https://stimg.sooplive.co.kr/LOGO/oo/ooonae/m/ooonae.webp', hasBorder: false },
        { name: '파니', url: 'https://stimg.sooplive.co.kr/LOGO/ba/baeksoon2/m/baeksoon2.webp', hasBorder: false },
        { name: '김준03', url: 'https://stimg.sooplive.co.kr/LOGO/lo/love145899/m/love145899.webp', hasBorder: false },
        { name: '부바', url: 'https://stimg.sooplive.co.kr/LOGO/kz/kzxc0129/m/kzxc0129.webp', hasBorder: false },
        { name: '솜주먹', url: 'https://stimg.sooplive.co.kr/LOGO/ld/ldrboo/m/ldrboo.webp', hasBorder: false },
        { name: '지워니', url: 'https://stimg.sooplive.co.kr/LOGO/sk/sk6902/m/sk6902.webp', hasBorder: false },
        { name: '심술', url: 'https://stimg.sooplive.co.kr/LOGO/js/jss1542/m/jss1542.webp', hasBorder: false },
        { name: '킴나니', url: 'https://stimg.sooplive.co.kr/LOGO/sk/sksgml16/m/sksgml16.webp', hasBorder: false },
        { name: '여일', url: 'https://stimg.sooplive.co.kr/LOGO/ye/yeoil22/m/yeoil22.webp', hasBorder: false },
        { name: '우뚝', url: 'https://stimg.sooplive.co.kr/LOGO/gk/gk3394/m/gk3394.webp', hasBorder: false },
        { name: '최르', url: 'https://profile.img.sooplive.co.kr/LOGO/cs/csc0568/csc0568.jpg', hasBorder: false },
        { name: '라먀니', url: 'https://stimg.sooplive.co.kr/LOGO/20/20221010/m/20221010.webp', hasBorder: false },
        { name: '임민트', url: 'https://stimg.sooplive.co.kr/LOGO/mi/mint616/m/mint616.webp', hasBorder: false },
        { name: '보고니', url: 'https://stimg.sooplive.co.kr/LOGO/bo/bogong/m/bogong.webp', hasBorder: false },
        { name: '모치', url: 'https://stimg.sooplive.co.kr/LOGO/mo/mong0519/m/mong0519.webp', hasBorder: false },
        { name: '복춘이', url: 'https://stimg.sooplive.co.kr/LOGO/gg/ggzz1230/m/ggzz1230.webp', hasBorder: false },
        { name: '중력', url: 'https://stimg.sooplive.co.kr/LOGO/vk/vkzm14/m/vkzm14.webp', hasBorder: false },
        { name: '여백이다', url: 'https://stimg.sooplive.co.kr/LOGO/wk/wkdghdtjr99/m/wkdghdtjr99.webp', hasBorder: false },
        { name: '데이드림', url: 'https://stimg.sooplive.co.kr/LOGO/wn/wnfkrhs/m/wnfkrhs.webp', hasBorder: false },
        { name: '맛종욱', url: 'https://stimg.sooplive.co.kr/LOGO/wh/whddnr2813/m/whddnr2813.webp', hasBorder: false },
        { name: '나나', url: 'https://profile.img.sooplive.co.kr/LOGO/sh/sh0w422/sh0w422.jpg', hasBorder: false },
        { name: '은초롱', url: 'https://stimg.sooplive.co.kr/LOGO/eu/eunchr/m/eunchr.webp', hasBorder: false },
        { name: '류채아', url: 'https://stimg.sooplive.co.kr/LOGO/gi/gio12025/m/gio12025.webp', hasBorder: false },
        { name: '갱이쁨', url: 'https://stimg.sooplive.co.kr/LOGO/si/sick0402/m/sick0402.webp', hasBorder: false },
        { name: '각하늘', url: 'https://stimg.sooplive.co.kr/LOGO/ga/gaksky2/m/gaksky2.webp', hasBorder: false },
        { name: '김쁘피', url: 'https://stimg.sooplive.co.kr/LOGO/gu/gurm01/m/gurm01.webp', hasBorder: false },
        { name: '에스더', url: 'https://stimg.sooplive.co.kr/LOGO/dh/dhkswjdrh1/m/dhkswjdrh1.webp', hasBorder: false },
        { name: '하나모', url: 'https://stimg.sooplive.co.kr/LOGO/ou/ouoovo59/m/ouoovo59.webp', hasBorder: false },
        { name: '이릴', url: 'https://stimg.sooplive.co.kr/LOGO/ir/irrilll/m/irrilll.webp', hasBorder: false },
        { name: '미네뀨', url: 'https://stimg.sooplive.co.kr/LOGO/mo/molkang94/m/molkang94.webp', hasBorder: false },
        { name: '감자가비', url: 'https://stimg.sooplive.co.kr/LOGO/do/doki0818/m/doki0818.webp', hasBorder: false },
        { name: '유르', url: 'https://stimg.sooplive.co.kr/LOGO/yu/yuruchuru/m/yuruchuru.webp', hasBorder: false },
        { name: '마두', url: 'https://stimg.sooplive.co.kr/LOGO/dh/dhql1004/m/dhql1004.webp', hasBorder: false },
        { name: '단청', url: 'https://stimg.sooplive.co.kr/LOGO/hj/hjhj1927/m/hjhj1927.webp', hasBorder: false },
        { name: '츄르', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chur1004/m/chur1004.webp', hasBorder: false },
        { name: '킴슈', url: 'https://stimg.sooplive.co.kr/LOGO/si/siu88/m/siu88.webp', hasBorder: false },
        { name: '푸닝', url: 'https://stimg.sooplive.co.kr/LOGO/fj/fjqmdnls/m/fjqmdnls.webp', hasBorder: false },
        { name: '류소리', url: 'https://stimg.sooplive.co.kr/LOGO/le/lemon1925/m/lemon1925.webp', hasBorder: false },
        { name: '비쥬', url: 'https://stimg.sooplive.co.kr/LOGO/bi/bibitrue/m/bibitrue.webp', hasBorder: false },
        { name: '빈쫑', url: 'https://stimg.sooplive.co.kr/LOGO/tj/tjd10477/m/tjd10477.webp', hasBorder: false },
        { name: '멍보리', url: 'https://stimg.sooplive.co.kr/LOGO/bb/bb0rii/m/bb0rii.webp', hasBorder: false },
        { name: '아쿠아즈', url: 'https://stimg.sooplive.co.kr/LOGO/zz/zzkkk8883/m/zzkkk8883.webp', hasBorder: false },
        { name: '문모모', url: 'https://stimg.sooplive.co.kr/LOGO/do/doormomo/m/doormomo.webp', hasBorder: false },
        { name: '수하', url: 'https://stimg.sooplive.co.kr/LOGO/le/leesuha/m/leesuha.webp', hasBorder: false },
        { name: '슨미', url: 'https://stimg.sooplive.co.kr/LOGO/jj/jjgod9312/m/jjgod9312.webp', hasBorder: false },
        { name: '유연서', url: 'https://stimg.sooplive.co.kr/LOGO/cc/cctvno/m/cctvno.webp', hasBorder: false },
        { name: '달체솜', url: 'https://stimg.sooplive.co.kr/LOGO/da/dalchesom/m/dalchesom.webp', hasBorder: false },
        { name: '별법', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chubeom/m/chubeom.webp', hasBorder: false },
        { name: '르마', url: 'https://stimg.sooplive.co.kr/LOGO/dw/dwarf2468/m/dwarf2468.webp', hasBorder: false },
        { name: '말론', url: 'https://profile.img.sooplive.co.kr/LOGO/sp/spends/spends.jpg', hasBorder: false },
        { name: '서민수', url: 'https://stimg.sooplive.co.kr/LOGO/tn/tn5517/m/tn5517.webp', hasBorder: false },
        { name: '희꾸미', url: 'https://stimg.sooplive.co.kr/LOGO/dd/ddr9463/m/ddr9463.webp', hasBorder: false },
        { name: '졔리', url: 'https://stimg.sooplive.co.kr/LOGO/0j/0jjerry0/m/0jjerry0.webp', hasBorder: false },
        { name: '임아', url: 'https://stimg.sooplive.co.kr/LOGO/10/1004suna/m/1004suna.webp', hasBorder: false },
        { name: '앙또', url: 'https://stimg.sooplive.co.kr/LOGO/aa/aangdoxx/m/aangdoxx.webp', hasBorder: false },
        { name: '유나', url: 'https://stimg.sooplive.co.kr/LOGO/to/top6373/m/top6373.webp', hasBorder: false },
        { name: '양이로', url: 'https://stimg.sooplive.co.kr/LOGO/ya/yang2ro/m/yang2ro.webp', hasBorder: false },
        { name: '초깨비', url: 'https://stimg.sooplive.co.kr/LOGO/na/nater0820/m/nater0820.webp', hasBorder: false },
        { name: '픽서', url: 'https://stimg.sooplive.co.kr/LOGO/wo/wodn0412/m/wodn0412.webp', hasBorder: false },
        { name: '흑구', url: 'https://stimg.sooplive.co.kr/LOGO/qk/qkfaos123/m/qkfaos123.webp', hasBorder: false },
        { name: '오봉구', url: 'https://stimg.sooplive.co.kr/LOGO/gn/gnsdl210/m/gnsdl210.webp', hasBorder: false },
        { name: '연우얌', url: 'https://stimg.sooplive.co.kr/LOGO/eu/eunnnny2/m/eunnnny2.webp', hasBorder: false },
        { name: '츄잉', url: 'https://stimg.sooplive.co.kr/LOGO/kc/kcw1217/m/kcw1217.webp', hasBorder: false },
        { name: '유우챠', url: 'https://stimg.sooplive.co.kr/LOGO/yu/yuucha0626/m/yuucha0626.webp', hasBorder: false },
        { name: '로렌', url: 'https://stimg.sooplive.co.kr/LOGO/jo/jongseo/m/jongseo.webp', hasBorder: false },
        { name: '한예림', url: 'https://stimg.sooplive.co.kr/LOGO/nn/nnagongju54/m/nnagongju54.webp', hasBorder: false },
        { name: '남연희', url: 'https://stimg.sooplive.co.kr/LOGO/na/namyeonhee/m/namyeonhee.webp', hasBorder: false },
        { name: '혜다', url: ' https://stimg.sooplive.co.kr/LOGO/he/heda221112/m/heda221112.webp', hasBorder: false },
        { name: '딩굴', url: ' https://stimg.sooplive.co.kr/LOGO/di/dinggoolx3/m/dinggoolx3.webp', hasBorder: false },
        { name: '숩니찡', url: ' https://stimg.sooplive.co.kr/LOGO/br/breezy25/m/breezy25.webp', hasBorder: false },
        { name: '앨리스얌', url: ' https://stimg.sooplive.co.kr/LOGO/al/alicehiyam/m/alicehiyam.webp', hasBorder: false },
        { name: '꼼모리', url: ' https://stimg.sooplive.co.kr/LOGO/et/et0726/m/et0726.webp', hasBorder: false },
        { name: '별시아', url: ' https://stimg.sooplive.co.kr/LOGO/su/sunne1010/m/sunne1010.webp', hasBorder: false },
        { name: '달룬달룬', url: ' https://stimg.sooplive.co.kr/LOGO/wi/wifkcn194/m/wifkcn194.webp', hasBorder: false },
        { name: '유설아', url: ' https://stimg.sooplive.co.kr/LOGO/ye/yeveee/m/yeveee.webp', hasBorder: false },
        { name: '박해원', url: ' https://stimg.sooplive.co.kr/LOGO/go/godnjs8482/m/godnjs8482.webp', hasBorder: false },
        { name: '파이브', url: ' https://stimg.sooplive.co.kr/LOGO/im/imsofive/m/imsofive.webp', hasBorder: false },
        { name: '고채린', url: ' https://stimg.sooplive.co.kr/LOGO/rj/rjsdnr115/m/rjsdnr115.webp', hasBorder: false },
        { name: '쪼이', url: ' https://stimg.sooplive.co.kr/LOGO/jo/joyjo2/m/joyjo2.webp', hasBorder: false },
 

    ];


// 페이지 로드 시 고정된 이미지를 영역 1에 추가
window.onload = function() {
    fixedImages.forEach(imageData => {
        addImageToZone(imageData, zone1);
    });
};

// 이미지 추가 버튼 클릭 이벤트 처리
addImageButton.addEventListener('click', () => {
    const imageUrl = imageUrlInput.value;
    if (imageUrl) {
        const newImageData = { name: '새 이미지', url: imageUrl, hasBorder: false };
        addImageToZone(newImageData, zone1); // URL로 이미지 추가 시 영역 1에 추가
        imageUrlInput.value = ''; // 입력 필드 초기화
    }
});

// 이미지 영역에 추가하는 함수
function addImageToZone(imageData, zone) {
    const container = document.createElement('div');
    container.classList.add('image-container');

    const imgElement = document.createElement('div');
    imgElement.style.backgroundImage = `url(${imageData.url})`;
    imgElement.classList.add('circle-image');

    // 외곽선 추가 (특정 이미지에만 적용)
    if (imageData.hasBorder) {
        imgElement.classList.add('blue-border');
    }

    // 이미지 클릭 이벤트 처리
    imgElement.addEventListener('click', () => {
        moveImage(container);
    });

    const nameElement = document.createElement('div');
    nameElement.classList.add('image-name');
    nameElement.innerText = imageData.name;

    container.appendChild(imgElement);
    container.appendChild(nameElement);

    zone.appendChild(container);
}

// 이미지 이동 함수
function moveImage(container) {
    // 현재 이미지가 있는 곳에 따라 반대 영역으로 이동
    if (container.parentElement.id === 'zone1') {
        zone2.appendChild(container); // 영역 1 -> 영역 2로 이동
        container.querySelector('.circle-image').style.width = '140px'; // 영역 2에선 이미지 크기 140px
        container.querySelector('.circle-image').style.height = '140px';
    } else {
        zone1.appendChild(container); // 영역 2 -> 영역 1로 이동
        container.querySelector('.circle-image').style.width = '80px'; // 영역 1에선 이미지 크기 80px
        container.querySelector('.circle-image').style.height = '80px';
    }
}
