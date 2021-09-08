# Python

___

## List (리스트)

1. Collection

* 하나의 변수에 여러 값을 넣는 것이 가능 

  * 변수(variable)은 collection이 아님! 한번에 하나의 변수

  

2. List Constans (리스트 상수)

   1. [square brackets] 로 둘러싸여 있고 리스트의 원소(variable)는 반점(, comma)로 구분
   2. 파이썬의 어떠한 객체도 원소로 넣을 수 있음 👉*[리스트 [안에 리스트 가능]]*
   3. empty list [ ] 생성가능 
   4. 리스트의 항목들에 인덱스 값으로 접근 가능 
   5. 리스트의 항목들은 변경 가능

   ```python
   colors = ['red', ['yellow','blue'], 'black']
   print(colors[1])
   # yellow, blue라고 출력됨 
   
   emptyList=[]
   
   colors[2]='white'
   print(colors)
   # ['red', ['yellow','blue'], 'white']
   ```



3. len( ) : 리스트가 몇개의 항목을 가지고 있는지를 *len( )* 을 통해서 확인 

   ```python
   friedns=['Joseph','Glenn', 'Sally']
   print(len(friends))
   
   # 3
   ```

   

4. range( ) : 인자로 전달된 값에 따라서 *숫자로 이루어진 리스트* 를 반환

   ```python
   for i in range(5):
     print(i)
     
   # 0
   # 1
   # 2
   # 3
   # 4
   ```



5. enumerate( ) : 인덱스와 요소를 함께 출력 할 때 사용 

   * for 인덱스, 요소 in enumerate(리스트):
   * index를 1로 시작하고 싶을 때는 "for 인덱스, 요소 in *enumerate(리스트, start=1)*"

   ```python
   # 
   a=[1,2,3,4,5]
   for index, value in enumerate(a):
     print(index,value)
     
   # 0 1
   # 1 2
   # 2 3
   # 3 4
   # 4 5
   ```

   

#### 연산자 활용

1. Concatenating lists using + (리스트 병합)

   * 서로 다른 리스트를 더할 수 있음 

   ```python
   a= [1,2,3]
   b= [4,5,6]
   c= a+b
   print(c)
   
   #[1,2,3,4,5,6]
   
   ```

   

2. List Slicing (리스트 슬라이싱)

   * *:(콜론)*을 이용해 리스트를 자를 수 있음 
   * t[1:3]의 경우 3번째 인덱스는 포함하지 않는다 (up to but not included)

   ```python
   t[9, 41,12,3,74,15]
   
   t[1:3]
   #[41,12]
   
   t[:]
   # [9,41,12,3,74,15]
   ```

   

3. dir( ) 메소드

   * 특정 타입에서 사용할 수 있는 메소드의 목록

   * append, count, extend, index,remove, reverse, sort, pop 등의 함수

     

4. 리스트에는 내장함수를 포함하고 있다 

   

5. 리스트 만들기

   1. 빈 리스트 만들기
   2. 항목 추가하기
   3. 항목 정렬하기

   ```python
   # 내장함수 사용
   numlist= []
   while True: 
     value = float(input('Enter a number: '))
     if inp == 'done':
       break
     numlist.append(value)
     
   average = sum(numlist)/len(numlist)
   print('Average', average)
       
   ```



#### 문자열과 리스트

1. Split( )

   ```python
   abc= 'With three words'
   stuff = abc.split()		# 공백을 기준으로 split
   print(stuff)
   
   # ['With', 'three', 'words']
   ```

   

2. 구분자

   * 명시적으로 구분자를 넣어주지 않으면, 빈칸을 구분자로 인지하고 나누게됨 
   * 구분자 = split('; , . 등등 ')

   ```python
   words2 = 'first;second;third'
   stuff2= words2.split(';')
   print(stuff2)
   
   #['first', 'second', 'third']
   ```



#### List Comprehension (리스트 표현식)

* [식 for 변수 in 리스트]
* list(식 for 변수 in 리스트)

