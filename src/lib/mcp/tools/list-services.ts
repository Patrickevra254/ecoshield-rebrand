import { defineTool } from "@lovable.dev/mcp-js";
import { catalog } from "../catalog";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List all EcoShield cleaning and pest-control services with summaries.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: catalog.map((s) => `${s.title}: ${s.summary}`).join("\n") }],
    structuredContent: { services: catalog.map((s) => ({ ...s, industries: [...s.industries] })) },
  }),
});
