class Account:
    def __init__(self, ano, owner, balance):
          self.ano = ano
          self.owner = owner
          self.__balance = balance
  
    def deposit(self, amount):
        if self.__balance + amount >= 1000000000:
              print('입금할 수 없습니다. 10000만원이상 불가능')
              return
        self.__balance += amount
  
    def withdraw(self, amount):
          if self.__balance-amount < 0:
                print('출금이 불가능합니다. 잔액 부족')
                return
          self.__balance -= amount
  
    def __str__(self):
      return f'계좌번호 : {self.ano}, 소유주: {self.owner}, 잔액:{self.__balance}'