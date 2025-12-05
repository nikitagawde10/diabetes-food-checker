// netlify/functions/food-check.ts
import type { Handler } from "@netlify/functions";
import OpenAI from "openai";
import type { FoodAdvice } from "../../src/types";
import { SYS_PROMPT } from "../../src/systemPrompt";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const handler: Handler = async (event) => {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
      };
    }

    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing request body" }),
      };
    }

    const { foodName } = JSON.parse(event.body) as { foodName?: string };

    if (!foodName || typeof foodName !== "string") {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "foodName (string) is required" }),
      };
    }

    const completion = await client.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      temperature: 0,
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: SYS_PROMPT },
        { role: "user", content: foodName.trim() },
      ],
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Empty response from model",
          raw: completion,
        }),
      };
    }

    let parsed: FoodAdvice;
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Failed to parse JSON from model",
          raw: content,
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(parsed),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    };
  } catch (err: any) {
    console.error("Netlify function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Server error while checking food",
        details: err?.message || "Unknown error",
      }),
    };
  }
};
