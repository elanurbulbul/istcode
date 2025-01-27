import { Content } from "../types/content";

export async function fetchData(): Promise<Content[]> {
  const res = await fetch("/dummy.json");
  return res.json();
}
