class Person:
    def __init__(self,name, age, addr):
        self.name = name
        self.age = age
        self.addr = addr
    
    def greeting(self):
        print(f'안녕하세요? 저는 {self.name}입니다.') 
        