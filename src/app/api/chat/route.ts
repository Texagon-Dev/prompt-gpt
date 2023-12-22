import { NextResponse, NextRequest } from "next/server";
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { OpenAI } from "openai"

const openaiEndpoint = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});
/**
 * @param messages : Array of messages
 * @returns StreamingTextResponse
 */
const getResponse = async (messages: any) => {
    const response = await openaiEndpoint.chat.completions.create({
        model: "gpt-4-1106-preview",
        messages,
        //max_tokens: 500,
        temperature: 0.5,
        stream: true,
    });

    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
}

export async function POST(request: Request) {
    const { messages } = await request.json();
    if (!messages) {
        return NextResponse.json({ message: "error" }, { status: 400 });
    }
    const stream = await getResponse(messages);
    return stream 
}