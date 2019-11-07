module.exports = {
  // port: 8002,
  port: 7021,

  wxConfig: {
    // AppID: 'wx5910ab0a942c1030',
    // AppSecret: 'ecaac754f1048f693b0b9e05c8c15d10',
    Token: 'zhangyachang', // 自行配置的token

    // // 测试号申请 获得更多权限
    AppID: 'wx5910ab0a942c1030',
    AppSecret: 'ecaac754f1048f693b0b9e05c8c15d10',
    // 测试号申请的id

    access_token: '', // 凭证票据
    jsapi_ticket: '', // jsapi_ticket是公众号用于调用微信JS接口的临时票据
    api_ticket: '', // 微信卡券 api_ticket 是用于调用微信卡券JS API的临时票据
    time: 7000, // 7000秒刷新一次token
  },


  zfbConfig: {
    app_id: '2019081566247460',


    // 支付宝的私钥
    /*
    MIIEpQIBAAKCAQEAkADCCsitGnMPDDMyfQpJVeMH1kfyi1ekz7CIEGO308L1nuoH+ucutVIJ9gJJqmlP6HgeN5kdhgciWzr7PaF87C9pwPUZ30X8uoIHn7pX0NsD+Ek8Lx1xHVFiZB3FfnInNsg97db7o1xiFF5psI8sbsx8f0qytMJib91/2i1m+zCbtewOdoPO4K+9mvwOTS1ncW7NesaMm9zpAqlLv5+CTJDqmLcjBZDX44LanTQDZ544NUSizEND8P4xcG+a9y+ytBuLt4vEXGB5RXHvouyyrAAHls234QtCtI2zP38WESWRJOjvRgEf3AivZm4yJKNidSjv33kS9iIYbcf34ae9JQIDAQABAoIBAFfVfoXhXWRypc0FNVh7e7u9XLxg6hn//XEI9hU5HZk2o2aozPFHLYA/Z//76T7eOXVMPvIenJlxpI0M7s3qwC23xcOCPKOpJrwEL+5HVOT5kfRRhzodtS7ywxbZ6ep0amLJxKxbouVDpjdSVxjwW2PBqnZh85q5rh0Zd7B2XQf89di3XKZ577VjaCokFdtRZsazMf/D8uXbQouHGRBc/8ypQWik8gByfUm/KsUq7ujrg/gk/AYcuD7aACocStmkQY8r3SHMV9Hg9gon4LSNkC7YIFivLPgVYtHjDUbevIcPHJB0rDO20sM665/kRpe9SMHvaRl5E5IzoPqbwI7b3AECgYEAw6j2mBlMg9s1/BIuoceLIgOJUmXvz+YrJv4qFHNx8qEZ+UsWe7IO+weOtVMlVYbvbBQQ1YLGZFjLKHomCZsuFcOG8kftI436Lw9zyo8OD+6DMQcIyjjT3BAMomUFOFM2U75MzPPKARpM7np4q62v4cjdKRgG5+VhKo8I3vMXAoECgYEAvGmOJ4rwHbJx5QDnjYuybAHfBVqbKVASdUpoNV3xVd40Vr7tf9rWPuSBub+Z6wNDNu19MUmV4sLMW2IHMFzEiQbH7uU0FAC+fRDMQ4Hnfo3WtN7Z1XD4yb7JpKYxPzBhFSjqxeGIrjWtKNFRgvR/yf4ttW5TE2MxcViWX0wDIKUCgYEAu9sfH/uyTisLUwD2Ctg2iqrQju9WZ8q7Bc4kAsywy97HvGXOqWbVIUopR4kUIGDUwXUmkIjmCHSEYlGc8b4vai/4AejzEx7+5W41o3bkboF3LnxtgRM8vl4ec1EAyQqD77WXsXQkMBjbYmDuOQ8i/mpHhWwPPVkriJwaTU0ie4ECgYEAuCGwe5Sc9WjfRh6MLRjJViS+AE18NfO7FkWRchZNNM3j+KK/GKSVnQFUhmNp2PNnTNbr8q8nfGVDsksrG2iN6hxmaGI3cxUHFNLFzXO2+UdE/Z6M5LtzaDa8edyxZD+zoSpLxveSzC5I/AsUzhaEjLOLmDQpnFjkiRE6ZAe1RsECgYEAua1eP3OSyy8Y4oXDCVS4qU5VpBQLx5m9AJTs5OwWKsHjax3h8SMlGxhGqsuKdVVf5SQ8DMet/vcsl1oVaJGlyZLRtrHJt1ich9YHd5mIu3IMyE/0kTo81NMJywvBFnyPKHrenJ5UqFLxPv5IpjNWOpw9Xm/+9oYlaruhP6rZtUo=
    */

    // 支付宝的公钥
    /*
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkADCCsitGnMPDDMyfQpJVeMH1kfyi1ekz7CIEGO308L1nuoH+ucutVIJ9gJJqmlP6HgeN5kdhgciWzr7PaF87C9pwPUZ30X8uoIHn7pX0NsD+Ek8Lx1xHVFiZB3FfnInNsg97db7o1xiFF5psI8sbsx8f0qytMJib91/2i1m+zCbtewOdoPO4K+9mvwOTS1ncW7NesaMm9zpAqlLv5+CTJDqmLcjBZDX44LanTQDZ544NUSizEND8P4xcG+a9y+ytBuLt4vEXGB5RXHvouyyrAAHls234QtCtI2zP38WESWRJOjvRgEf3AivZm4yJKNidSjv33kS9iIYbcf34ae9JQIDAQAB
    */


  }
};
