const axios = require('axios');
const fns = require('./functions');

describe('JESTER FUNCTIONS', () => {

  // test('getSums gives [2, 4, 5, 7]', () => {
  //   expect.assertions(1);
  //   const sums = fns.getSums();
  //   expect(sums).toEqual([2, 4, 5, 7]);
  // });

  // test('getProducts gets correct values for first product', async () => {
  test('getProducts gets correct values for first product', () => {
    expect.assertions(2);

    // const prods = await fns.getProducts();
    // expect(prods[0].id).toEqual('jvmquxr');
    // expect(+prods[0].price).toEqual(45);
    const url = 'https://practiceapi.devmountain.com/products'
    return fns.getProducts(url).then(prods => {
      expect(prods[0].id).toEqual('jvmquxr');
      expect(+prods[0].price).toEqual(45);
    });

    // return expect(fns.getProducts()).resolves.toBe('jvmquxr');
  });

  test("clockin time is correct", () => {
    expect.assertions(1);
    // console.log('first console log');
    // const url = 'http://localhost:3001/api/user'
    return axios.get('http://localhost:3001/api/user').then(response => {
      // console.log('CAN YOU SEE ME?', response);
      expect(response.data[0].email).toEqual("kangeb1992@gmail.com");
      // expect(response[0].id).toEqual("jvmquxr");
    })
    // expect(fns.getEmpTimeCard(url).then(response => {
    //     console.log('test response', response);
    //     return response
    // })).toEqual("11/29 14:40")
    // expect('things').toEqual("things");
    // expect(test[0].clock_in).toEqual("11/29 14:40");
  })
});