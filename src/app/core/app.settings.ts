import { Injectable } from "@angular/core"
import { EndPoint } from "./models/app.settings.model"

@Injectable({
  providedIn: 'root',
})

export class AppSettings {
  public auth = {
    urls: {
      login: EndPoint.urlBase('character/2'),
    }
  }

  public users = {
    urls: {
      getUsers: EndPoint.urlBase('character/'),
    }
  }

  public app = {
    name: 'Nivelics App',
    email: 'nivelicsApp@mail.com'
  }
}
