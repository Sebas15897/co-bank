import { environment } from 'src/environments/environment.prod';

export class EndPoint {
  static url(resource: string) {
    return environment.url + resource;
  }

  static urlBase(resource: string) {
    return environment.base_url + resource;
  }

  static isProduction(): boolean {
    return environment.production;
  }
}
