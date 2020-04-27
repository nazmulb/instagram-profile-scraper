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

  static getSortedArrayFromMap(unsortedMap: Map<string, number>): string[] {
    const sortedMap = Util.getSortedMap(unsortedMap);
    return Util.getArrayFromMap(sortedMap);
  }

  static getSortedMap(unsortedMap: Map<string, number>): Map<string, number> {
    return new Map<string, number>(
      [...unsortedMap.entries()].sort((a, b) => b[1] - a[1]),
    );
  }

  static getArrayFromMap(map: Map<string, number>): string[] {
    return Array.from(map.keys());
  }
}
