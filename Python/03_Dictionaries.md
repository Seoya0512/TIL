# 딕셔너리{Dictionaries}

___

1. Collection
   * 하나 이상의 여러 개의 정보를 저장할 때 사용함 
   * 리스트, 딕셔너리



### 딕셔너리(Dictionary)

* 순서가 없다 
* **{ key1 : value1, key2 : value2 } **
* key-value pair : key 와 value 는 1: 1 대응 
  * key 값이 중복이 되는 경우에는 '가장 뒤에 있는 '값만 사용 
  * 연관 배열(Associative Arrays)
    * 키 와 값이 연결된 개념 
    * 딕셔너리 : key 와 value
    * 리스트 : 위치 와 rkqt 
* 자료형 : value 값에는 데이터 타입과 관계없이 사용 가능하지마, key에서는 리스트와 딕셔너리를 사용할 수 없다



#### 1. 딕셔너리 생성 

* 빈 딕셔너리 만들기 
  * 딕셔너리 = dict( )
  * 딕셔너리 = { }

* dict( ) 로 딕셔너리 만들기 
  * dict(key=value, key1=value1)
  * dict(zip(key1,key2), (value1,value2))
  * dict((key1, key2), (value1,value2))
  * dict({key: value, key1:value1})



* **딕셔너리 표현식(Dictionary Comprehension)**
  * {키: 값 for 키, 값 in 딕셔너리}
  * dict({키: 값 for 키, 값 in 딕셔너리})
  * {키: 값 for 키, 값 in 딕셔너리 if 조건식}
  * dict({키: 값 for 키, 값 in 딕셔너리 if 조건식})

```python
# value 가 20인 값만 제외 하고 출력
x = {'a': 10, 'b': 20, 'c': 30, 'd': 40}
x = {key: value for key, value in x.items() if value != 20}
x
>>> {'a': 10, 'c': 30, 'd': 40}
```



#### 2. 딕셔너리의 키에 접근 및 값 할당

* 접근 : dictionary [key]
* 값 할당 
  * dictionary[key] = value
* key  값이 있는지 확인
  * key <span style="color:blue">in</span> dict :  True/ False 값으로 반환
  * key <span style="color:blue">not in</span> dict : True/ False 값으로 반환
* key 개수(길이) 구하기
  * <span style="color:blue">len</span>(dict)



#### 자주 사용하는 method

##### 1. 딕셔너리 값을 추가 및 수정하기

1. <span style="color:blue"> setdefault(key, value)</span> 

   * 딕셔너리에 key-value 값을 추가함, key 만 지정한 경우 'None'출력

   * 추가만 가능 

2. <span style="color:blue">update(key=value)</span>  

   * 존재하는 값은 수정

   * 존재하지 않는 key는 추가

   * key 값이 문자열일 때 사용가능 



##### 2. 딕셔너리에서 key-value 삭제

* pop(key) 
  * 특정 key-value를 삭제한 뒤 삭제한 값을 반환 
  * pop(key, value) : 해당 key가 없을때, 기본값을 반환 
* del[key]
* popitem( ) 
  *  마지막 키-값을 삭제
* clear( )
  * 모든 키-값을 비움, 삭제

#### 기억하면 좋은 method

 <span style="color:red">1. get(key, )</span> : 딕셔너리에 존재하는 키인지 아닌 지 여부에 따라 처리하는 메서드 

```python
# names 에 name이 존재하면, name에 대한 값을 출력하고
# 존재하지 않는 경우 0 값을 가진 데이터를 추가해라 

counts= dict()
names = ['james', 'emily','james','chris','kaye']
for name in names:
  counts[name]=get(name,0)+1
print(counts)

>> {'james':2, 'emily':1, 'chris:1','kaye=1'}
```



<span style="color:red">2.  zip( [key], [value])</span> : zip 함수를 사용하여 key리스트 와 value 리스트룰 묶어 딕셔너리를 생성 



##### 1. 딕셔너리에서 키- 값 모두(all) 가져오기 

1.  dict.items( )
   * key - value 값을 가져온다 

```python
# 값을 list[(tuple), (tuple)]로 반환

x = {'a': 10, 'b': 20, 'c': 30, 'd': 40}
x.items()

>>> dict_items([('a', 10), ('b', 20), ('c', 30), ('d', 40)])
```

```python
# for 반복문과 함께 사용한 예 
for key, value in x.items():
  print(key, value)

>>> 
a 10
b 20
c 30
d 40
```

1. dict.keys( ) 
   * 모든 key 값을 가져 온다
2. dict.values( )
   * 모든 value 값을 가져온다 

```python
x.keys()
>>>> dict_keys(['a', 'b', 'c', 'd'])

x.values()
>>> dict_values([10, 20, 30, 40])
```

```python
# for 반복문과 함께 사용한 예 
for key in x.keys():
  print(key, end=' ')

>>> a b c d

for value in x.values():
  print(value, end=' ')

>>> 10 20 30 40
```



##### 2. 리스트와 튜플로 딕셔너리 만들기

1. dict.fromkeys( [key])
   * Key 리스트로 딕셔너리를 생성하고 값은 모두 None
   * dict.fromkeys(keys, vlaue) : 값을 지정하면 해당 값이 키의 값

```python
# 딕셔너리 표현식에서의 사용 
key= ['a', 'b', 'c', 'd']
x = {key: value for key, value in dict.fromkeys(keys).items()}
x

>>> {'a': None, 'b': None, 'c': None, 'd': None}
```



❗️파이썬에서 자주 사용하는 딕셔너리 예제 

```python
# 텍스트 파일에서 데이터를 읽어와 가장 많이 나온 단어를 출력하는 프로그램 

name= input('Enter file: ')
handle = open(name)

counts=dict()
for line in handle:
  words = line.split()
  for word in words:
    count[word] = counts.get(word,0) +1

bigcount = None
bigword = None
for word,count is None or count > bigcount:
  bigword= = word
  bigcount = count

  print(bigword, bigcount)
```



____

#### 참고자료

* [모두의파이썬](https://www.boostcourse.org/cs122/lecture/315107)

* [파이썬코딩도장](