import produce from 'immer'

const originalState = [
  {
    id: 1,
    todo: '전개 연산자와 배열 내장 함수로 불변성 유지하기',
    chekced: true,
  },
  {
    id: 2,
    todo: 'immer로 불변성 유지하기',
    chekced: false,
  },
]

const nextState = produce(originalState, draft => {
  // 데이터 업데이트
  const todo = draft.find(t => t.id === 2)
  todo.chekced = true

  // 새로운 데이터 추가
  draft.push({
    id: 3,
    todo: '일정 관리 앱에 immer 적용하기',
    chekced: false,
  })

  draft.splice(
    draft.findIndex(t => t.id === 1),
    1
  )
})

nextState(originalState)
