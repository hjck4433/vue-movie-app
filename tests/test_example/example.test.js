// import { before } from 'lodash'
// import { double } from './example'

// describe('그룹1', () => {
//   beforeAll(() => {
//     console.log('beforeAll!!')
//   })
//   afterAll(() => {
//     console.log('afterAll!!')
//   })

//   beforeEach(() => {
//     console.log('beforeEach!!')
//   })
//   afterEach(() => {
//     console.log('afterEach!!')
//   })

//   test('첫 테스트', () => {
//     console.log('첫 테스트!')
//     expect(123).toBe(123)
//   })
  
//   test('인수가 숫자 데이터입니다', () => {
//     console.log('인수가 숫자 데이터입니다!')
//     expect(double(3)).toBe(6)
//     expect(double(10)).toBe(20)
//   })
  
//   test('인수가 없습니다', () => {
//     console.log('인수가 없습니다!')
//     expect(double()).toBe(0)
//   })
// })

// const userA = {
//   name: 'HEROPY',
//   age: 85
// }

// const userB = {
//   name: 'Neo',
//   age: 22
// }

// test('데이터가 일치해야 합니다', () => {
//   expect(userA.age).toBe(85)
//   expect(userA).toEqual({
//     name: 'HEROPY',
//     age: 85
//   })
// })

// test('데이터가 일치하지 않아야 합니다', () => {
//   expect(userB.name).not.toBe('HEROPY')
//   expect(userA).not.toEqual(userB)
// })

//비동기 테스트

// import { asyncFn } from './example'

// describe('비동기 테스트', () => {
//   test('done', () => {
//     asyncFn().then(res => {
//       expect(res).toBe('Done?')
//     })
//   })
// })

// describe('비동기 테스트', () => {
//   test('done', (done) => {
//     asyncFn().then(res => {
//       expect(res).toBe('Done!')
//       done()
//     })
//   }, 7000)

//   test('then', () => {
//     return asyncFn().then(res => {
//       expect(res).toBe('Done!')
//     })
//   }, 7000)

//   test('resolves', () => expect(asyncFn()).resolves.toBe('Done!'), 7000)

//   test('async/await', async () => { //가장 추천/ test는 설정안하면 최대 5초까지 기다릴 수 있음
//     const res = await asyncFn()
//     expect(res).toBe('Done!')
//   }, 7000)
// })

//모의 테스트

// import * as example from './example'

// describe('비동기 테스트', () => {
//   test('async/await', async () => {
//     jest.spyOn(example, 'asyncFn')
//       .mockResolvedValue('Done!')
//     const res = await example.asyncFn()
//     expect(res).toBe('Done!')
//   }, 7000)
// })


// import axios from 'axios'
// import { fetchMovieTitle } from './example'


// describe('비동기 테스트', () => {
//   test('영화 제목 변환', async () => {
//     const title = await fetchMovieTitle()
//     expect(title).toBe('Frozen ii')
//   })
// })

// describe('비동기 테스트', () => {
//   test('영화 제목 변환', async () => {
//     axios.get = jest.fn(() => {
//       return new Promise(resolve => {
//         resolve({
//           data: {
//             Title: 'Frozen II'
//           }
//         })
//       })
//     })
//     const title = await fetchMovieTitle()
//     expect(title).toBe('Frozen ii')
//   })
// })

// vue test utils

// import { mount }  from '@vue/test-utils'
// import Example from './Example.vue'

// test('메세지를 변경합니다', async () => {
//   const wrapper = mount(Example)
//   //wrapper.vm === this
//   expect(wrapper.vm.msg).toBe('Hello Vue test utils!')
//   //wrapper.vm.msg = 'Hello HEROPY!'
//   await wrapper.setData({
//     msg: 'Hello HEROPY!'
//   })
//   expect(wrapper.vm.msg).toBe('Hello HEROPY!')
//   expect(wrapper.find('div').text()).toBe('Hello HEROPY!')
// })

