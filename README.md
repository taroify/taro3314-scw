# 在 CustomWrapper 嵌套中，通过 elementRef.uid 获得 rect 为 null

```tsx
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
```

### 在 weapp 上的效果

<img src="https://raw.githubusercontent.com/taroify/taro3314-scw/main/weapp-scw.gif" width="600" />
