export default class MinHeap {
  public length: number;
  private data: number[];

  constructor() {
    this.data = [];
    this.length = 0;
  }

  get records(): number[] {
    return this.data;
  }

  insert(value: number): void {
    this.data[this.length] = value;
    this.heapifyUp(this.length);
    this.length++;
  }

  delete(): number {
    if (this.length === 0) return -1;

    const out = this.data[0];
    this.length--;

    if (this.length === 0) {
      this.data = [];
      return out;
    }

    this.data[0] = this.data[this.length];

    // own extra step
    delete this.data[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number): void {
    const lIdx = this.leftChild(idx);
    const rIdx = this.rightChild(idx);

    if (idx >= this.length || lIdx >= this.length) return;

    const lV = this.data[lIdx];
    const rV = this.data[rIdx];
    const v = this.data[idx];

    if (lV > rV && v > rV) {
      this.data[idx] = rV;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    } else if (rV > lV && v > lV) {
      this.data[idx] = lV;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    }
  }

  private heapifyUp(idx: number): void {
    if (idx === 0) return;

    const p = this.parent(idx);
    const parentV = this.data[p];
    const v = this.data[idx];

    if (parentV > v) {
      this.data[p] = v;
      this.data[idx] = parentV;
      this.heapifyUp(p);
    }
  }

  private parent(idx: number): number {
    return Math.floor((idx - 1) / 2);
  }

  public leftChild(idx: number): number {
    return idx * 2 + 1;
  }
  private rightChild(idx: number): number {
    return idx * 2 + 2;
  }
}

export const minHeap = new MinHeap();
minHeap.insert(1);
minHeap.insert(2);
minHeap.insert(3);
minHeap.insert(4);
minHeap.insert(5);
minHeap.insert(6);
minHeap.insert(7);
minHeap.insert(8);
minHeap.insert(9);
minHeap.insert(10);
minHeap.delete();
minHeap.delete();
minHeap.delete();

console.log(minHeap.leftChild(3));

console.log(minHeap.records);
