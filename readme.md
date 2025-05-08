# 🛠️ MCP Server (Model Context Protocol)

This project is a simple **Node.js implementation of an MCP (Model Context Protocol) server**. It allows AI assistants—like Claude or other LLMs—to call custom tools (e.g., via `/call`) over HTTP using a standard JSON-based interface.

---

## 🌐 What is MCP?

The **Model Context Protocol** is an open standard for enabling external tools and services to be invoked by AI models. By exposing tools in a predictable format, MCP lets you augment an AI assistant's capabilities with real-world logic and APIs.

**More about MCP:** [https://modelcontextprotocol.io/introduction](https://modelcontextprotocol.io/introduction)

---

## 🚀 Features

- ✅ MCP-compliant `/call` endpoint
- 🔧 Supports pluggable tools
- 📦 Includes an `echo` tool for demonstration
- 🌐 Deployable to Azure App Service or any Node.js hosting platform

---

## 🧰 Tools Implemented

### 🔁 Echo Tool
Repeats back the message it receives.

**Request:**
```json
{
  "tool_name": "echo",
  "input": { "message": "Hello MCP" }
}
