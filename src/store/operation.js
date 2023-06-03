import { atom } from 'nanostores'

const initialValue = {
  result: 0,
  showingValue: '0',
  stringOp: '0',
}
const operation = atom(initialValue)

export default operation

function deleteAll() {
  operation.set({ result: 0, showingValue: '0', stringOp: '0' })
}
function evaluateExpression() {
  operation.set({ result: parseFloat(operation.value.stringOp) })
  operation.set({ showingValue: operation.value.result })
}
function enteredValue(newVal) {
  operation.set({ showingValue: newVal, stringOp: operation.get().stringOp.concat(newVal) })
}
export { deleteAll, evaluateExpression, enteredValue }
