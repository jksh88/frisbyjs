import fetch from 'node-fetch';

let getGoogle = async () => {
  try {
    const res = await fetch('https://wwww.google.com');
    const { statusCode } = res;
    return statusCode;
  } catch (e) {
    // console.log(e);
  }
};
getGoogle();
