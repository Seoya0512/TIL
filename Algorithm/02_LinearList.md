# 선형 리스트 (Linear List)

___

### 선형 리스트란?

* 데이터를 일정한 순서로 나열한 자료구조

* 순차 리스트(Ordered List)라고도 불림 

* 프로그래밍에서 배열(Array)데이터 타입으로 입력, 순서대로 저장하는 데이터 (연속된 메모리타입)

* **예시** 🍎🍐🍇🍑🥝

  | 사과 [0] | 배[1] | 포도 [3] | 복숭아 [4] | 키위 [5] |
  | -------- | ----- | -------- | ---------- | -------- |



#### 1) 배열을 이용한 선형 리스트 생성 함수

```python
#Code03-01.ipynb 참고 

fruits = [ ]						# 빈 배열 생성 

def add_data(fruit):
    fruits.append(None)			# 빈칸 생성, 데이터값 입력
    fLen = len(fruits)			# 전체 길이 파악 
    fruits[fLen]= fruit			# index = len()-1
```



#### 2) 선형 리스트의 데이터 삽입 함수

```python
#Code03-02.ipynb 참고 
fruits=[사과, 배, 포도, 복숭아, 자두 ]

def inser_data(position, friend):
  fruits.append(None)
  fLen = len(fruits)
  for i in range(fLen-1,position, -1):			# (마지막 자리, 지정자리, -1)
    fruits[i] = fruits[i-1]
    fruits[i-1]= None
  fruits[position] = fruit								# 지정한 위치에 친구 추가  
```



#### 3) 선형리스트의 데이터 삭제 함수

```python
#Code03-03.ipynb 참고 
fruits=[사과, 배, 포도, 복숭아, 자두 ]

def delete_data(position):
  fLen = len(fruits)					
  fruits[position] = None									# 지정위치 삭제
  
  for i in range(position+1, kLen, 1):
    fruits[i-1]= fruits[i]								# 삭제된 자리로 앞칸으로 이동
    fruits[i] = None											# 이동전에 있던 자리를 지움 
  del(fruits[fLen-1])							 				# 맨 마지막칸 삭제
```



___

#### 참고자료

1. [IT Cook Book, 파이썬 자료구조와 알고리즘 for Beginner](https://www.hanbit.co.kr/store/books/look.php?p_code=B4186876690)

   
   
   
   
   





