import { defineTool } from "@lovable.dev/mcp-js";
import { company } from "../catalog";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description: "Get EcoShield's phone, WhatsApp, email, office address, hours and service areas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(company) }],
    structuredContent: { ...company, serviceAreas: [...company.serviceAreas] },
  }),
});
