import { Component, OnInit, Input } from '@angular/core';
import { SystemInfoService } from './providers/system-info.service';

@Component({
  selector: 'hbr-system',
  template: `
    <pre>
      {{info}}
    </pre>
  `,
  styles: [],
  providers: [SystemInfoService]
})

export class SystemComponent implements OnInit {
  _url: string = "";
  _systemInfo: string = "Loading...";
  _initialized: boolean = false; //Load data only once

  @Input("hbrSystemEndpoint")
  set infoEndpoint(value: string) {
    if (value && value.trim()) {
      this._url = value;
      this.getInfo();
    }
    console.info("set", value, this._url);
  }

  constructor(private systemService: SystemInfoService) { }

  public get info(): string {
    return this._systemInfo;
  }

  ngOnInit() {
  }

  getInfo(): void {
    this.systemService.getSystemInfo(this._url).then((res: any) => this._systemInfo = JSON.stringify(res));
    console.info("called");
  }

}
