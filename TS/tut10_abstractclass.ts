abstract class TakePhoto {
  constructor(public photoMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public photoMode: string,
    public filter: string,
    public burst: number
  ) {
    super(photoMode, filter);
  }

  getSepia() {
    console.log("sepia");
  }
}

const hitesh = new Instagram("test", "test", 4);
hitesh.getReelTime();
