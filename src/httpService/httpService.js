// import axios from 'axios';

// // const isUnauthorized = (res) => {
// //   return res.toJSON().status === 401;
// // };

// // const serializeHeaders = (headers) => {
// //   const serializedHeaders = Object.entries(headers).reduce((acc, [key, val]) => {
// //     acc[key] = typeof val === 'function' ? val() : val;
// //     return acc;
// //   }, {});
// //   return serializedHeaders;
// // };

// const makeCall = async (method, options) => {
//   const { headers, ...otherOptions } = options;
//   try {
//     const {
//       status,
//       data,
//     } = await axios({
//       method,
//       headers,
//       ...otherOptions,
//     });
//     return { success: status >= 200 && status <= 399, data };
//   } catch (error) {
//     return { success: false, error };
//   }
// };

// const httpService = {
//   get: (url, options) => {
//     return makeCall('GET', {
//       url,
//       ...options,
//     });
//   },
// //   post: (url, options) => {
// //     return makeCall('POST', {
// //       url,
// //       ...options,
// //     });
// //   },
// //   put: (url, options) => {
// //     return makeCall('PUT', {
// //       url,
// //       ...options,
// //     });
// //   },
// //   patch: (url, options) => {
// //     return makeCall('PATCH', {
// //       url,
// //       ...options,
// //     });
// //   },
// //   delete: (url, options) => {
// //     return makeCall('DELETE', {
// //       url,
// //       ...options,
// //     });
// //   },
// };

// export { httpService };
