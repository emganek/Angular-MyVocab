import { MessageService } from 'primeng/api';
import { AppInjector } from './app-injector.helper';
export class MessageHelper {
    static success(detail: string, title = 'Success') {
        const messageService = AppInjector.getService<MessageService>(MessageService);
        messageService.add({ severity: 'success', summary:title, detail });
    }
}   
