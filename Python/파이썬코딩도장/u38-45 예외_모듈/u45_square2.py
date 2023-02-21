base=2

def square(n):
    return base ** n

# 시작점을 지정해둠,module만 실행시키면 아래 코드가 실행되지 않아 출력값도 나오지 않는다.

if __name__ == '__main__':
    print(base)
    print(square(10))

