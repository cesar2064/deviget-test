export const environment = {
  production: true,
  api: {
    reddit: {
      mainUrl: 'https://www.reddit.com',
      get top() {
        return `${environment.api.reddit.mainUrl}/top.json`
      }
    }
  }
};
