import Parser from 'rss-parser';

/* This lambda function receives the feed url from the app, fetches
   and parses it using rss-parser and then returns the result. */
export const handler = async (event, context) => {
  const parser = new Parser();
  try {
    const url = JSON.parse(event.body);
    const feed = await parser.parseURL(url);
    return { statusCode: 200, body: JSON.stringify(feed) };
  } catch (error) {
    return { statusCode: 400, body: JSON.stringify(error) };
  }
};
