import { environment } from '../../environments/environment';

export const API_DOMAIN = environment.API_DOMAIN;

export const urls = {
  login: `${API_DOMAIN}/sign-in`,
  matches: `${API_DOMAIN}/matches`,
};
