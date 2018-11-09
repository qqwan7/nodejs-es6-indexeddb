/**
 * Created by qqwan on 2018/11/8.
 */
import {ColorPoint} from './Point';

const connectedDB = function() {
    let colorP = new ColorPoint(12,34,'white')
    console.log('----------inner:' + colorP.toString() + '---' + colorP.add())
}
export default connectedDB()