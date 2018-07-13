let currentPath = location.href;
sessionStorage.setItem('currentPath', JSON.stringify(currentPath));

function tabFull() {
    $(this).addClass("active").siblings().removeClass("active");
    const index = $(this).index();
    $(".main").eq(index).addClass("selected").siblings().removeClass("selected");
}

function tabTwoChange() {
    const index = $(this).index();
    if (index === 0) {
        $(this).addClass("left_ative").siblings().removeClass("right_ative");
    }
    if (index === 1) {
        $(this).addClass("right_ative").siblings().removeClass("left_ative");
    }
    $(".main").eq(index).addClass("selected").siblings().removeClass("selected");
}


function tabChangebg(index, _this) {
    if (index === 0) {
        _this.removeClass("left_ative").siblings().addClass("right_ative");
    }
    if (index === 1) {
        _this.removeClass("right_ative").siblings().addClass("left_ative");
    }
}


function listSlide() {
    $(document).on('tap', '.close', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        }
        if ($(this).parent('li').siblings().find('ul').hasClass('selected_ul')) {
            $(this).parent('li').siblings().find('ul').removeClass('selected_ul');
            $(this).parent('li').siblings().children('.close').removeClass('open');
        }
        $(this).siblings('ul').toggleClass('selected_ul');
    });
}

function maskShow() {
    $('body').css('overflow', 'hidden');
    $(this).parent().parent().siblings('.mask').show();
    $(this).parent().parent().siblings('.content').show();
}
function maskControlHide() {
    $('body').css('overflow', '');
    $(this).hide();
    $(this).siblings('.content').hide();
}
function cancelControlHide() {
    $('body').css('overflow', '');
    $(this).parent().parent().siblings('.mask').hide();
    $(this).parent().parent('.content').hide();
}

/* index页面竞技彩 数字彩等 的胜平负的页面跳转*/
//截取字符串
// function getParameter(str) {
//     str = str.substring(1);
//     const arr = str.split("=");
//     return arr[1];
// }
//足球页面切换
// function changeTabPages(str) {
//     const index = +getParameter(str);
//     $($('.tab_box .tab-item')[index]).addClass('active').siblings().removeClass('active');
//     $(".main").eq(index).addClass("selected").siblings().removeClass("selected");
// }

//双色球页面切换
function changeDoubleBall(str) {
    const index = +getParameter(str);
    if (index == 0) {
        $($('.change .change-item')[0]).removeClass('left_ative').siblings().addClass('right_ative');
    } else if (index == 1) {
        $($('.change .change-item')[1]).removeClass('right_ative').siblings().addClass('left_ative');
    }
    $(".change_detail").eq(index).addClass("active").siblings().removeClass("active");
}
/* index页面竞技彩 数字彩等 的胜平负的页面跳转*/


