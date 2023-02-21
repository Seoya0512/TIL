# Numpy

### Numpy 란?

* Numerical Python
* 파이썬의 고성능 과학 계산용 패키치
* Matrix 와 Vector와 같은 Array 연산의 사실상의 표준 

#### 특징

* 일반 List에 비해 빠르고, 메모리를 효율적으로 사용
* 반복문 없이 데이터 배열에 대한 처리를 지원함
* 선형대수와 관련된 다양한 기능을 제공함 
* C, C++, 포트란로 작성



### Ndarray(N-Dimensional Array)

* numpy 불러오기

  ```python
  import numpy as np

* Array 생성 

  ```python
  test_array = np.array([1,4,5,8], float)
  type(test_array[3])
  print(test_array.dtype)       # Array 전체의 데이터 타입을 반환함
  print(test_array.shape)       # Array의 shape(차원구성)을 반환함 
  ```

  * numpy는 np.array 함수를 활용하여 배열을 생성
  * numpy는 **하나의 데이터 타입** 만 배열에 넣을 수 있음 (❗️Dynamic typing[1,2,3,"5",4.2] not supported )



### Array shape

#### 1. Vector (1차원)

```python
test_array = np.array([1,4,5,8], float)

# shape은 (4,) : 1차원에 4개의 element가 있는 벡터
```



#### 2. Matrix (2차원, 행렬)

* 가로줄 :행 (row)
* 세로줄 : 열 (column)

```python
matrix=[[1,2,3,4,5], [2,3,4,9],[4,5,6,7]]
np.array(matrix, int).shape

# shape은 (3,4) : 행이 3개, 열이 4개인 매트릭스
```



#### 3. Tensor (3차원)

```python
d = np.array([[[1, 2, 3, 4],
               [5, 6, 7, 8],
               [9, 10, 11, 12]],
              [[11, 12, 13, 14],
               [15, 16, 17, 18],
               [19, 20, 21, 22]]])   # 2 x 3 x 4 array

np.array(d, int).shape

# shape은 (2,3,4): 평면이 2개, 행이 3개, 열이 4개
```



#### 4. ndim & size & shape 

* ndim 은 배열의 차원

* shape은 배열의 크기

* size 는 배열 속성의 개수 

  ```python
  # c = np.array([[0, 1, 2], [3, 4, 5]])
  print(c.ndim)
  print(c.shape)
  print(c.size)
  ```

  ```
  2				# 배열의 차원
  (2, 3)	# 배열의 크기 (2행 3열)
  24      # 속성의 개수 
  ```



#### 5. dtype

* sigle element가 가지는 데이터 타입

```python
np.array([[1,2,3], [4.5, '5','6']], dtype=np.float32)
```

```
array([[1. , 2. , 3. ],
       [4.5, 5. , 6. ]], dtype=float32)
```



#### 6. reshape

* Array의 shape 을 변경함 (element의 개수는 동일)
* **size가 동일**하면 다차원으로 자유로이 변형 가능

```python
test=np.array([[1,2,3,4,],[5,6,7,8]])
np.array(test).reshape(8,)
np.array(test).reshape(2,2,2)
```

```
array([1, 2, 3, 4, 5, 6, 7, 8])

array([[[1, 2],
        [3, 4]],

       [[5, 6],
        [7, 8]]])
```



#### 7. flatten

* 다차원 array를 1차원 array로 변환

  ```python
  d = np.array([[[1, 2, 3, 4],
                 [5, 6, 7, 8],
                 [9, 10, 11, 12]],
                [[11, 12, 13, 14],
                 [15, 16, 17, 18],
                 [19, 20, 21, 22]]])   # 2 x 3 x 4 array
  
  np.array(d).flatten()
  ```

  ```
  array([ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 11, 12, 13, 14, 15,
         16, 17, 18, 19, 20, 21, 22])
  ```

  



