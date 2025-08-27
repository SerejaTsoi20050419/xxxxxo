export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const shortened = text.substr(0, maxLength);
  return shortened.substr(0, shortened.lastIndexOf(" ")) + "...";
}