function getNoteCount(n, m) {
    var noteCount = [0, 0, 0, 0, 0, 0, 0, 0];
    var isOk = false;
    switch (n) {
        case 1:
            noteCount[0] = 1;
            isOk = true;
            break;
        case 2:
            switch (m) {
                case 1:
                    noteCount[1] = 1;
                    isOk = true;
                    break;
                case 3:
                    noteCount[0] = 2;
                    noteCount[1] = 1;
                    isOk = true;
                    break;
            }
            break;
        case 3:
            switch (m) {
                case 1:
                    noteCount[2] = 1;
                    isOk = true;
                    break;
                case 3:
                    noteCount[1] = 3;
                    isOk = true;
                    break;
                case 4:
                    noteCount[1] = 3;
                    noteCount[2] = 1;
                    isOk = true;
                    break;
                case 6:
                    noteCount[0] = 3;
                    noteCount[1] = 3;
                    isOk = true;
                    break;
                case 7:
                    noteCount[0] = 3;
                    noteCount[1] = 3;
                    noteCount[2] = 1;
                    isOk = true;
                    break;
            }
            break;
        case 4:
            switch (m) {
                case 1:
                    noteCount[3] = 1;
                    isOk = true;
                    break;
                case 4:
                    noteCount[2] = 4;
                    isOk = true;
                    break;
                case 5:
                    noteCount[2] = 4;
                    noteCount[3] = 1;
                    isOk = true;
                    break;
                case 6:
                    noteCount[1] = 6;
                    isOk = true;
                    break;
                case 10:
                    noteCount[0] = 4;
                    noteCount[1] = 6;
                    isOk = true;
                    break;
                case 11:
                    noteCount[1] = 6;
                    noteCount[2] = 4;
                    noteCount[3] = 1;
                    isOk = true;
                    break;
                case 14:
                    noteCount[0] = 4;
                    noteCount[1] = 6;
                    noteCount[2] = 4;
                    isOk = true;
                    break;
                case 15:
                    noteCount[0] = 4;
                    noteCount[1] = 6;
                    noteCount[2] = 4;
                    noteCount[3] = 1;
                    isOk = true;
                    break;
            }
            break;
        case 5:
            switch (m) {
                case 1:
                    noteCount[4] = 1;
                    isOk = true;
                    break;
                case 5:
                    noteCount[3] = 5;
                    isOk = true;
                    break;
                case 6:
                    noteCount[3] = 5;
                    noteCount[4] = 1;
                    isOk = true;
                    break;
                case 10:
                    noteCount[1] = 10;
                    isOk = true;
                    break;
                case 15:
                    noteCount[0] = 5;
                    noteCount[1] = 10;
                    isOk = true;
                    break;
                case 16:
                    noteCount[2] = 10;
                    noteCount[3] = 5;
                    noteCount[4] = 1;
                    isOk = true;
                    break;
                case 20:
                    noteCount[1] = 10;
                    noteCount[2] = 10;
                    isOk = true;
                    break;
                case 25:
                    noteCount[0] = 5;
                    noteCount[1] = 10;
                    noteCount[2] = 10;
                    isOk = true;
                    break;
                case 26:
                    noteCount[1] = 10;
                    noteCount[2] = 10;
                    noteCount[3] = 5;
                    noteCount[4] = 1;
                    isOk = true;
                    break;
                case 30:
                    noteCount[0] = 5;
                    noteCount[1] = 10;
                    noteCount[2] = 10;
                    noteCount[3] = 5;
                    isOk = true;
                    break;
                case 31:
                    noteCount[0] = 5;
                    noteCount[1] = 10;
                    noteCount[2] = 10;
                    noteCount[3] = 5;
                    noteCount[4] = 1;
                    isOk = true;
                    break;
            }
            break;
        case 6:
            switch (m) {
                case 1:
                    noteCount[5] = 1;
                    isOk = true;
                    break;
                case 6:
                    noteCount[4] = 6;
                    isOk = true;
                    break;
                case 7:
                    noteCount[4] = 6;
                    noteCount[5] = 1;
                    isOk = true;
                    break;
                case 15:
                    noteCount[1] = 15;
                    isOk = true;
                    break;
                case 20:
                    noteCount[2] = 20;
                    isOk = true;
                    break;
                case 21:
                    noteCount[0] = 6;
                    noteCount[1] = 15;
                    isOk = true;
                    break;
                case 22:
                    noteCount[3] = 15;
                    noteCount[4] = 6;
                    noteCount[5] = 1;
                    isOk = true;
                    break;
                case 35:
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    isOk = true;
                    break;
                case 41:
                    noteCount[0] = 6;
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    isOk = true;
                    break;
                case 42:
                    noteCount[2] = 20;
                    noteCount[3] = 15;
                    noteCount[4] = 6;
                    noteCount[5] = 1;
                    isOk = true;
                    break;
                case 50:
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    noteCount[3] = 15;
                    isOk = true;
                    break;
                case 56:
                    noteCount[0] = 6;
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    noteCount[3] = 15;
                    isOk = true;
                    break;
                case 57:
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    noteCount[3] = 15;
                    noteCount[4] = 6;
                    noteCount[5] = 1;
                    isOk = true;
                    break;
                case 62:
                    noteCount[0] = 6;
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    noteCount[3] = 15;
                    noteCount[4] = 6;
                    isOk = true;
                    break;
                case 63:
                    noteCount[0] = 6;
                    noteCount[1] = 15;
                    noteCount[2] = 20;
                    noteCount[3] = 15;
                    noteCount[4] = 6;
                    noteCount[5] = 1;
                    isOk = true;
                    break;
            }
            break;
        case 7:
            switch (m) {
                case 1:
                    noteCount[6] = 1;
                    isOk = true;
                    break;
                case 7:
                    noteCount[5] = 7;
                    isOk = true;
                    break;
                case 8:
                    noteCount[5] = 7;
                    noteCount[6] = 1;
                    isOk = true;
                    break;
                case 21:
                    noteCount[4] = 21;
                    isOk = true;
                    break;
                case 35:
                    noteCount[3] = 35;
                    isOk = true;
                    break;
                case 120:
                    noteCount[1] = 21;
                    noteCount[2] = 35;
                    noteCount[3] = 35;
                    noteCount[4] = 21;
                    noteCount[5] = 7;
                    noteCount[6] = 1;
                    isOk = true;
                    break;
                case 127:
                    noteCount[0] = 7;
                    noteCount[1] = 21;
                    noteCount[2] = 35;
                    noteCount[3] = 35;
                    noteCount[4] = 21;
                    noteCount[5] = 7;
                    noteCount[6] = 1;
                    isOk = true;
                    break;
            }
            break;
        case 8:
            switch (m) {
                case 1:
                    noteCount[7] = 1;
                    isOk = true;
                    break;
                case 8:
                    noteCount[6] = 8;
                    isOk = true;
                    break;
                case 9:
                    noteCount[6] = 8;
                    noteCount[7] = 1;
                    isOk = true;
                    break;
                case 28:
                    noteCount[5] = 28;
                    isOk = true;
                    break;
                case 56:
                    noteCount[4] = 56;
                    isOk = true;
                    break;
                case 70:
                    noteCount[3] = 70;
                    isOk = true;
                    break;
                case 247:
                    noteCount[1] = 28;
                    noteCount[2] = 56;
                    noteCount[3] = 70;
                    noteCount[4] = 56;
                    noteCount[5] = 28;
                    noteCount[6] = 8;
                    noteCount[7] = 1;
                    isOk = true;
                    break;
                case 255:
                    noteCount[0] = 8;
                    noteCount[1] = 28;
                    noteCount[2] = 56;
                    noteCount[3] = 70;
                    noteCount[4] = 56;
                    noteCount[5] = 28;
                    noteCount[6] = 8;
                    noteCount[7] = 1;
                    isOk = true;
                    break;
            }
            break;
    }
    return noteCount;
}

