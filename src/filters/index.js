import {formatTimeAll} from  './formatTimeAll';
import {formatNumLength} from  './formatNumLength';
import {ToThousands} from  './ToThousands';
import {NewToThousands} from  './NewToThousands';
import {SelectCheck} from  './SelectCheck';


export default {
	formatTimeAll,//过滤时间，显示年月日时分秒
  formatNumLength,//保留几位有效数字
  ToThousands, // 千分位分割 。
  NewToThousands, // 千分位分割,- 。
  SelectCheck, // select过滤
}