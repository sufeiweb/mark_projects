// 方法一
export const applyStatus = (val) => {
  switch (val) {
    case '1':
    case 1:
      return '待处理';
    case '2':
    case 2:
      return '已接受';
    case '3':
    case 3:
      return '已拒绝';
      default:
      return "未知"
  }
}