function deepCopy(obj) {
    var result;
    if (Object.prototype.toString.call(obj) == "[object Array]") {
        result = [];
        for (var _temp in obj) {
            result.push(obj[_temp]);
        }
    } else {
        result = {};
        for (var key in obj) {
            result[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
        }
    }
    return result;
}
function combineS(builder, dest, builderArray) {
    let _builder = builder;
    let _dest = deepCopy(dest);
    while (_dest.length > 0) {
        let _destTemp = _dest.splice(0, 1)[0];
        if (builder.indexOf(_destTemp.game) != -1) {
            continue;
        }
        for (var _index = 0; _index < _destTemp.bet.length; _index++) {
            builder += "" + _destTemp.bet[_index] + "x";
            combineS(builder, _dest, builderArray);
            if (builder != "") {
                builder = builder.substring(0, builder.lastIndexOf("x")); 
                builderArray.push(builder); 
                builder = _builder;
            }
        }
        builder = _builder;
    }
    builder = _builder;
}

function getArr(evt) {
    var builder = "";
    var builderArray = new Array();
    combineS(builder, evt, builderArray);
    return builderArray
}
// var gameAarray = [{ "game": "7001", "bet": ["3", "1"] }, { "game": "7002", "bet": ["3", "1"] }, { "game": "7003", "bet": ["3", "1", "0"] }];
// var gameAarray = [{ "game": "7001", "bet": [2, 3,4] }, { "game": "7002", "bet": [5, 6, 7] }, { "game": "7003", "bet": [8, 9,10] }];
// var betString = "3x1";

function getZh(betString, gameAarray) {
    let bet = betString.split("x");
    let betArrays = getNoteCount(parseInt(bet[0]), parseInt(bet[1]));
    let a = getArr(gameAarray);
    let _p = 1;
    let arr = [];
    for (var _b in betArrays) {
        if (betArrays[_b] == 0) {
            continue;
        }
        for (var _e in a) {
            if ((a[_e].split('x')).length == (parseInt(_b) + 1)) {
                arr.push(a[_e]);
                _p++;
            }
        }
    }
    return arr;
}
function getOddsNum(oddsArr, multipleVal) {
    let oddsNum = [];
    for (let i = 0; i < oddsArr.length; i++) {
        let stra = oddsArr[i];
        let strArr = [];
        let num = 1;
        strArr = stra.split('x');
        for (let j = 0; j < strArr.length; j++) {
            num *= parseFloat(strArr[j]);
        }
        oddsNum.push(Math.ceil(num * multipleVal *2 * 100) / 100);
        // oddsArr[i] = Math.ceil(num * multipleVal);
    }
    return oddsNum;
}


function getSingleOdds(buyOddsStr, multipleVal) {
    let oddsNum = [];
    for (let i = 0; i < buyOddsStr.length;i++ ){
        oddsNum.push(Math.ceil(buyOddsStr[i] * multipleVal * 2 * 100) / 100);
    }
    return oddsNum;
}

//最大值
// function getMaxNum(arr) {
//     var max = arr[0];
//     var len = arr.length;
//     for (var i = 1; i < len; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
var passObj = {
    2: ['2x1'],
    3: ['3x1', '3x3', '3x4'],
    4: ['4x1', '4x4', '4x5', '4x6', '4x11'],
    5: ['5x1', '5x5', '5x6', '5x10', '5x16', '5x20', '5x26'],
    6: ['6x1', '6x6', '6x7', '6x15', '6x20', '6x22', '6x35', '6x42', '6x50', '6x57'],
    7: ['7x1', '7x7', '7x8', '7x21', '7x35', '7x120'],
    8: ['8x1', '8x8', '8x9', '8x56', '8x70', '8x247'],
}
var freepassObj = {
    2: ['2关'],
    3: ['2关', '3关'],
    4: ['2关', '3关', '4关'],
    5: ['2关', '3关', '4关', '5关'],
    6: ['2关', '3关', '4关', '5关', '6关'],
    7: ['2关', '3关', '4关', '5关', '6关', '7关'],
    8: ['2关', '3关', '4关', '5关', '6关', '7关', '8关'],
}


function getSpan(num) {
    let passStyle = document.getElementsByClassName('passStyle')[0];
    for (let key in passObj) {
        if (num == +key) {
            let len = passObj[key].length;
            let spanStr = '';
            for (let i = 0; i < len; i++) {
                // var span = document.createElement('span');
                // passStyle.appendChild(span);
                // span.innerHTML=passObj[key][i];
                spanStr += "<span>" + passObj[key][i] + "</span>";
            }
            $('.passStyle').html(spanStr);
        }
    }
}

function getFreeSpan(num) {
    let passStyle = document.getElementsByClassName('passStyle')[0];
    for (let key in freepassObj) {
        if (num == +key) {
            let len = freepassObj[key].length;
            let spanStr = '';
            for (let i = 0; i < len; i++) {
                spanStr += "<span>" + freepassObj[key][i] + "</span>";
            }
            $('.freeStyle').html(spanStr);
        }
    }
}


/*购买页面 点击返回   开始*/
function returnCode(storageName) {
    sessionStorage.removeItem(storageName);
    sessionStorage.removeItem('spqfSecObj');
    // if (type == 'single'){
    //     location.href = location.href.replace('buy_', '');
    // }else if(type == 'pass'){
    //     location.href = location.href.replace('buy_', '');
    // } 
}

/*购买返回   结束*/

/*购买页面 删除   开始*/
function delCode(_this, subPlayType, storageData, storageName, type) {
    if (type == 'pass'){
        let buyList = _this.parent().parent().children();
        if (buyList.length <= 2) {
            mui.alert('请至少选择两场赛事');
            return;
        } else {
            _this.parent().remove();
        }
    }else if (type == 'single') {
        let buyList = _this.parent().parent().children();
        if (buyList.length <= 1) {
            mui.alert('请至少选择一场赛事');
            return;
        } else {
            _this.parent().remove();
        }
    }
    if (subPlayType == '51' || subPlayType == '56') {//胜平负  让球胜平负
        let matchuniqueid = _this.parent().data('matchuniqueid');
        storageData.map((ele, index) => {
            if (matchuniqueid == ele.matchuniqueid) {
                storageData.splice(index, 1);
                sessionStorage.setItem(storageName, JSON.stringify(storageData));
            }
        });
    } else if (subPlayType == '52' || subPlayType == '54' || subPlayType == '53') {//比分  半全场 总进球
        let id = _this.parent().data('id');
        storageData.data.map((ele, index) => {
            if (id == ele.matchUniqueId) {
                storageData.data.splice(index, 1);
                sessionStorage.setItem(storageName, JSON.stringify(storageData));
            }
        });
    } else if (subPlayType == '59') {//混合
        let id = _this.parent().data('id');
        storageData.data.map((element, index) => {
            if (element[0].id && id == element[0].id) {
                storageData.data.splice(index, 1);
                sessionStorage.setItem(storageName, JSON.stringify(storageData));
            }
        });
    }
    if (type == 'pass'){
        if ($('.passStyle').css('display') === 'block') {//M*N
            // getSpan(currentData.data.length);
            if (subPlayType == '51' || subPlayType == '56') {//胜平负  让球胜平负 混合
                getSpan(storageData.length);
            } else if (subPlayType == '52' || subPlayType == '54' || subPlayType == '59' || subPlayType == '53') {//比分  半全场
                getSpan(storageData.data.length);
            }
            $('.passStyle span').removeClass('active');
            spqfSecObj.passWay = 0;//默认过关方式
            $('.pass_way').eq(0).addClass('active');
            $('.pass_way').eq(1).removeClass('active');
        } else {//自由过关 
            if (subPlayType == '51' || subPlayType == '56') {//胜平负  让球胜平负 混合
                getFreeSpan(storageData.length);
            } else if (subPlayType == '52' || subPlayType == '54' || subPlayType == '59' || subPlayType == '53') {//比分  半全场
                getFreeSpan(storageData.data.length);
            }
            $('.freeStyle span').removeClass('active');
            spqfSecObj.passWay = 1;//默认过关方式
            $('.pass_way').eq(1).addClass('active');
            $('.pass_way').eq(0).removeClass('active');
        }
    }else{
        $('.passStyle span').removeClass('active');
    }
    clearData();
    $('.mui-input-numbox').val(1);
    spqfSecObj.multipleVal = 1;//默认倍数
    spqfSecObj.styleType = '';
    sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
}

/*购买 删除    结束*/

/*购买页面 清空列表   开始*/
function delAllData(storageName) {
    sessionStorage.removeItem(storageName);
    sessionStorage.removeItem('spqfSecObj');
    $('.passStyle').html('');
    $('.freeStyle').html('');
    $('.page-2 .buy_detail ul').html('');
    $('.styleType').html('');
    $('.mui-input-numbox').val(1);
    spqfSecObj.multipleVal = 1;//默认倍数
    spqfSecObj.passWay = 0;//默认过关方式 自由过关
    $('.pass_way').eq(0).addClass('active');
    $('.pass_way').eq(1).removeClass('active');
    spqfSecObj.styleType = '';
}

/*购买 清空列表    结束*/

/* M串N，自由过关 开始 */
function changePassWay(_this, len) {
    if (_this.hasClass('active')) {
        _this.removeClass('active').siblings().addClass('active');
    } else {
        _this.addClass('active').siblings().removeClass('active');
    }
    let num = _this.index();
    if (num == 0) {
        $('.passStyle').show();
        $('.freeStyle').hide();
        spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
        spqfSecObj.passWay = 0;
        spqfSecObj.styleType = '';
        sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
        $('.freeStyle span').removeClass('active');
        getSpan(len);
    } else if (num == 1) {
        $('.freeStyle').show();
        $('.passStyle').hide();
        spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
        spqfSecObj.passWay = 1;
        spqfSecObj.styleType = '';
        sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
        $('.passStyle span').removeClass('active');
        getFreeSpan(len);
    }
    clearData();
}

function clickPassStyle(_this) {
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    if (_this.siblings().hasClass('active')) {
        _this.siblings().removeClass('active');
    }
    if (_this.hasClass('active')) {
        _this.removeClass('active');
        spqfSecObj.styleType = '';
        sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
    } else {
        _this.addClass('active');
        betString = $('.passStyle span.active').text();
        spqfSecObj.styleType = betString;
        sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
    }
}


function clickFreeStyle(_this) {
    _this.toggleClass('active');
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    let freeStyleSel = $('.freeStyle span.active');
    betStringArr = [];
    betTypeArr = [];
    $.each(freeStyleSel, function (index, ele) {
        betTypeArr.push(parseInt($(ele).text().substr(0, 1)));
        betStringArr.push($(ele).text().substr(0, 1) + 'x1');
    });
    if (betTypeArr.length) {//自由过关
        spqfSecObj.styleType = betTypeArr;
    } else {//M串N
        spqfSecObj.styleType = '';
    }
    sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
}
/* M串N，自由过关 结束 */


/* 数字框 开始 */
function clickNumboxPlus(type) {
    multipleVal = parseInt($('.mui-input-numbox').val()) + 1;
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    if (spqfSecObj.styleType) {
        pot = buycontent.length;//注数
        amount = pot * multipleVal * 2;
        if (amount > 20000) {
            mui.alert('此次投注金额为' + amount + '，超过2万，请重新选择！', function () {
                $('.styleType span').removeClass('active');
                spqfSecObj.styleType = '';
                sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
                clearData();
                $('.mui-input-numbox').val(multipleVal - 1);
            });
            return;
        }
        $('.amount').text(amount);//投注金额
        $('.pot').text(pot);//注数
        if(type == 'pass'){
            buyOdds = getOddsNum(buyOddsStr, multipleVal);
            // maxmoney = Math.ceil(getMaxNum(buyOdds));
            let len = JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType[JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType.length - 1];
            let betKey = $('.passStyle').css('display') === 'block' ? betString : passObj[len][passObj[len].length - 1];
            maxmoney = Math.ceil(getMaxMoney(buycontent, buyOdds, betKey, OddsArr, contentArr));
        } else if(type == 'single'){
            buyOdds = getSingleOdds(buyOddsStr, multipleVal);
            // maxmoney = Math.ceil(getMaxNum(buyOdds));
            maxmoney = 0;
            OddsArr.map((val, idx) => {
                maxmoney += Math.max.apply(null, val.bet) * 2 * multipleVal;
            })
            maxmoney = Math.ceil(maxmoney);
        }
        
        $('.maxmoney').text(maxmoney);//最高奖金
    }
    spqfSecObj.multipleVal = multipleVal;
    sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
}

function clickNumboxMinus(type) {
    multipleVal = parseInt($('.mui-input-numbox').val()) - 1;
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    if (spqfSecObj.styleType) {
        pot = buycontent.length;//注数
        amount = pot * multipleVal * 2;
        if (type == 'pass') {
            buyOdds = getOddsNum(buyOddsStr, multipleVal);
            // maxmoney = Math.ceil(getMaxNum(buyOdds));
            let len = JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType[JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType.length - 1];
            let betKey = $('.passStyle').css('display') === 'block' ? betString : passObj[len][passObj[len].length - 1];
            maxmoney = Math.ceil(getMaxMoney(buycontent, buyOdds, betKey, OddsArr, contentArr));
        } else if (type == 'single'){
            buyOdds = getSingleOdds(buyOddsStr, multipleVal);
            // maxmoney = Math.ceil(getMaxNum(buyOdds));
            maxmoney = 0;
            OddsArr.map((val, idx) => {
                maxmoney += Math.max.apply(null, val.bet) * 2 * multipleVal;
            })
            maxmoney = Math.ceil(maxmoney);
        }
        $('.maxmoney').text(maxmoney);//最高奖金
        $('.pot').text(pot);//注数
        $('.amount').text(amount);
    }
    spqfSecObj.multipleVal = multipleVal;
    sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
}

function changeInputNumbox(type) {
    multipleVal = parseInt($('.mui-input-numbox').val());
    if (multipleVal >= 99) {
        mui.alert('最高为99倍');
    }
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    // console.log(spqfSecObj);
    if (spqfSecObj.styleType) {
        pot = buycontent.length;//注数
        amount = pot * multipleVal * 2;
        if (amount > 20000) {
            limitMaxmoney(amount);
            return;
        }
        if (type == 'pass') {
            buyOdds = getOddsNum(buyOddsStr, multipleVal);
            // maxmoney = Math.ceil(getMaxNum(buyOdds));
            let len = JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType[JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType.length - 1];
            let betKey = $('.passStyle').css('display') === 'block' ? betString : passObj[len][passObj[len].length - 1];
            maxmoney = Math.ceil(getMaxMoney(buycontent, buyOdds, betKey, OddsArr, contentArr));
        } else {
            buyOdds = getSingleOdds(buyOddsStr, multipleVal);
            // maxmoney = Math.ceil(getMaxNum(buyOdds));
            maxmoney = 0;
            OddsArr.map((val, idx) => {
                maxmoney += Math.max.apply(null, val.bet) * 2 * multipleVal;
            })
            maxmoney = Math.ceil(maxmoney);
        }
        $('.maxmoney').text(maxmoney);//最高奖金
        $('.pot').text(pot);//注数
        $('.amount').text(amount);
    }
    spqfSecObj.multipleVal = multipleVal;
    sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
}
/* 数字框 结束 */

/* 查看方案弹出层 开始 */
function getLook() {
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    if (!spqfSecObj.styleType) {
        mui.alert('请选择过关方式');
    } else {
        $('.mask').show();
        $('.passway').show();
        $('body').css('overflow', 'hidden');
        buyspfdata = {
            buyspfItems: buycontent,
            betString: betString,
            oddsnum: buyOdds,
            multiple: spqfSecObj.multipleVal
        }
        let buydatahtml = template('buyspfdata', buyspfdata);
        $('.content').html(buydatahtml);
    }
}

/* 查看方案弹出层 结束 */

/* 购买请求发送 开始 */
function getPutData(storageName) {
    let storageData = JSON.parse(sessionStorage.getItem(storageName));
    if (subPlayType == '51' || subPlayType == '56') {//胜平负  让球胜平负
        putbuyObj.lotteryType = storageData[0].lotterytype;//彩种类型
        putbuyObj.subPlayType = storageData[0].subplaytype;//子玩法
        let betContextArray = new Array();
        $.each(storageData, function (index, ele) {
        	let betContextObj = {};
        	let str = new Array();
            if (!(ele.firstindex == '0' && ele.secindex == '0' && ele.thirdindex == '0')){
                if (ele.firstindex == '1') {
                	str.push('3');
                }
                if (ele.secindex == '1') {
                	str.push('1');
                }
                if (ele.thirdindex == '1') {
                	str.push('0');
                }
                betContextObj[ele.matchuniqueid] = str;
                betContextArray.push(betContextObj);
            }
        })
        putbuyObj.betContext = JSON.stringify(betContextArray);//投注内容

    } else if (subPlayType == '52' || subPlayType == '54' || subPlayType == '53') {//比分  半全场 总进球
        putbuyObj.lotteryType = storageData.lotteryType;//彩种类型
        putbuyObj.subPlayType = storageData.subPlayType;//子玩法
        let betContextArray = new Array();
        storageData.data.forEach(element => {
        	let betContextObj = {};//不同
            if (element.selectedItem.length > 0){
                switch (subPlayType) {
                    case '52':
                        let str = new Array();
                        element.selectedItem.forEach(ele => {
                            str.push(ele.key.replace(':', '').replace('胜其他', '3A').replace('平其他', '1A').replace('负其他', '0A'));
                        })
                        betContextObj[element.matchUniqueId] = str;
                        betContextArray.push(betContextObj);
                        break;
                    case '53':
                        betContextObj[element.matchUniqueId] = getGoals(element);
                        betContextArray.push(betContextObj);
                        break;
                    case '54':
                        betContextObj[element.matchUniqueId] = getHalfFull(element);
                        betContextArray.push(betContextObj);
                        break;
                    default:
                        break;
                }
            }
        });
        putbuyObj.betContext = JSON.stringify(betContextArray);//投注内容
    }
    putbuyObj.multiple = spqfSecObj.multipleVal;//倍数
    putbuyObj.pot = $('.pot').text();//注数
    putbuyObj.amount = $('.amount').text();//投注金额
    if (typeof spqfSecObj.styleType === 'object') {
        putbuyObj.betType = JSON.stringify(spqfSecObj.styleType);//投注方式
    } else {
        if(type == 'pass'){
            putbuyObj.betType = spqfSecObj.styleType;//投注方式
        }else if(type == 'single'){
            putbuyObj.betType = 'single';//投注方式
        }
    }
    if (JSON.parse(sessionStorage.getItem('adcode'))){
        putbuyObj.adcode = JSON.parse(sessionStorage.getItem('adcode'));
        console.log('putbuyObj：', putbuyObj);
    }else{
        getLocation();
        putbuyObj.adcode = JSON.parse(sessionStorage.getItem('adcode'));
        console.log('putbuyObj：', putbuyObj);
    }
    // if (JSON.parse(sessionStorage.getItem('adcode')) == null || JSON.parse(sessionStorage.getItem('adcode')) == undefined){
    //     getLocation();
    //     // return;
    // }else{
    //     putbuyObj.adcode = JSON.parse(sessionStorage.getItem('adcode'));
    // }
    amount = $('.amount').text();//投注金额
    if (amount > 20000) {
        mui.alert('投注金额不能超过2万，请重新选择！');
    } else {
        // console.log(123123, putbuyObj)
        // putAjax(storageName);
        $('.deposit').show()
        $('.mask').show()
        putbuyObj['takeTicketsFlag'] = 1
        putbuyObj['storeId'] = ''
    }
}

function putAjax(storageName) {
    $.ajax({
        url: '/order/saveOrderInfo.json',
        // url:'http://192.168.28.30:9731/saveOrderInfo.json',
        type: 'post',
        dataType: 'json',
        data: putbuyObj,
        beforeSend: function (request) {
            let token = window.sessionStorage.getItem("token");
            if (token == undefined || token == null) {
                mui.confirm('您未登陆，请登陆！', '温馨提示', ['是', '否'], function (e) {
                    if (e.index == 0) {
                        sessionStorage.setItem('savedata', JSON.stringify(getSaveData()));
                        location.href = '../../me/user_login.html';
                    } else {
                        console.log('就是不想登陆，哈哈哈');
                    }
                })

            } else {
                $("#buy_sure").addClass('disabledTab');
                request.setRequestHeader("token", token);
            }
        },
        success: function (res) {
            if (res.code === '00000' && res.data) {
                sessionStorage.setItem('out_trade_no', res.data.data.data.out_trade_no);
                sessionStorage.setItem('pay_info', res.data.data.data.pay_info);
                sessionStorage.setItem('total_fee', res.data.data.data.total_fee);
                if (JSON.parse(sessionStorage.getItem('spqfSecObj'))) {
                    sessionStorage.removeItem(storageName);
                    sessionStorage.removeItem('spqfSecObj');
                }
                location.href = '/pages/me/pay.html';
            }
        },
        complete: function () {
            $("#buy_sure").removeClass('disabledTab');
        },
        error: function () {
            console.log("失败！");
        }
    })
}

function getSaveData() {
    spqfSecObj = JSON.parse(sessionStorage.getItem('spqfSecObj'));
    let savedata = {
        pot: $('.pot').text(),//注数
        amount: $('.amount').text(),//投注金额
        maxmoney: $('.maxmoney').text(),//最高奖金
        multipleVal: spqfSecObj.multipleVal,//倍数
        passWay: spqfSecObj.passWay,//过关类型
        styleType: spqfSecObj.styleType,//过关方式
        buycontent: buycontent,
        buyOddsStr: buyOddsStr,
        oddsnum: buyOdds,
        betString: betString
    }
    return savedata;
}

/* 购买请求发送  结束 */


function getHalfFull(obj) {
    let str = new Array();
    obj.selectedItem.forEach(ele => {
        switch (ele.key) {
            case "胜胜":
            	str.push('33');
                break;
            case "胜平":
            	str.push('31');
                break;
            case "胜负":
            	str.push('30');
                break;
            case "平胜":
            	str.push('13');
                break;
            case "平平":
            	str.push('11');
                break;
            case "平负":
            	str.push('10');
                break;
            case "负胜":
            	str.push('03');
                break;
            case "负平":
            	str.push('01');
                break;
            case "负负":
            	str.push('00');
                break;
            default:
                break;
        }
    })
    return str;
}

function getGoals(obj) {
    let str = new Array();
    obj.selectedItem.forEach(ele => {
        switch (ele.key) {
            case 0:
            case '0':
            	str.push('0');
                break;
            case 1:
            case '1':
            	str.push('1');
                break;
            case 2:
            case '2':
            	str.push('2');
                break;
            case 3:
            case '3':
            	str.push('3');
                break;
            case 4:
            case '4':
            	str.push('4');
                break;
            case 5:
            case '5':
            	str.push('5');
                break;
            case 6:
            case '6':
            	str.push('6');
                break;
            default:
            	str.push('7');
                break;
        }
    })
    return str;
}

function clearData() {
    $('.maxmoney').text(0);//最高奖金
    $('.pot').text(0);//注数
    $('.amount').text(0);
}

function limitMaxmoney(amount) {
    mui.alert('此次投注金额为' + amount + '元，超过2万，请重新选择！', function () {
        $('.styleType span').removeClass('active');
        spqfSecObj.styleType = '';
        sessionStorage.setItem('spqfSecObj', JSON.stringify(spqfSecObj));
        clearData();
    });
}

function getCombinScore(storageData) {
    contentArr = [];
    OddsArr = [];
    storageData.data.forEach(element => {
        if (element.selectedItem.length) {
            let gamebetArr = [];//M*N  内容
            let contentObj = {};//M*N  内容
            let oddsbetArr = [];//M*N  赔率
            let oddsObj = {};//M*N  赔率
            contentObj.game = element.matchUniqueId;
            oddsObj.game = element.matchUniqueId;
            element.selectedItem.forEach(ele => {
                switch (subPlayType) {
                    case '51':
                    case '52':
                    case '54':
                    case '56':
                        gamebetArr.push(element.time + "(" + ele.key + ")");
                        break;
                    case '53':
                        gamebetArr.push(element.time + "(" + ele.key + "球)");
                        break;
                    case '59':
                        if (element.type == "goals") {
                            gamebetArr.push(element.time + "(" + ele.key + "球)");
                        } else {
                            gamebetArr.push(element.time + "(" + ele.key + ")");
                        }
                        break;
                    default:
                        break;
                }
                oddsbetArr.push(ele.val);
            });
            oddsObj.bet = oddsbetArr; //M*N  赔率
            OddsArr.push(oddsObj); //M*N  赔率
            contentObj.bet = gamebetArr; //M*N  内容
            contentArr.push(contentObj); //M*N  内容
        }
    });
    // console.log(OddsArr);//赔率组合
    // console.log(contentArr);//内容组合
    if ($('.passStyle').css('display') === 'block') {//M串N
        betString = $('.passStyle span.active').text();
        buycontent = getZh(betString, contentArr); //内容的排列组合
        buyOddsStr = getZh(betString, OddsArr); //赔率的排列组合
    } else {//自由过关
        buycontent = [];//清空
        buyOddsStr = [];//清空
        $.each(betStringArr, function (index, ele) {
            buycontent = buycontent.concat(getZh(ele, contentArr)); //内容的排列组合
            buyOddsStr = buyOddsStr.concat(getZh(ele, OddsArr));  //赔率的排列组合
        });
        betString = '自由过关';
    }
    pot = buycontent.length;//注数
    amount = pot * multipleVal * 2;//投注金额
    if (amount > 20000) {
        limitMaxmoney(amount);
        return;
    }
    $('.amount').text(amount);//投注金额
    $('.pot').text(pot);//注数
    buyOdds = getOddsNum(buyOddsStr, multipleVal);
    // maxmoney = Math.ceil(getMaxNum(buyOdds));
    let len = JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType[JSON.parse(sessionStorage.getItem('spqfSecObj')).styleType.length - 1];
    let betKey = $('.passStyle').css('display') === 'block' ? betString : passObj[len][passObj[len].length - 1];
    maxmoney = Math.ceil(getMaxMoney(buycontent, buyOdds, betKey, OddsArr, contentArr));
    $('.maxmoney').text(maxmoney);//最高奖金
}


function getSingleScore(storageData) {
    buycontent = [];//内容
    buyOddsStr = [];//赔率
    OddsArr = [];
    storageData.data.map(element => {
        if (element.selectedItem.length) {
            let oddsbetArr = [];//M*N  赔率
            let oddsObj = {};//M*N  赔率
            oddsObj.game = element.matchUniqueId;
            element.selectedItem.map(ele => {
                switch (subPlayType) {
                    case '51':
                    case '52':
                    case '54':
                    case '56':
                        buycontent.push(element.time + "(" + ele.key + ")");
                        // buyOddsStr.push(parseFloat(ele.val));
                        break;
                    case '53':
                        buycontent.push(element.time + "(" + ele.key + "球)");
                        // buyOddsStr.push(parseFloat(ele.val));
                        break;
                    case '59':
                        if (element.type == "goals") {
                            buycontent.push(element.time + "(" + ele.key + "球)");
                            // buyOddsStr.push(parseFloat(ele.val));
                        } else {
                            buycontent.push(element.time + "(" + ele.key + ")");
                            // buyOddsStr.push(parseFloat(ele.val));;
                        }
                        break;
                    default:
                        break;
                }
                buyOddsStr.push(parseFloat(ele.val));
                oddsbetArr.push(ele.val);
                oddsObj.bet = oddsbetArr; //M*N  赔率
            })
            OddsArr.push(oddsObj); //M*N  赔率
        }
    })
    // console.log(buycontent);
    // console.log(buyOddsStr);
    // console.log(OddsArr);
    pot = buycontent.length;//注数
    amount = pot * multipleVal * 2;
    if (amount > 20000) {
        limitMaxmoney(amount);
        return;
    }
    buyOdds = getSingleOdds(buyOddsStr, multipleVal);
    maxmoney = 0;
    OddsArr.map((val, idx) => {
        maxmoney += Math.max.apply(null, val.bet) * 2 * multipleVal;
    })
    maxmoney = Math.ceil(maxmoney);
    $('.maxmoney').text(maxmoney);//最高奖金
    $('.pot').text(pot);//注数
    $('.amount').text(amount);
}

/*组合计算 结束 */

//切换 赛事 页面 清除数据
$('.tab_box .tab-item').on('tap', function () {
    sessionStorage.removeItem('spfdataArr');
    sessionStorage.removeItem('spqfSecObj');
    sessionStorage.removeItem('score');
    sessionStorage.removeItem('halfFull');
    sessionStorage.removeItem('mix');
    sessionStorage.removeItem('goalsData');
});

// 百度定位 高德
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
//        mui.alert("浏览器不支持地理定位。");
    }
}