```python
a= [i for i in range(10)]
a

# [0,1,2,3,4,5,6,7,8,9]

b= list(i for i in range(10))
# [0,1,2,3,4,5,6,7,8,9]
```

* [식 for 변수 in 리스트 if 조건식]
* list(식 for 변수 in 리스트 if 조건식)

```python
a= [i for i in range(10) if %2 ==0]
a

# [0,2,4,6,8]   if조건문에 해당하는 숫자만 뽑내서 리스트 생성
```



#### map 함수

* 리스트의 요소를 지정된 함수로 처리해주는 함수 
* list(map(함수, 리스트))

```python
a = [1.2, 2.3, 3.5, 4.8]
for i in range(len(a)):
  a[i] = int(a[i])
a

# [1, 2, 3, 4]
```

```python
# map함수 사용
a = [1.2, 2.3, 3.5, 4.8]
a = list(map(int, a))
a

# [1, 2, 3, 4]
```

* map(함수, input().split( ))
  * input().split() 은 str 을 list로 변환하기에 map 함수 적용 가능! 



___

### 2차원 리스트 (행렬 혹은 표 형태)

* 가로 X 세로 형태,  행(row) X 열(column)
* 리스트 = [[값, 값], [값,값], [값,값]]

  ```python
  a = [[10,20],[30,40],[50,60]]
  a
  
  # [[10,20],[30,40],[50,60]]
  ```

1. 요소에 접근하기
   * 리스트`세로인덱스` `[가로인덱스]`
   * 리스트`세로인덱스` `[가로인덱스]` = 값

    ```python
    a = [[10,20],[30,40],[50,60]]
    a[0][0]
    # 10
    a[1][1]
    # 40
    
    a[-1][-1]=100
    a
    a = [[10,20],[30,100],[50,60]]
    ```



2. for 반복문 사용하기

  ```python
  for row in a:
      print(row)
  ```

```
[0, 1, 2, 3]
[4, 5, 6, 7]
[8, 9, 10, 11]
[12, 13, 14, 15]
```

```python
# 2중 for 문

for row in a:
    for element in row:
        print(f'{element:2d} ', end='')
    print()
```

```
 0  1  2  3 
 4  5  6  7 
 8  9 10 11 
12 13 14 15 
```



3. 반복문 사용 

```python
number = [3, 1, 3, 2, 5]

b = []
for i in number:
    line = []
    for _ in range(i):
        line.append(0)
    b.append(line)

b

#[[0, 0, 0], [0], [0, 0, 0], [0, 0], [0, 0, 0, 0, 0]]
```



4. 리스트 표현식으로 2차원 리스트 만들기

```python
[[0] * i for i in number]

# [[0, 0, 0], [0], [0, 0, 0], [0, 0], [0, 0, 0, 0, 0]]
```

___

#### Tuple (튜플) 

*  <span style="color:blue">tuple= (value1, value2, value3...)</span>  또는 *값,값,값*
*  리스트와 매우 비슷함
   *  **순서가 있어서** 'index'접근 및 최대값을 찾을 수 있음 
*  <span style="color:red">immutable</span>  : 변경 불가능한 속성
   *  값을 변경 할 수 없다
   *  값의 추가, 순서 변경도 불가능 



#### 1. 튜플의 장점

 	1. 임시 변수로 활용  : 여러 변수에 값을 넣을 수 있다
     * ( x,  y ) = (2, 3)
     * 함수에서 여러 값을 반환 할 수 있음 
       * return(x, y)
       * tip : ( ) 를 사용하지 않고 " , " 를 사용하면 튜플로 인식! 
	2. 딕셔너리를 처리하는데 활용 
	3. 여러 값에 대한 비교 가능
    *  가장 왼쪽 값 부터 비교 

___

#### 참고자료

* [모두의파이썬](https://www.boostcourse.org/cs122/lecture/315107)

* [파이썬코딩도장](https://dojang.io/mod/page/view.php?id=2281)

  