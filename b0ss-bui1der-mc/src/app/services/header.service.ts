import { Injectable } from "@angular/core";

@Injectable()
export class HeaderService {
    public title: string = '';
    public subtitle: string = '';
    public backUrl: string = '';
}