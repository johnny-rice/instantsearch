// typed as any, since it accepts the _real_ js clients, not the interface we otherwise expect
export function getAppIdAndApiKey(searchClient: any): [string, string] {
  if (searchClient.transporter) {
    // searchClient v4 or v5
    const transporter = searchClient.transporter;
    const headers = transporter.headers || transporter.baseHeaders;
    const queryParameters =
      transporter.queryParameters || transporter.baseQueryParameters;
    const APP_ID = 'x-algolia-application-id';
    const API_KEY = 'x-algolia-api-key';
    const appId = headers[APP_ID] || queryParameters[APP_ID];
    const apiKey = headers[API_KEY] || queryParameters[API_KEY];
    return [appId, apiKey];
  } else {
    // searchClient v3
    return [searchClient.applicationID, searchClient.apiKey];
  }
}
