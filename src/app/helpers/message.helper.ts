import { Injector } from '@angular/core';
import { MessageService } from 'primeng/api';
export class MessageHelper {
    static messageService: MessageService;
    constructor(private injector: Injector) {
        MessageHelper.messageService = this.injector.get(MessageService);
    }

    static success(detail: string, title = 'Success') {
        this.messageService.add({ severity: 'success', summary:title, detail });
    }
}