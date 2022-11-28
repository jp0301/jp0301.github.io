const debug = process.env.NODE_ENV !== 'production';
const repository = 'react-nextjs-deploy';

module.exports = {
  'process.env.BACKEND_URL': !debug ? `/${repository}` : '',
};