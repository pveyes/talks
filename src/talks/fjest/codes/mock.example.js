const axios = require('axios');
const post = require('../post');

jest.mock('axios');

afterEach(() => {
  axios.mockReset();
  axios.mockClear();
});

test('send correct request', async () => {
  const mockResponse = {
    data: {
      a: 'b',
    }
  };
  axios.mockReturnValue(Promise.resolve(mockResponse))
  const result = await post('/v2/user/editProfile')

  expect(axios).toBeCalledWith(expect.objectContaining({
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json',
    }
  }));

  expect(result).toEqual(mockResponse.data);
});
