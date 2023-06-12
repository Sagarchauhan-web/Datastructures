class Array: 
    def __init__(self):
        self.length = 0;
        self.data = {};
    
    def get(self, index):
        return self.data[index];

    def push(self, item):
        self.data[self.length] = item;
        self.length += 1;
        return item;

    def pop(self):
        lastItem = self.data[self.length - 1];
        del self.data[self.length - 1];
        self.length -= 1;
        return lastItem;

    def delete(self, index):
        deletedItem = self.data[index];
        self.shiftItems(index)
        self.length -= 1;
        return deletedItem;

    def shiftItems(self, index):
        for i in range(index, self.length - 1):
            self.data[i] = self.data[i + 1];  
        del self.data[self.length - 1];
        
    
    def getData(self):
        return self.data;

myArr = Array();
myArr.push('foo')
myArr.push('foo2')
myArr.push('foo3')
myArr.push('foo4')
myArr.push('foo5')
myArr.push('foo6')
myArr.delete(1)
print(myArr.getData())