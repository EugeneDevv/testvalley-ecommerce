import { socials } from "@/lib/resources";
import { ChatBubbleIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { MessageCircleIcon } from "lucide-react";

describe("Resources", () => {
  it("should define the socials array", () => {
    expect(socials).toBeDefined();
    expect(Array.isArray(socials)).toBeTruthy();
  });

  it("should contain the correct social platforms", () => {
    const expectedPlatforms = ["Instagram", "Kakao", "Blog"];
    socials.forEach((social, index) => {
      expect(social).toHaveProperty("platform");
      expect(social.platform).toEqual(expectedPlatforms[index]);
    });
  });

  it("should contain the correct hrefs", () => {
    const expectedHrefs = ["#instagram", "#blog", "#blog"];
    socials.forEach((social, index) => {
      expect(social).toHaveProperty("href");
      expect(social.href).toEqual(expectedHrefs[index]);
    });
  });

  it("should contain the correct icons", () => {
    const expectedIcons = [
      InstagramLogoIcon,
      MessageCircleIcon,
      ChatBubbleIcon,
    ];
    socials.forEach((social, index) => {
      expect(social).toHaveProperty("icon");
      expect(social.icon).toEqual(expectedIcons[index]);
    });
  });
});
