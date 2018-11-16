class rectangle :
    def __init__(self,length,breadth):
        self.length=length
        self.breadth=breadth
    def area(self):
        return self.length*self.breadth
    def cal_p(self):
        return 2*(self.length+self.breadth)


rec =rectangle(6,7)
print(rec.length)
print(rec.area())
print(rec.cal_p())