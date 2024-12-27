import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ route }) => {
  const url = route.id;
  return {
    props: {
      url,
    },
  };
};
