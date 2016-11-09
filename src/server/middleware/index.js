import * as req from './req';
import * as auth from './auth';
import * as headers from './headers';
import * as bearer from './bearer';

export default {
  ...req,
  ...auth,
  ...headers,
  ...bearer
}
