import { useState } from 'react'

type useMultipleCheckedRet<T> = {
  checked: T[]
  toggleChecked: (tgt: T) => void
  allCheck: () => void
  clearCheck: () => void
}
/**
 * 複数チェックの管理用フック
 */
export function useMultipleChecked<T>(canCheckItems: T[], initVal?: T[]): useMultipleCheckedRet<T> {
  // チェック済み管理用状態
  const [checked, setChecked] = useState<T[]>(initVal || [])
  // チェックボックスをクリックした時等のチェック済み、未チェックの入れ替え
  const toggleChecked = (tgt: T) => {
    if (checked.includes(tgt)) {
      setChecked([...checked.filter((item) => item !== tgt)])
    } else {
      setChecked([...checked.concat([tgt])])
    }
  }

  // 全てチェック
  const allCheck = () => setChecked(canCheckItems)
  // 全てのチェックを解除
  const clearCheck = () => setChecked([])

  // 必要な情報と関数のみ外へ
  return {
    checked,
    toggleChecked,
    allCheck,
    clearCheck
  }
}
