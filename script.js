const leaderZone = document.getElementById('leaderZone');
const maleZone = document.getElementById('maleZone');
const femaleZone = document.getElementById('femaleZone');
const virtualZone = document.getElementById('virtualZone');
const zone2 = document.getElementById('zone2');
const addImageButton = document.getElementById('addImageButton');
const imageUrlInput = document.getElementById('imageUrlInput');

// 고정된 이미지 URL 목록과 이름, 카테고리 정보
const fixedImages = [
    { name: '성태', url: 'https://stimg.sooplive.co.kr/LOGO/rr/rrvv17/m/rrvv17.webp', category: 'leader', borderColor: 'green' },
    { name: '봉준', url: 'https://stimg.sooplive.co.kr/LOGO/kh/khm11903/m/khm11903.webp', category: 'leader', borderColor: 'green' },
    { name: '오아', url: 'https://stimg.sooplive.co.kr/LOGO/le/legendhyuk/m/legendhyuk.webp', category: 'leader', borderColor: 'green' },
    { name: '수피', url: 'https://stimg.sooplive.co.kr/LOGO/lo/lovely5959/m/lovely5959.webp', category: 'leader', borderColor: 'green' },
    { name: '사장', url: 'https://stimg.sooplive.co.kr/LOGO/wn/wnstn0905/m/wnstn0905.webp', category: 'leader', borderColor: 'green' },
    { name: '깨박', url: 'https://stimg.sooplive.co.kr/LOGO/dl/dlghfjs/m/dlghfjs.webp', category: 'leader', borderColor: 'green' },

    // 여자 리스트
    { name: '임아니', url: 'https://stimg.sooplive.co.kr/LOGO/10/1004suna/m/1004suna.webp', category: 'female', borderColor: 'red' },
    { name: '상어녀', url: 'https://stimg.sooplive.co.kr/LOGO/59/595935/m/595935.webp', category: 'female', borderColor: 'red' },
    { name: '듀단', url: 'https://stimg.sooplive.co.kr/LOGO/du/dudadi770/m/dudadi770.webp', category: 'female', borderColor: 'red' },
    { name: '토끼예나', url: 'https://stimg.sooplive.co.kr/LOGO/hy/hyn8210/m/hyn8210.webp', category: 'female', borderColor: 'red' },
    { name: '안겨', url: 'https://stimg.sooplive.co.kr/LOGO/da/dackda/m/dackda.webp', category: 'female', borderColor: 'red' },
    { name: '걸뽀', url: 'https://stimg.sooplive.co.kr/LOGO/gi/girlbbo/m/girlbbo.webp', category: 'female', borderColor: 'red' },
    { name: '수힛', url: 'https://stimg.sooplive.co.kr/LOGO/su/suhee0051/m/suhee0051.webp', category: 'female', borderColor: 'red' },
    { name: '도읍지', url: 'https://stimg.sooplive.co.kr/LOGO/do/doeupzi/m/doeupzi.webp', category: 'female', borderColor: 'red' },
    { name: '김세아', url: 'https://stimg.sooplive.co.kr/LOGO/ki/kimseah94/m/kimseah94.webp', category: 'female', borderColor: 'red' },
    { name: '박나닝', url: 'https://stimg.sooplive.co.kr/LOGO/na/na2un/m/na2un.webp', category: 'female', borderColor: 'red' },
    { name: '땡지', url: 'https://stimg.sooplive.co.kr/LOGO/yy/yyk3390/m/yyk3390.webp', category: 'female', borderColor: 'red' },
    { name: '세리아', url: 'https://stimg.sooplive.co.kr/LOGO/se/seriya0312/m/seriya0312.webp', category: 'female', borderColor: 'red' },
    { name: '핼띠', url: 'https://stimg.sooplive.co.kr/LOGO/go/gofl1244/m/gofl1244.webp', category: 'female', borderColor: 'red' },
    { name: '이톨', url: 'https://stimg.sooplive.co.kr/LOGO/tj/tjsrhr123/m/tjsrhr123.webp', category: 'female', borderColor: 'red' },
    { name: '보고니', url: 'https://stimg.sooplive.co.kr/LOGO/bo/bogong/m/bogong.webp', category: 'female', borderColor: 'red' },

    //남자 리스트
    { name: '도현', url: 'https://stimg.sooplive.co.kr/LOGO/do/dobby1031/m/dobby1031.webp', category: 'male', borderColor: 'blue' },
    { name: '감블러', url: 'https://stimg.sooplive.co.kr/LOGO/9a/9ambler/m/9ambler.webp', category: 'male', borderColor: 'blue' },
    { name: '롤선생', url: 'https://stimg.sooplive.co.kr/LOGO/ki/kissday621/m/kissday621.webp', category: 'male', borderColor: 'blue' },
    { name: '꿀탱탱', url: 'https://stimg.sooplive.co.kr/LOGO/zk/zkwks4413/m/zkwks4413.webp', category: 'male', borderColor: 'blue' },
    { name: '조디악', url: 'https://stimg.sooplive.co.kr/LOGO/yj/yjkim5500/m/yjkim5500.webp', category: 'male', borderColor: 'blue' },
    { name: '코뚱잉', url: 'https://stimg.sooplive.co.kr/LOGO/zz/zz102zz/m/zz102zz.webp', category: 'male', borderColor: 'blue' },
    { name: '춘봉', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chunbongtv/m/chunbongtv.webp', category: 'male', borderColor: 'blue' },
    { name: '윤루트', url: 'https://stimg.sooplive.co.kr/LOGO/rn/rnjsrhddl/m/rnjsrhddl.webp', category: 'male', borderColor: 'blue' },
    { name: '최윤종', url: 'https://stimg.sooplive.co.kr/LOGO/cd/cdbswhd8913/m/cdbswhd8913.webp', category: 'male', borderColor: 'blue' },
    { name: 'DG98', url: 'https://stimg.sooplive.co.kr/LOGO/zk/zkdhtm1424/m/zkdhtm1424.webp', category: 'male', borderColor: 'blue' },
    { name: '트할', url: 'https://stimg.sooplive.co.kr/LOGO/po/poos69/m/poos69.webp', category: 'male', borderColor: 'blue' },
    { name: '에스카', url: 'https://stimg.sooplive.co.kr/LOGO/qk/qkfhzhals/m/qkfhzhals.webp', category: 'male', borderColor: 'blue' },
    { name: '블랙워크', url: 'https://stimg.sooplive.co.kr/LOGO/gu/gudcjf604/m/gudcjf604.webp', category: 'male', borderColor: 'blue' },
    { name: '섹시피그', url: 'https://stimg.sooplive.co.kr/LOGO/wo/wogustnrkd/m/wogustnrkd.webp', category: 'male', borderColor: 'blue' },
    { name: '학살', url: 'https://stimg.sooplive.co.kr/LOGO/ap/apzks1236/m/apzks1236.webp', category: 'male', borderColor: 'blue' },
    { name: '강만식', url: 'https://stimg.sooplive.co.kr/LOGO/rk/rkdakstlr911/m/rkdakstlr911.webp', category: 'male', borderColor: 'blue' },
    { name: '조경훈', url: 'https://stimg.sooplive.co.kr/LOGO/cn/cnsgkcnehd74/m/cnsgkcnehd74.webp', category: 'male', borderColor: 'blue' },
    { name: '필메', url: 'https://stimg.sooplive.co.kr/LOGO/ho/hockey05/m/hockey05.webp', category: 'male', borderColor: 'blue' },
    { name: '빠뽀', url: 'https://stimg.sooplive.co.kr/LOGO/ti/tichiel93/m/tichiel93.webp', category: 'male', borderColor: 'blue' },
    { name: '싸패', url: 'https://stimg.sooplive.co.kr/LOGO/pk/pkdlwpans/m/pkdlwpans.webp', category: 'male', borderColor: 'blue' },
    { name: '전하', url: 'https://stimg.sooplive.co.kr/LOGO/dn/dngus1989/m/dngus1989.webp', category: 'male', borderColor: 'blue' },
    { name: '수찬', url: 'https://stimg.sooplive.co.kr/LOGO/cb/cbn270/m/cbn270.webp', category: 'male', borderColor: 'blue' },
    { name: '꾸티뉴', url: 'https://stimg.sooplive.co.kr/LOGO/ak/aksen7833/m/aksen7833.webp', category: 'male', borderColor: 'blue' },
    { name: '데이드림', url: 'https://stimg.sooplive.co.kr/LOGO/wn/wnfkrhs/m/wnfkrhs.webp', category: 'male', borderColor: 'blue' },
    { name: '아칸', url: 'https://stimg.sooplive.co.kr/LOGO/km/kmo7895/m/kmo7895.webp', category: 'male', borderColor: 'blue' },
    { name: '얼이', url: 'https://stimg.sooplive.co.kr/LOGO/eo/eodn1217/m/eodn1217.webp', category: 'male', borderColor: 'blue' },
    { name: '퍼드', url: 'https://stimg.sooplive.co.kr/LOGO/re/reaperd123/m/reaperd123.webp', category: 'male', borderColor: 'blue' },
    { name: '주화이', url: 'https://stimg.sooplive.co.kr/LOGO/eh/ehsaksdl00/m/ehsaksdl00.webp', category: 'male', borderColor: 'blue' },
    { name: '정다니', url: 'https://stimg.sooplive.co.kr/LOGO/wj/wjdekgus112/m/wjdekgus112.webp', category: 'male', borderColor: 'blue' },
    { name: '이지상', url: 'https://stimg.sooplive.co.kr/LOGO/jr/jrdart/m/jrdart.webp', category: 'male', borderColor: 'blue' },
    { name: '주드', url: 'https://stimg.sooplive.co.kr/LOGO/rk/rkdalstnld/m/rkdalstnld.webp', category: 'male', borderColor: 'blue' },
    { name: '피크리', url: 'https://stimg.sooplive.co.kr/LOGO/rm/rmsidvldpf/m/rmsidvldpf.webp', category: 'male', borderColor: 'blue' },
    { name: '삼성민', url: 'https://stimg.sooplive.co.kr/LOGO/ha/han2243944/m/han2243944.webp', category: 'male', borderColor: 'blue' },
    { name: '김멘탈', url: 'https://stimg.sooplive.co.kr/LOGO/sk/skycca/m/skycca.webp', category: 'male', borderColor: 'blue' },
    { name: '드래프트', url: 'https://stimg.sooplive.co.kr/LOGO/eh/ehdghks1857/m/ehdghks1857.webp', category: 'male', borderColor: 'blue' },
    { name: '스윙', url: 'https://stimg.sooplive.co.kr/LOGO/j3/j3y3c3/m/j3y3c3.webp', category: 'male', borderColor: 'blue' },
    { name: '성장', url: 'https://stimg.sooplive.co.kr/LOGO/wk/wkdghks99/m/wkdghks99.webp', category: 'male', borderColor: 'blue' },
    { name: '고토', url: 'https://stimg.sooplive.co.kr/LOGO/ym/ymk3525/m/ymk3525.webp', category: 'male', borderColor: 'blue' },
    { name: '김수호님', url: 'https://stimg.sooplive.co.kr/LOGO/tn/tnghdbsgh/m/tnghdbsgh.webp', category: 'male', borderColor: 'blue' },
    { name: '박재박', url: 'https://stimg.sooplive.co.kr/LOGO/ja/jaeparkk/m/jaeparkk.webp', category: 'male', borderColor: 'blue' },
    { name: '한둬얼', url: 'https://stimg.sooplive.co.kr/LOGO/qn/qn308dud/m/qn308dud.webp', category: 'male', borderColor: 'blue' },
    { name: '김준03', url: 'https://stimg.sooplive.co.kr/LOGO/lo/love145899/m/love145899.webp', category: 'male', borderColor: 'blue' },
    { name: '부바', url: 'https://stimg.sooplive.co.kr/LOGO/kz/kzxc0129/m/kzxc0129.webp', category: 'male', borderColor: 'blue' },
    { name: '중력', url: 'https://stimg.sooplive.co.kr/LOGO/vk/vkzm14/m/vkzm14.webp', category: 'male', borderColor: 'blue' },
    { name: '여백이다', url: 'https://stimg.sooplive.co.kr/LOGO/wk/wkdghdtjr99/m/wkdghdtjr99.webp', category: 'male', borderColor: 'blue' },
    { name: '맛종욱', url: 'https://stimg.sooplive.co.kr/LOGO/wh/whddnr2813/m/whddnr2813.webp', category: 'male', borderColor: 'blue' },
    { name: '초깨비', url: 'https://stimg.sooplive.co.kr/LOGO/na/nater0820/m/nater0820.webp', category: 'male', borderColor: 'blue' },
    { name: '픽서', url: 'https://stimg.sooplive.co.kr/LOGO/wo/wodn0412/m/wodn0412.webp', category: 'male', borderColor: 'blue' },
    { name: '흑구', url: 'https://stimg.sooplive.co.kr/LOGO/qk/qkfaos123/m/qkfaos123.webp', category: 'male', borderColor: 'blue' },
    { name: '오봉구', url: 'https://stimg.sooplive.co.kr/LOGO/gn/gnsdl210/m/gnsdl210.webp', category: 'male', borderColor: 'blue' },
    { name: '박해원', url: 'https://stimg.sooplive.co.kr/LOGO/go/godnjs8482/m/godnjs8482.webp', category: 'male', borderColor: 'blue' },
    { name: '파이브', url: 'https://stimg.sooplive.co.kr/LOGO/im/imsofive/m/imsofive.webp', category: 'male', borderColor: 'blue' },
    { name: '린브', url: 'https://stimg.sooplive.co.kr/LOGO/ti/tinkcho123/m/tinkcho123.webp', category: 'male', borderColor: 'blue' },
    { name: '달룬달룬', url: 'https://stimg.sooplive.co.kr/LOGO/wi/wifkcn194/m/wifkcn194.webp', category: 'male', borderColor: 'blue' },
    { name: '로렌', url: 'https://stimg.sooplive.co.kr/LOGO/jo/jongseo/m/jongseo.webp', category: 'male', borderColor: 'blue' },
    { name: '별법', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chubeom/m/chubeom.webp', category: 'male', borderColor: 'blue' },
    { name: '르마', url: 'https://stimg.sooplive.co.kr/LOGO/dw/dwarf2468/m/dwarf2468.webp', category: 'male', borderColor: 'blue' },
    { name: '김대휘', url: 'https://stimg.sooplive.co.kr/LOGO/kg/kgod678/m/kgod678.webp', category: 'male', borderColor: 'blue' },
    { name: '쪼이', url: 'https://stimg.sooplive.co.kr/LOGO/jo/joyjo2/m/joyjo2.webp', category: 'male', borderColor: 'blue' },
    { name: '서민수', url: 'https://stimg.sooplive.co.kr/LOGO/tn/tn5517/m/tn5517.webp', category: 'male', borderColor: 'blue' },
    { name: '우뚝', url: 'https://stimg.sooplive.co.kr/LOGO/gk/gk3394/m/gk3394.webp', category: 'male', borderColor: 'blue' },
    { name: '지워니:D', url: 'https://stimg.sooplive.co.kr/LOGO/sk/sk6902/m/sk6902.webp', category: 'male', borderColor: 'blue' },
    { name: '최르', url: 'https://profile.img.sooplive.co.kr/LOGO/cs/csc0568/csc0568.jpg', category: 'male', borderColor: 'blue' },
    { name: '바뮤', url: 'https://stimg.sooplive.co.kr/LOGO/ba/bamyu0/m/bamyu0.webp', category: 'male', borderColor: 'blue' },


    //버튜버 리스트
    { name: '라로시', url: 'https://stimg.sooplive.co.kr/LOGO/la/larothy/m/larothy.webp', category: 'vtuber', borderColor: 'red' },
    { name: '망구랑', url: 'https://stimg.sooplive.co.kr/LOGO/nm/nmangoquince/m/nmangoquince.webp', category: 'vtuber', borderColor: 'red' },
    { name: '표우', url: 'https://stimg.sooplive.co.kr/LOGO/py/pyowoo/m/pyowoo.webp', category: 'vtuber', borderColor: 'red' },
    { name: '하티하티', url: 'https://stimg.sooplive.co.kr/LOGO/gk/gkxl1004/m/gkxl1004.webp', category: 'vtuber', borderColor: 'red' },
    { name: '영쨩', url: 'https://stimg.sooplive.co.kr/LOGO/yo/youngjjang96/m/youngjjang96.webp', category: 'vtuber', borderColor: 'red' },
    { name: '코코양', url: 'https://stimg.sooplive.co.kr/LOGO/co/cococ11/m/cococ11.webp', category: 'vtuber', borderColor: 'red' },
    { name: '따스히', url: 'https://stimg.sooplive.co.kr/LOGO/gu/guqlswls123/m/guqlswls123.webp', category: 'vtuber', borderColor: 'red' },
    { name: '린링', url: 'https://stimg.sooplive.co.kr/LOGO/mi/mini1212/m/mini1212.webp', category: 'vtuber', borderColor: 'red' },
    { name: '초아', url: 'https://stimg.sooplive.co.kr/LOGO/eh/ehehdldl/m/ehehdldl.webp', category: 'vtuber', borderColor: 'red' },
    { name: '히츠메', url: 'https://stimg.sooplive.co.kr/LOGO/hi/hichume/m/hichume.webp', category: 'vtuber', borderColor: 'red' },
    { name: '쥐돌이', url: 'https://stimg.sooplive.co.kr/LOGO/aa/aa6232/m/aa6232.webp', category: 'vtuber', borderColor: 'red' },
    { name: '아이쨩', url: 'https://stimg.sooplive.co.kr/LOGO/ql/qlxkals1528/m/qlxkals1528.webp', category: 'vtuber', borderColor: 'red' },
    { name: '현단아', url: 'https://stimg.sooplive.co.kr/LOGO/hy/hyundana/m/hyundana.webp', category: 'vtuber', borderColor: 'red' },
    { name: '한아련', url: 'https://stimg.sooplive.co.kr/LOGO/rk/rkdmsdl782/m/rkdmsdl782.webp', category: 'vtuber', borderColor: 'red' },
    { name: '새라새라', url: 'https://stimg.sooplive.co.kr/LOGO/gm/gmmw/m/gmmw.webp', category: 'vtuber', borderColor: 'red' },
    { name: '차밍챠', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chamingcha/m/chamingcha.webp', category: 'vtuber', borderColor: 'red' },
    { name: '임하밍', url: 'https://stimg.sooplive.co.kr/LOGO/im/imha22/m/imha22.webp', category: 'vtuber', borderColor: 'red' },
    { name: '엔쥬', url: 'https://stimg.sooplive.co.kr/LOGO/no/northpole/m/northpole.webp', category: 'vtuber', borderColor: 'red' },
    { name: '잠결', url: 'https://stimg.sooplive.co.kr/LOGO/za/zamgyeol/m/zamgyeol.webp', category: 'vtuber', borderColor: 'red' },
    { name: '마왕루야', url: 'https://stimg.sooplive.co.kr/LOGO/ma/maoruyakr/m/maoruyakr.webp', category: 'vtuber', borderColor: 'red' },
    { name: '클로이', url: 'https://stimg.sooplive.co.kr/LOGO/vf/vf3366/m/vf3366.webp', category: 'vtuber', borderColor: 'red' },
    { name: '먹체토', url: 'https://stimg.sooplive.co.kr/LOGO/ch/cheto1206/m/cheto1206.webp', category: 'vtuber', borderColor: 'red' },
    { name: '체리꿀맛', url: 'https://stimg.sooplive.co.kr/LOGO/tn/tn2704/m/tn2704.webp', category: 'vtuber', borderColor: 'red' },
    { name: '모요', url: 'https://stimg.sooplive.co.kr/LOGO/du/duvl123/m/duvl123.webp', category: 'vtuber', borderColor: 'red' },
    { name: '난워니', url: 'https://stimg.sooplive.co.kr/LOGO/wh/whiteone325/m/whiteone325.webp', category: 'vtuber', borderColor: 'red' },
    { name: '온자두', url: 'https://stimg.sooplive.co.kr/LOGO/ak/akdma9692/m/akdma9692.webp', category: 'vtuber', borderColor: 'red' },
    { name: '댕뚜비', url: 'https://stimg.sooplive.co.kr/LOGO/hu/huy7856/m/huy7856.webp', category: 'vtuber', borderColor: 'red' },
    { name: '강주이', url: 'https://stimg.sooplive.co.kr/LOGO/lk/lkjh1234/m/lkjh1234.webp', category: 'vtuber', borderColor: 'red' },
    { name: '소연화', url: 'https://stimg.sooplive.co.kr/LOGO/tk/tkfkdgodufks/m/tkfkdgodufks.webp', category: 'vtuber', borderColor: 'red' },
    { name: '낑한솔', url: 'https://stimg.sooplive.co.kr/LOGO/ha/hansoree12/m/hansoree12.webp', category: 'vtuber', borderColor: 'red' },
    { name: '나옹이빵', url: 'https://stimg.sooplive.co.kr/LOGO/na/naong2bbang/m/naong2bbang.webp', category: 'vtuber', borderColor: 'red' },
    { name: '성피아', url: 'https://stimg.sooplive.co.kr/LOGO/oo/ooojoijo/m/ooojoijo.webp', category: 'vtuber', borderColor: 'red' },
    { name: '하나마나', url: 'https://stimg.sooplive.co.kr/LOGO/ha/hanamana1015/m/hanamana1015.webp', category: 'vtuber', borderColor: 'red' },
    { name: '비에타', url: 'https://stimg.sooplive.co.kr/LOGO/ek/ektha9511/m/ektha9511.webp', category: 'vtuber', borderColor: 'red' },
    { name: '로티', url: 'https://stimg.sooplive.co.kr/LOGO/wk/wkho0208/m/wkho0208.webp', category: 'vtuber', borderColor: 'red' },
    { name: '이무지', url: 'https://stimg.sooplive.co.kr/LOGO/mo/moojj030/m/moojj030.webp', category: 'vtuber', borderColor: 'red' },
    { name: '김웰로', url: 'https://stimg.sooplive.co.kr/LOGO/we/wellro314/m/wellro314.webp', category: 'vtuber', borderColor: 'red' },
    { name: '아르', url: 'https://stimg.sooplive.co.kr/LOGO/hy/hyj123123/m/hyj123123.webp', category: 'vtuber', borderColor: 'red' },
    { name: '또니', url: 'https://stimg.sooplive.co.kr/LOGO/tj/tjsgml899/m/tjsgml899.webp', category: 'vtuber', borderColor: 'red' },
    { name: '세이호', url: 'https://stimg.sooplive.co.kr/LOGO/jj/jjjhhh0034/m/jjjhhh0034.webp', category: 'vtuber', borderColor: 'red' },
    { name: '야옴', url: 'https://stimg.sooplive.co.kr/LOGO/ya/yaom0728/m/yaom0728.webp', category: 'vtuber', borderColor: 'red' },
    { name: '로또비', url: 'https://stimg.sooplive.co.kr/LOGO/lo/lottobebe/m/lottobebe.webp', category: 'vtuber', borderColor: 'red' },
    { name: '뿌잉', url: 'https://stimg.sooplive.co.kr/LOGO/so/so218218/m/so218218.webp', category: 'vtuber', borderColor: 'red' },
    { name: '허니론', url: 'https://stimg.sooplive.co.kr/LOGO/se/seochol/m/seochol.webp', category: 'vtuber', borderColor: 'red' },
    { name: '지야', url: 'https://stimg.sooplive.co.kr/LOGO/je/jeeyab/m/jeeyab.webp', category: 'vtuber', borderColor: 'red' },
    { name: '바먀', url: 'https://stimg.sooplive.co.kr/LOGO/wo/wooyah21/m/wooyah21.webp', category: 'vtuber', borderColor: 'red' },
    { name: '장마찌', url: 'https://stimg.sooplive.co.kr/LOGO/ja/jangmazzi/m/jangmazzi.webp', category: 'vtuber', borderColor: 'red' },
    { name: '모나양', url: 'https://stimg.sooplive.co.kr/LOGO/mo/monas2/m/monas2.webp', category: 'vtuber', borderColor: 'red' },
    { name: '온네님', url: 'https://stimg.sooplive.co.kr/LOGO/oo/ooonae/m/ooonae.webp', category: 'vtuber', borderColor: 'red' },
    { name: '파니', url: 'https://stimg.sooplive.co.kr/LOGO/ba/baeksoon2/m/baeksoon2.webp', category: 'vtuber', borderColor: 'red' },
    { name: '솜주먹', url: 'https://stimg.sooplive.co.kr/LOGO/ld/ldrboo/m/ldrboo.webp', category: 'vtuber', borderColor: 'red' },
    { name: '심술', url: 'https://stimg.sooplive.co.kr/LOGO/js/jss1542/m/jss1542.webp', category: 'vtuber', borderColor: 'red' },
    { name: '킴나니', url: 'https://stimg.sooplive.co.kr/LOGO/sk/sksgml16/m/sksgml16.webp', category: 'vtuber', borderColor: 'red' },
    { name: '여일', url: 'https://stimg.sooplive.co.kr/LOGO/ye/yeoil22/m/yeoil22.webp', category: 'vtuber', borderColor: 'red' },
    { name: '라먀니', url: 'https://stimg.sooplive.co.kr/LOGO/20/20221010/m/20221010.webp', category: 'vtuber', borderColor: 'red' },
    { name: '임민트', url: 'https://stimg.sooplive.co.kr/LOGO/mi/mint616/m/mint616.webp', category: 'vtuber', borderColor: 'red' },
    { name: '모치', url: 'https://stimg.sooplive.co.kr/LOGO/mo/mong0519/m/mong0519.webp', category: 'vtuber', borderColor: 'red' },
    { name: '복춘이', url: 'https://stimg.sooplive.co.kr/LOGO/gg/ggzz1230/m/ggzz1230.webp', category: 'vtuber', borderColor: 'red' },
    { name: '은초롱', url: 'https://stimg.sooplive.co.kr/LOGO/eu/eunchr/m/eunchr.webp', category: 'vtuber', borderColor: 'red' },
    { name: '류채아', url: 'https://stimg.sooplive.co.kr/LOGO/gi/gio12025/m/gio12025.webp', category: 'vtuber', borderColor: 'red' },
    { name: '갱이쁨', url: 'https://stimg.sooplive.co.kr/LOGO/si/sick0402/m/sick0402.webp', category: 'vtuber', borderColor: 'red' },
    { name: '각하늘', url: 'https://stimg.sooplive.co.kr/LOGO/ga/gaksky2/m/gaksky2.webp', category: 'vtuber', borderColor: 'red' },
    { name: '김쁘피', url: 'https://stimg.sooplive.co.kr/LOGO/gu/gurm01/m/gurm01.webp', category: 'vtuber', borderColor: 'red' },
    { name: '연우얌', url: 'https://stimg.sooplive.co.kr/LOGO/eu/eunnnny2/m/eunnnny2.webp', category: 'vtuber', borderColor: 'red' },
    { name: '하나모', url: 'https://stimg.sooplive.co.kr/LOGO/ou/ouoovo59/m/ouoovo59.webp', category: 'vtuber', borderColor: 'red' },
    { name: '이릴', url: 'https://stimg.sooplive.co.kr/LOGO/ir/irrilll/m/irrilll.webp', category: 'vtuber', borderColor: 'red' },
    { name: '미네뀨', url: 'https://stimg.sooplive.co.kr/LOGO/mo/molkang94/m/molkang94.webp', category: 'vtuber', borderColor: 'red' },
    { name: '감자가비', url: 'https://stimg.sooplive.co.kr/LOGO/do/doki0818/m/doki0818.webp', category: 'vtuber', borderColor: 'red' },
    { name: '유르', url: 'https://stimg.sooplive.co.kr/LOGO/yu/yuruchuru/m/yuruchuru.webp', category: 'vtuber', borderColor: 'red' },
    { name: '츄르', url: 'https://stimg.sooplive.co.kr/LOGO/ch/chur1004/m/chur1004.webp', category: 'vtuber', borderColor: 'red' },
    { name: '킴슈', url: 'https://stimg.sooplive.co.kr/LOGO/si/siu88/m/siu88.webp', category: 'vtuber', borderColor: 'blue' },
    { name: '푸닝', url: 'https://stimg.sooplive.co.kr/LOGO/fj/fjqmdnls/m/fjqmdnls.webp', category: 'vtuber', borderColor: 'red' },
    { name: '류소리', url: 'https://stimg.sooplive.co.kr/LOGO/le/lemon1925/m/lemon1925.webp', category: 'vtuber', borderColor: 'red' },
    { name: '비쥬', url: 'https://stimg.sooplive.co.kr/LOGO/bi/bibitrue/m/bibitrue.webp', category: 'vtuber', borderColor: 'red' },
    { name: '멍보리', url: 'https://stimg.sooplive.co.kr/LOGO/bb/bb0rii/m/bb0rii.webp', category: 'vtuber', borderColor: 'red' },
    { name: '문모모', url: 'https://stimg.sooplive.co.kr/LOGO/do/doormomo/m/doormomo.webp', category: 'vtuber', borderColor: 'red' },
    { name: '슨미', url: 'https://stimg.sooplive.co.kr/LOGO/jj/jjgod9312/m/jjgod9312.webp', category: 'vtuber', borderColor: 'red' },
    { name: '유연서', url: 'https://stimg.sooplive.co.kr/LOGO/cc/cctvno/m/cctvno.webp', category: 'vtuber', borderColor: 'red' },
    { name: '달체솜', url: 'https://stimg.sooplive.co.kr/LOGO/da/dalchesom/m/dalchesom.webp', category: 'vtuber', borderColor: 'red' },
    { name: '희꾸미', url: 'https://stimg.sooplive.co.kr/LOGO/dd/ddr9463/m/ddr9463.webp', category: 'vtuber', borderColor: 'red' },
    { name: '졔리', url: 'https://stimg.sooplive.co.kr/LOGO/0j/0jjerry0/m/0jjerry0.webp', category: 'vtuber', borderColor: 'red' },
    { name: '앙또', url: 'https://stimg.sooplive.co.kr/LOGO/aa/aangdoxx/m/aangdoxx.webp', category: 'vtuber', borderColor: 'red' },
    { name: '유나', url: 'https://stimg.sooplive.co.kr/LOGO/to/top6373/m/top6373.webp', category: 'vtuber', borderColor: 'red' },
    { name: '양이로', url: 'https://stimg.sooplive.co.kr/LOGO/ya/yang2ro/m/yang2ro.webp', category: 'vtuber', borderColor: 'red' },
    { name: '츄잉', url: 'https://stimg.sooplive.co.kr/LOGO/kc/kcw1217/m/kcw1217.webp', category: 'vtuber', borderColor: 'red' },
    { name: '유우챠', url: 'https://stimg.sooplive.co.kr/LOGO/yu/yuucha0626/m/yuucha0626.webp', category: 'vtuber', borderColor: 'red' },
    { name: '한예림', url: 'https://stimg.sooplive.co.kr/LOGO/nn/nnagongju54/m/nnagongju54.webp', category: 'vtuber', borderColor: 'red' },
    { name: '남연희', url: 'https://stimg.sooplive.co.kr/LOGO/na/namyeonhee/m/namyeonhee.webp', category: 'vtuber', borderColor: 'red' },
    { name: '혜다', url: 'https://stimg.sooplive.co.kr/LOGO/he/heda221112/m/heda221112.webp', category: 'vtuber', borderColor: 'red' },
    { name: '딩굴', url: 'https://stimg.sooplive.co.kr/LOGO/di/dinggoolx3/m/dinggoolx3.webp', category: 'vtuber', borderColor: 'red' },
    { name: '숩니찡', url: 'https://stimg.sooplive.co.kr/LOGO/br/breezy25/m/breezy25.webp', category: 'vtuber', borderColor: 'red' },
    { name: '앨리스얌', url: 'https://stimg.sooplive.co.kr/LOGO/al/alicehiyam/m/alicehiyam.webp', category: 'vtuber', borderColor: 'red' },
    { name: '꼼모리', url: 'https://stimg.sooplive.co.kr/LOGO/et/et0726/m/et0726.webp', category: 'vtuber', borderColor: 'red' },
    { name: '별시아', url: 'https://stimg.sooplive.co.kr/LOGO/su/sunne1010/m/sunne1010.webp', category: 'vtuber', borderColor: 'red' },
    { name: '유설아', url: 'https://stimg.sooplive.co.kr/LOGO/ye/yeveee/m/yeveee.webp', category: 'vtuber', borderColor: 'red' },
    { name: '고채린', url: 'https://stimg.sooplive.co.kr/LOGO/rj/rjsdnr115/m/rjsdnr115.webp', category: 'vtuber', borderColor: 'red' },
    { name: '최은뽀', url: 'https://stimg.sooplive.co.kr/LOGO/eu/eunpp0/m/eunpp0.webp', category: 'vtuber', borderColor: 'red' },
    { name: '설이', url: 'https://stimg.sooplive.co.kr/LOGO/mi/mini8282/m/mini8282.webp', category: 'vtuber', borderColor: 'red' },

];

// 페이지 로드 시 고정된 이미지를 각 카테고리 영역에 추가
window.onload = function() {
    fixedImages.forEach(imageData => {
        if (imageData.category === 'leader') {
            addImageToZone(imageData, leaderZone);
        } else if (imageData.category === 'male') {
            addImageToZone(imageData, maleZone);
        } else if (imageData.category === 'female') {
            addImageToZone(imageData, femaleZone);
        } else if (imageData.category === 'vtuber') {
            addImageToZone(imageData, virtualZone);
        }
    });
};



// 이미지 영역에 추가하는 함수
function addImageToZone(imageData, zone) {
    const container = document.createElement('div');
    container.classList.add('image-container');
    container.setAttribute('data-category', imageData.category); // 원래 카테고리를 저장
    container.setAttribute('data-original-category', imageData.category); // 원래 카테고리를 별도로 저장

    const imgElement = document.createElement('div');
    imgElement.style.backgroundImage = `url(${imageData.url})`;
    imgElement.classList.add('circle-image');

    // 이미지 외곽선 색상 적용
    if (imageData.borderColor === 'blue') {
        imgElement.classList.add('blue-border');
    } else if (imageData.borderColor === 'red') {
        imgElement.classList.add('red-border');
    } else if (imageData.borderColor === 'green') {
        imgElement.classList.add('green-border');
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

function moveImage(container) {
    const imgElement = container.querySelector('.circle-image');

    // 현재 zone2가 아닌 경우, 즉 원래 카테고리에서 zone2로 이동
    if (container.parentElement.id !== 'zone2') {
        zone2.appendChild(container);
        imgElement.style.width = '140px';
        imgElement.style.height = '140px';
    } else {
        // zone2에서 원래 카테고리로 이동
        const originalCategory = container.getAttribute('data-original-category'); // 원래 카테고리 값 가져오기

        if (originalCategory === 'leader') {
            leaderZone.appendChild(container);
        } else if (originalCategory === 'male') {
            maleZone.appendChild(container);
        } else if (originalCategory === 'female') {
            femaleZone.appendChild(container);
        } else if (originalCategory === 'vtuber') {
            virtualZone.appendChild(container);
        }

        imgElement.style.width = '80px';
        imgElement.style.height = '80px';
    }
}
