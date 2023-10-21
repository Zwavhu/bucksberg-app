import {NgModule} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {LoginPageComponent} from "./login-page/login-page.component";

@NgModule({
  imports:[],
  exports:[],
  declarations:[LoginPageComponent],
  providers:[AuthService]
})
export class AuthModule {

}
