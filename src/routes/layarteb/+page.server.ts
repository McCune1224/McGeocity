import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  const access_granted = cookies.get("access_granted") || "false";

  return { access_granted };
};

export const actions = {
  default: async ({ cookies, request }) => {
    const passphrase = "the cake is a lie";
    const form = await request.formData();
    const keyResponse = form.get("key");
    if (keyResponse == passphrase) {
      cookies.set("access_granted", "true", { path: "/" });
      return { success: true };
    }
  },
} satisfies Actions;
