# Numpy

___

### Creation Function

#### 1. arange

list의 range와 같은 효과 

```python
np.arange(10)
np.arange(0, 5, 0.5)	#floating point 도 표시 가능 
np.arange(0, 5, 0.5).tolist()	 # list로 만들 수 있음 

# array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
# array([0. , 0.5, 1. , 1.5, 2. , 2.5, 3. , 3.5, 4. , 4.5])
# [0.0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5]
```



#### 2. zeros, ones and empty

1. zeros : 모든 값이 0인 배열을 생성 

```python
np.zeros(10, dtype=np.int8)

# array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], dtype=int8)
```

2. ones: 모든 값이 1인 초기화된 배열을 생성 

```python
np.ones((2,5))

# array([[1., 1., 1., 1., 1.],
       #[1., 1., 1., 1., 1.]])
```

3. empty : shape만 주어지고 비어있는 ndarray생성



#### 3. Something like

1. ones_like : 기존 ndarray의 shape 크기 만큼 1 또는 empty array로 변환 
2. zeros_like : 기존 ndarray의 shape 크기 만큼 0 또는 empty array로 변환 

```python
np.ones_like(a, dtype='f')
np.zeros_like(a, dtype=f)

# array([[1., 1., 1.], 
			# [1., 1., 1.]], dtype=float32)
 
# array([[0., 0., 0.],
       # [0., 0., 0.]], dtype=float32)
  
```



#### 4. identity (단위 행렬 생성)

```python
np.identity(n=3, dtype=np.int8)     # n= number of row
```

```
array([[1, 0, 0],
       [0, 1, 0],
       [0, 0, 1]], dtype=int8)
```



#### 5. eye (대각선이 1인 행렬)

```python
np.eye(N=3, M=5, dtype=np.int8)
```

```
array([[1, 0, 0, 0, 0],
       [0, 1, 0, 0, 0],
       [0, 0, 1, 0, 0]], dtype=int8)
```



#### 6. diag (대각 행렬의 값을 추출)

```python
matrix = np.arange(9).reshape(3,3)
np.diag(matrix)

# array([0, 4, 8])
```



#### 7. linsapce, logspace 함수

* linspace : 설정한 범위에서 선헌형적으로 분할한 위치의 값을 출력
* logspace : 설정한 범위에서 로그로 분할한 위치의 값을 출력

```python
# linspace 
np.linspace(0,100,5)

# array([  0.,  25.,  50.,  75., 100.])
```

```python
# logspace
# log10(x1)=2, log10(x2)=4, log10(x3)=3

np.logspace(2,4,3)

# array([  100.,  1000., 10000.])
```



##### 참고자료

* [데이터사이언스스쿨](https://datascienceschool.net/01%20python/03.00%203%EC%9E%A5%20%EB%84%98%ED%8C%8C%EC%9D%B4%20%EB%B0%B0%EC%97%B4%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.html)

  