
export class WeblistViewModel {
  private bookmarks: string[];
  private origin: string[];

  remove(bookmark: string): void {
    const index = this.bookmarks.indexOf(bookmark);
    if (index >= 0) {
      this.bookmarks.splice(index, 1);
    }
  }
  setBookmarks(bookmarks: string[]): void {
    this.origin = bookmarks;
    this.bookmarks = bookmarks;
  }

}

