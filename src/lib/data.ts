import { BANNERS, COLLECTION, SHORTCUTS, filters } from "./api-routes";

export const getBanners = async () => {
  const response = await fetch(BANNERS);
  const data = await response.json();

  return data;
};

export const getCategories = async (single?: boolean) => {
  let response;
  if (single) {
    response = await fetch(COLLECTION + filters);
  } else {
    response = await fetch(COLLECTION);
  }
  const data = await response.json();

  return data;
};

export const getShortcuts = async () => {
  const response = await fetch(SHORTCUTS);
  const data = await response.json();

  return data;
};
