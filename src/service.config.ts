import { OpaqueToken } from '@angular/core';

export let SERVICE_CONFIG = new OpaqueToken("service.config");

export interface IServiceConfig {
    systemInfoEndpoint: string
}