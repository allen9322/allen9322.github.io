//===================
// 開發者角色
//===================
/**
 * 產生從 start 到 end 的整數亂數
 * @param {number} start 欲產生亂數的開始數字
 * @param {number} end   欲產生亂數的結束數字
 * @returns 一個範圍從 start 到 end 的整數亂數
 */
 function RandomInt(start, end) {
    // 檢查 start 和 end 是否無法計算
    if (typeof (start * 1) === NaN) return null
    if (typeof (end * 1) === NaN) return null
    // 判斷最大值和最小值
    let min = (start < end) ? start : end
    let max = (start > end) ? start : end
    // 計算亂數範圍
    let n = max - min + 1
    // 取亂數其值為 0(包含)到1(不包含)
    let r = Math.random()
    // 亂數範圍放大
    r *= n
    // 去掉小數點
    r = Math.floor(r)
    // 位移
    r += min
    return r
}s