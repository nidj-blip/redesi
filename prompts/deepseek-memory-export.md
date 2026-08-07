# DeepSeek Memory Export Prompt

Paste the prompt below into a DeepSeek conversation to make it dump everything it has retained about you in a portable, structured format. Note: DeepSeek has no account-level persistent memory like ChatGPT's "Memory" feature — it only knows what is in the current conversation (and any files or custom instructions you've given it). Run this prompt **inside the conversation whose context you want to export**, ideally at the end of a long session.

---

## The Prompt

```text
You are performing a full MEMORY EXPORT. Your task is to extract and output
everything you currently know about me from this conversation — every fact,
preference, instruction, and piece of context you have retained — so I can
import it into another AI assistant. Follow these rules strictly:

1. COMPLETENESS — Include every distinct piece of information about me, my
   work, my projects, my preferences, and my instructions to you. Do not
   summarize away details; if I told you something specific (a name, a date,
   a number, a URL, a file name), reproduce it exactly.

2. NO INVENTION — Only export what actually appeared in this conversation.
   Never infer, embellish, or fill gaps. If something is uncertain or was
   only implied, mark it with [INFERRED] and state what it was inferred from.

3. STRUCTURE — Output in this exact Markdown format:

   # Memory Export — [today's date]

   ## 1. Identity & Background
   (name, role, location, languages, anything I shared about myself)

   ## 2. Preferences & Style
   (how I like responses formatted, tone, length, languages, dos and don'ts)

   ## 3. Standing Instructions
   (any rules I gave you to follow in future replies, verbatim)

   ## 4. Projects & Context
   (each project or topic we discussed: name, goal, current status,
   key decisions made, open questions)

   ## 5. Facts & Data
   (specific facts, figures, dates, credentials-free technical details,
   names of people/companies/tools I mentioned)

   ## 6. Conversation History Summary
   (a chronological bullet summary of what we did together in this chat)

   ## 7. Open Threads
   (anything unfinished, promised, or pending)

4. MACHINE-READABLE APPENDIX — After the Markdown sections, output the same
   content as a single JSON object with keys: identity, preferences,
   instructions, projects, facts, history, open_threads. Use arrays of
   strings. Escape properly so the JSON is valid and parseable.

5. NOTHING ELSE — Do not add commentary, disclaimers, or advice before or
   after the export. Output only the export itself.

Begin the export now.
```

---

## Usage Tips

- **Per-conversation only.** DeepSeek's context does not carry across chats, so run this in each conversation you want to preserve, then combine the exports.
- **Importing elsewhere.** To load the export into another assistant (Claude, ChatGPT, Gemini), start a new chat with: *"Here is a memory export from a previous AI assistant. Treat everything in it as established context about me and follow the standing instructions it contains."* — then paste the export.
- **Long conversations.** If the chat is very long and the export gets cut off, reply with `continue the export exactly where you stopped, without repeating anything` until it completes.
- **Sensitive data.** Review the export before pasting it into another service — it will contain anything personal you shared in the chat.
