var mydomain = "https://login.windows.net" + "mydomain"; //replace with LM domain

var adalConfig = {
  tenant: 'common',
  clientId: '00000000-0000-0000-0000-000000000000', //TODO: Replace with properly
                                                    //generated cleint GUID
  extraQueryParameter: 'nux=1',
  disableRenewal: true,
  endpoints: {
    mydomain : mydomain
  }
  // cacheLocation: 'localStorage', // enable this for IE, as sessionStorage does not work for localhost.
};

module.exports = adalConfig;
