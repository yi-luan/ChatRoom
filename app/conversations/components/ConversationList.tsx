import useConversation from "@/app/hooks/useConversation";
import { defaultConfig } from "next/dist/server/config-shared"
import { useRouter } from "next/router";
import { useState } from "react"

interface ConversationListProps {
    initialItems : []
}

const ConversationList:React.FC<ConversationListProps> = ({
    initialItems
}) => {
    const [items,setItems] = useState(initialItems);
    const router = useRouter();

    const { conversationId, isOpen } = useConversation();
    
    return (
        <div></div>
    )
}

export default ConversationList;