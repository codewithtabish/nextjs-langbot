"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, Send, User, Bot } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { helpChatAction } from "@/actions/chat-action"

// === RTL Locales ===
const RTL_LOCALES = ["ur", "ar", "fa", "he"]
function isRtlLocale(locale: string) {
  return RTL_LOCALES.includes(locale)
}

// === Localized strings ===
const STRINGS: Record<
  string,
  { placeholder: string; empty: string }
> = {
  en: {
    placeholder: "What would you like to know?",
    empty: "Start a conversation with our AI assistant!",
  },
  ur: {
    placeholder: "آپ کیا جاننا چاہیں گے؟",
    empty: "ہمارے AI اسسٹنٹ سے بات چیت شروع کریں!",
  },
  ar: {
    placeholder: "ماذا تريد أن تعرف؟",
    empty: "ابدأ محادثة مع مساعدنا الذكي!",
  },
  hi: {
    placeholder: "आप क्या जानना चाहेंगे?",
    empty: "हमारे AI सहायक से बातचीत शुरू करें!",
  },
  es: {
    placeholder: "¿Qué te gustaría saber?",
    empty: "¡Comienza una conversación con nuestro asistente de IA!",
  },
  fr: {
    placeholder: "Que voulez-vous savoir ?",
    empty: "Démarrez une conversation avec notre assistant IA !",
  },
  de: {
    placeholder: "Was möchten Sie wissen?",
    empty: "Beginnen Sie ein Gespräch mit unserem KI-Assistenten!",
  },
  zh: {
    placeholder: "您想了解什么？",
    empty: "与我们的 AI 助手开始对话！",
  },
  ja: {
    placeholder: "何を知りたいですか？",
    empty: "AI アシスタントとの会話を始めましょう！",
  },
  pt: {
    placeholder: "O que você gostaria de saber?",
    empty: "Inicie uma conversa com nosso assistente de IA!",
  },
  ru: {
    placeholder: "Что вы хотели бы узнать?",
    empty: "Начните разговор с нашим AI-ассистентом!",
  },
  ko: {
    placeholder: "무엇을 알고 싶으신가요?",
    empty: "AI 어시스턴트와 대화를 시작하세요!",
  },
}

type ChatRole = "user" | "assistant"

interface ChatMessage {
  role: ChatRole
  content: string
}

export default function HelpChatComp({ locale = "en" }: { locale: string }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const isRTL = isRtlLocale(locale)
  const strings =
    STRINGS[locale] || STRINGS["en"]

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }, 100)
    }
  }, [messages, open])

  const sendMessage = async () => {
    if (!input.trim() || loading) return
    setError(null)

    const newMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: input },
    ]
    setMessages(newMessages)
    setInput("")
    setLoading(true)

    try {
      const reply = await helpChatAction({ messages: newMessages, locale })
      setMessages([
        ...newMessages,
        { role: "assistant", content: reply.content },
      ])
    } catch (err) {
      const fallback = "Sorry, something went wrong. Please try again."
      setError(fallback)
      setMessages([
        ...newMessages,
        { role: "assistant", content: fallback },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    sendMessage()
  }

  return (
    <>
      {/* Floating Chat Button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-4 shadow-lg transition-all flex items-center justify-center"
        onClick={() => setOpen(true)}
        aria-label="Open Help Chat"
        type="button"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full p-0 rounded-xl overflow-hidden">
          {/* Header */}
          <DialogHeader className="p-4 border-b bg-background">
            <DialogTitle>
              <span className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Chat with Your Files – AI Assistant
              </span>
            </DialogTitle>
          </DialogHeader>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto px-3 py-3 bg-background">
            {messages.length === 0 && (
              <div className="text-muted-foreground text-center mt-10">
                {strings.empty}
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 flex items-end ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="mr-2 flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full p-1">
                      <Bot className="w-5 h-5" />
                    </div>
                  </div>
                )}
                <div
                  className={`rounded-lg px-3 py-2 max-w-[80%] break-words overflow-x-auto ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground border border-border"
                  }`}
                  style={{ wordBreak: "break-word" }}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="ml-2 flex-shrink-0">
                    <div className="bg-primary text-primary-foreground rounded-full p-1">
                      <User className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="mb-2 flex items-end justify-start">
                <div className="mr-2 flex-shrink-0">
                  <div className="bg-primary text-primary-foreground rounded-full p-1">
                    <Bot className="w-5 h-5" />
                  </div>
                </div>
                <div className="rounded-lg px-3 py-2 bg-muted text-muted-foreground border border-border">
                  AI is typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <div className="px-4 py-2 text-sm text-destructive bg-destructive/10 border-t border-destructive/20">
              {error}
            </div>
          )}

          {/* Input */}
          <form
            className="flex items-center gap-2 p-4 border-t bg-background"
            onSubmit={handleSubmit}
          >
            <textarea
              className="flex-1 resize-none rounded-lg bg-muted text-foreground placeholder-muted-foreground px-4 py-3 min-h-[48px] max-h-32 outline-none focus:ring-2 focus:ring-primary"
              dir={isRTL ? "rtl" : "ltr"}
              placeholder={strings.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              disabled={loading}
              style={{ fontSize: "1rem", textAlign: isRTL ? "right" : "left" }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault()
                  sendMessage()
                }
              }}
            />
            <Button
              type="submit"
              className="rounded-xl p-2"
              disabled={loading || !input.trim()}
              size="icon"
            >
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
