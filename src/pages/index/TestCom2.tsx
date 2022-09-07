import Taro, { useEffect, useScope } from '@tarojs/taro';
import {View} from '@tarojs/components';
import { useDispatch } from '@tarojs/redux'

const TestCom: Taro.FC<any> = () => {
  const scope = useScope();
  // 组件中使用了诸如 useDispatch useSelector 等redux api 之后，小程序Page 无法卸载
  // 具体可以看 log 下的 PageSet ComSet
  // 注释下一行之后，组件及页面均可以正常卸载
  const dispatch = useDispatch();
  console.info(dispatch);
  useEffect(()=>{
    global.ComSet.add(scope);
  }, [])
  return (
    <View>使用了redux hooks api 的组件</View>
  )
}

// export default Taro.memo(TestCom);
export default TestCom;
