module.exports = async (req, res) => {

    if (req.method === 'OPTIONS') {
      // 处理预检请求
      res.status(200).send();
    } else {
      // 处理正常请求
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET');
      
      const url = 'https://rpc.itn-1.nibiru.fi' + req.url;
      
      const apiResponse = await fetch(url);
      const text = await apiResponse.text();
      
      res.status(200).send(text);
    }
  }
  