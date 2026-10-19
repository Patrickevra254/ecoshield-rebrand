import { defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "ecoshield-rebrand",
  title: "EcoShield Rebrand",
  version: "0.1.0",
  instructions:
    "Public information about EcoShield, a Nigerian eco-friendly cleaning and pest-control company. Use `list_services` for offerings and `get_contact_info` for booking details.",
  tools: [listServices, getContactInfo],
});
