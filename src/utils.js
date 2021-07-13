export function formatTime(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


export function clamp(min, max, value) {
    if (value < min) {
        return min;
    }

    if (value > max) {
        return max;
    }

    return value;
}

// function bubbleSort(arr) {
//     console.log(arr);

//     arr = [...arr];


//     for (let i = 0; i < arr.length - 1; i++) {

//         let flag = false;
//         for (let j = 1; j < arr.length - i; j++) {
//             if (arr[j] < arr[j - 1]) {
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//                 flag = true;
//             }
//             if (!flag) {
//                 break;
//             }

//         }

//         return arr;

//     }


// }

// function slf(arr) {
//     arr = [...arr];

//     let len = arr.length - 1;

//     while (len > 0) {

//         let i = Math.floor(Math.random() * (len + 1));

//         if (i != len) {
//             [arr[i], arr[len]] = [arr[len], arr[i]];
//         }

//         len--;

//     }

//     return arr;


// }