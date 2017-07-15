import {Component} from "@angular/core";
import {SettingsComponent} from "../_abstract/abstract.settings.component";
import {AuthenticationService} from "../../model/network/authentication.service";
import {NavigationService} from "../../model/navigation.service";
import {NotificationService} from "../../model/notification.service";
import {OtherSettingsService} from "./other.settings.service";
import {OtherConfigDTO} from "../../../../common/entities/settings/OtherConfigDTO";

@Component({
  selector: 'settings-other',
  templateUrl: './other.settings.component.html',
  styleUrls: ['./other.settings.component.css',
    './../_abstract/abstract.settings.component.css'],
  providers: [OtherSettingsService],
})
export class OtherSettingsComponent extends SettingsComponent<OtherConfigDTO> {

  constructor(_authService: AuthenticationService,
              _navigation: NavigationService,
              _settingsService: OtherSettingsService,
              notification: NotificationService) {
    super("Other", _authService, _navigation, _settingsService, notification);
  }


  public async save(): Promise<boolean> {
    const val = await super.save();
    if (val == true) {

      this.notification.info('Restart the server to apply the new settings', "Info");
    }
    return val;
  }
}



