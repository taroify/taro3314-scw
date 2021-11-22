import {CustomWrapper, Text, View} from '@tarojs/components'
import {createSelectorQuery, useReady} from "@tarojs/taro";
import {TaroElement} from "@tarojs/runtime";
import {useRef} from "react";

export default function Index() {
  const rootRef = useRef<TaroElement>()
  const nowrapRef = useRef<TaroElement>()

  useReady(() => {
    console.log("rootRef", rootRef.current)
    createSelectorQuery()
      .select(`#${rootRef.current?.uid}`)
      .boundingClientRect(rect => console.log("rootRef", rect))
      .exec()
  })

  useReady(() => {
    console.log("nowrapRef", nowrapRef.current)
    createSelectorQuery()
      .select(`#${nowrapRef.current?.uid}`)
      .boundingClientRect(rect => console.log("nowrapRef", rect))
      .exec()
  })

  return (
    <>
      <CustomWrapper>
        <View ref={rootRef}>
          <Text>Wrap</Text>
        </View>
      </CustomWrapper>
      <View ref={nowrapRef}>
        <Text>Nowrap</Text>
      </View>
    </>
  )
}
