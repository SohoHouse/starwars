import createStore from '@/store'

export default () => {
  const vuexStore = createStore()


  const _commit = vuexStore.commit
  vuexStore.commit = jest.fn()
  vuexStore._commit = _commit

  const _dispatch = vuexStore.dispatch
  vuexStore.dispatch = jest.fn()
  vuexStore._dispatch = _dispatch

  return vuexStore
}
