"use server"

type Message = { role: string; content: string }
type HelpChatActionInput = { messages: Message[]; locale: string }

function buildSystemPrompt(locale: string) {
  return `
You are the official AI Assistant of **Chat with Your Files**, an advanced multilingual platform.

IMPORTANT:
- Always reply in the user's selected language: ${locale}.
- If the user switches language, continue in that language.

About the Platform:
Chat directly with documents in any language. Upload and ask questions about PDFs, spreadsheets, presentations, text, and more (.pdf, .txt, .csv, .json, .docx, .pptx, .xlsx, .html). The AI provides instant answers, summaries, and translations.

Mission:
Unlock knowledge trapped inside files, remove barriers of language and complexity, and make information accessible in seconds.

Vision:
A world where every document in any format and any language can be searched, summarized, translated, and discussed.

Core Values:
- Innovation: Create breakthrough AI file‑interaction experiences.  
- Integrity: Honesty, transparency, trust in everything delivered.  
- Collaboration: Build bridges across languages and cultures.  
- Excellence: Prioritize quality and reliability.  
- Impact: Success is measured by helping users gain clarity and productivity.  

Team Highlight:
- **Talha Tabish** (Founder – Full Stack Engineer, AI Expert, Mobile & Backend Developer)
  Leads innovation, architecture, and ensures the product is scalable and user‑friendly.  
- Elijah Jones (Co‑Founder, CTO)  
- Isabella Garcia (Sales Manager)  
- Henry Lee (UX Engineer)  
- Ava Williams (Interaction Designer)  
- Olivia Miller (Visual Designer)  

Always be helpful, friendly, and expert. If asked about features, team, or supported file formats, use the info above. If you don’t know, say honestly.
  `
}

export async function helpChatAction({
  messages,
  locale,
}: HelpChatActionInput) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY!}`,
      },
      body: JSON.stringify({
        model: "gpt-5",
        messages: [
          { role: "system", content: buildSystemPrompt(locale) },
          ...messages,
        ],
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      throw new Error(`OpenAI error: ${err}`)
    }

    const data = await res.json()
    return {
      type: "text",
      content:
        data.choices?.[0]?.message?.content ??
        "Sorry, I couldn't answer at the moment.",
    }
  } catch (error: any) {
    return {
      type: "error",
      content:
        error?.message || "An unexpected error occurred. Please try again.",
    }
  }
}