function showPosition(position) {
    var latlon = position.coords.longitude + ',' + position.coords.latitude;
    // var latlon = '113.363988,23.127838'
    // 高德
    var url = "http://restapi.amap.com/v3/geocode/regeo?key=b3cca9d521427494fc7f8bdf8ff3f065&location=" + latlon
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: url,
        success: function (json) {
            // if(json.status==0){
            // 得到当前市信息
            var cityName = json.regeocode.addressComponent.city
            var province = json.regeocode.addressComponent.province
            var cityCode = json.regeocode.addressComponent.citycode
            var adcode = ''
            addressData.data.map(val => {
                if(val.regionName.includes(province)) {
                    val.childList.map(val_1 => {
                        if(val_1.regionName == cityName) {
                            adcode = val_1.regionCode
                        }
                    })
                }
            })
            sessionStorage.setItem('adcode', JSON.stringify(adcode))
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // mui.alert("地址位置获取失败")
        }
    });
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            // mui.alert("定位失败,用户拒绝请求地理定位");
            break;
        case error.POSITION_UNAVAILABLE:
            // mui.alert("定位失败,位置信息是不可用");
            break;
        case error.TIMEOUT:
            // mui.alert("定位失败,请求获取用户位置超时");
            break;
        case error.UNKNOWN_ERROR:
            // mui.alert("定位失败,定位系统失效");
            break;
    }
}

