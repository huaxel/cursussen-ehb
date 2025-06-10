package Challenge;

import java.util.Arrays;

public class Board {
    private Message[] messages;

    public Board() {
        this.messages = new Message[0];
    }

    public void addMessage(Message... addmessages){
       Message[] newMessages = new Message[messages.length + addmessages.length];
        for (int i = 0; i < messages.length; i++){
            newMessages[i] = messages[i] ;
        }
        for (int i = 0; i < addmessages.length; i++){
            newMessages[i+messages.length] = addmessages[i] ;
        }
        messages = newMessages;
    }
    public void removeMessage(Message message){
        int index = -1;
        for (int i = 0; i < messages.length;i++){
            if (messages[i] == message){
                index = i;
                break;
            }
        }
        if (index != -1){
            Message[] newMessages = new Message[messages.length -1];
            for (int i = 0; i < messages.length; i++){
                if (i < index){
                    messages[i] = newMessages[i];
                }
                if (i > index){
                    messages[i] = newMessages[i-1];
                }
            }
            messages = newMessages;

        }
    }

    @Override
    public String toString() {
        return "Board{" +
                "messages=" + Arrays.toString(messages) +
                '}';
    }
}
