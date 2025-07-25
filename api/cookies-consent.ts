import { IncomingMessage, ServerResponse } from 'http';

export default async function handler(req: IncomingMessage & { body?: any }, res: ServerResponse) {
  if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        console.log('Cookie consent:', data);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ message: 'Consent recorded' }));
      } catch (err) {
        res.statusCode = 400;
        res.end(JSON.stringify({ message: 'Invalid JSON' }));
      }
    });
  } else {
    res.statusCode = 405;
    res.end(JSON.stringify({ message: 'Method Not Allowed' }));
  }
} 