/**
 * 
 * @param {*已合成内容组合} buycontent 
 * @param {*已合成赔率组合} buyOdds 
 * @param {*串法} betString 
 * @param {*未合成赔率} OddsArr 
 * @param {*为合成内容} contentArr 
 */
function getMaxMoney(buycontent, buyOdds, betString, OddsArr, contentArr) {
    let _max = 0, _id = 0, _maxMoney = 0, _gameArr = []
    if (buycontent[buycontent.length - 1].length == buycontent[0].length) {
        OddsArr.map((val, idx) => {
            // let aa = Math.max.apply(null, val.bet).toFixed(2)
            let aa = Math.max.apply(null, val.bet)
            // let ind = val.bet.indexOf(aa)
            let ind = val.bet.findIndex((ele, ind)=>{
                return ele == aa;
            })
            _gameArr.push({
                game: (55 + idx).toString(),
                bet: [contentArr[idx].bet[ind]]
            })
        })
    } else {
        for (let i = buycontent.length - 1; i > 0; i--) {
            if (buyOdds[i] > _max) {
                _max = buyOdds[i]
                _id = i
            }
            if (buycontent[i].length != buycontent[i - 1].length) {
                break
            }
        }
        buycontent[_id].split('x').map((val, idx) => {
            _gameArr.push({
                game: (55 + idx).toString(),
                bet: [val]
            })
        })
    }
    getZh(betString, _gameArr).map(val => {
        buycontent.map((val1, idx) => {
            val == val1 && (_maxMoney += buyOdds[idx])
        })
    })
    return _maxMoney
}

