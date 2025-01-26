export interface ChatMessage {
 text: string;
 sender: string;
 timeSend: Date;
 isAnswer?: boolean;
 imgUrl?: string;
}
 