type Message = {
    id: string,
    role: "function" | "system" | "user" | "assistant" | "tool" | "data"
    content: string,
}