$('input[type=radio][name=radio1]').change(function() {
    if (this.value == '0') {
        $('#site').hide()
        putbuyObj['takeTicketsFlag'] = 1
        putbuyObj['storeId'] = ''
        // console.log(putbuyObj)
    }
    else if (this.value == '1') {
        $('#site').show()
        putbuyObj['takeTicketsFlag'] = 0
        let adcode = sessionStorage.getItem('adcode')
        $.ajax({
            url: '/store/getStoreByAdCode.json',
            type: 'post',
            dataType: 'json',
            data:{adCode: '440100'},
            beforeSend: function (request) {
                let token = window.sessionStorage.getItem("token");
                if (token == undefined || token == null) {
                    mui.confirm('您未登陆，请登陆！', '温馨提示', ['是', '否'], function (e) {
                        if (e.index == 0) {
                            sessionStorage.setItem('savedata', JSON.stringify(getSaveData()));
                            location.href = '../../me/user_login.html';
                        } else {
                            console.log('就是不想登陆，哈哈哈');
                        }
                    })
    
                } else {
                    $("#buy_sure").addClass('disabledTab');
                    request.setRequestHeader("token", token);
                }
            },
            success: function (res) { 
                if(res.code == '00000') {
                   let detail = template('select_site1', {data: res.data})
                    $('#select_site').html(detail)
                } 
            }
        })
    }
});
// 寄存信息保存
$('.deposit .bt_left').on('tap', function(e){
   e.preventDefault();
   if(putbuyObj['takeTicketsFlag'] == 0) {
       let selectId = $("select[name=select_site] option").not(function(){ return !this.selected }).val()
       putbuyObj['storeId'] = selectId
   }else{
       putbuyObj['storeId'] = ''
   }
   putAjax(storageName)
    $('.deposit').hide()
    $('.mask').hide()
})
// 寄存信息取消
$('.deposit .bt_right').on('tap', function(){
    $('.deposit').hide()
    $('.mask').hide()
})

