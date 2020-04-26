export class Util {
  static getHashTagsOrMentions(
    text: string,
    storage: Map<string, number>,
    mentions = false,
  ): void {
    let match = null;
    let regex = /(?:^|\s)(?:#)([a-zA-Z\d]+)/gm;
    if (mentions) {
      regex = /(?:^|\s)(?:@)([a-zA-Z\d]+)/gm;
    }

    while ((match = regex.exec(text))) {
      if (storage.has(match[1])) {
        storage.set(match[1], storage.get(match[1]) + 1);
      } else {
        storage.set(match[1], 1);
      }
    }
  }

  static getSortedArrayFromMap(
    unsortedMap: Map<string, number>,
  ): string[] {
    const sortedMap = new Map<string, number>(
      [...unsortedMap.entries()].sort((a, b) => b[1] - a[1]),
    );

    return Array.from(sortedMap.keys());
  }
}
