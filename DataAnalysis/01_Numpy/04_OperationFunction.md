# Numpy

___

### Operation function 

1. 차원 축소연산 : 최대최소/ 통계(sum, mean, median, std, var)/ 불리언 (all, any)
2. 기본적인 사칙 연산, 지수 함수, 로그 함수 등의 수학 함수도 연산 지원 

### sum

```python
test= np.arange(1,11)
test.sum(dtpye=np.float)

# 55.0
```



#### Axis

* 연산의 대상이 2차원 이상인 경우 기준이 되는 dimension 축
* 행 : axis = 0 
* 열 : axis =1 



#### Sorting (정렬)

1. sort : 배열 안의 원소를 크기에 따라 정렬하여 새로운 배열을 만들 수 있음

```python
a = np.array([[4,  3,  5,  7],
              [1, 12, 11,  9],
              [2, 15,  1, 14]])

np.sort(a)			# axis =1 또는 axis=-1과 동일
np.sort(a, axis=0) # 행을 기준으로 
a.sort(aixs=1)	# in-placae 메서드 
```

```
array([[ 3,  4,  5,  7],
       [ 1,  9, 11, 12],
       [ 1,  2, 14, 15]])

array([[ 1,  3,  1,  7],
       [ 2, 12,  5,  9],
       [ 4, 15, 11, 14]])
```

2. argsort : 순서만 알고 싶은 경우

```python
a= np.array([42,38,12,25])
np.argsort(a)

# array([2, 3, 1, 0])
```



#### Concatenate ( Numpy array를 합치는 함수, 연결하는 함수)

1. hstack : 행의 수가 같은 두 개 이상의 배열을 **옆으로** 연결 
2. vstack : 열의 수가 같은 두 개 이상의 배열을 **위아래** 로 연결

```python
a= np.array([[1,2], [3,4]] )
b= np.array([[5,6]])

np.vstack((a,b))
np.concatenate((a,b), axis=0)
```

```
array([[1, 2],
       [3, 4],
       [5, 6]])
```

```python
a= np.array([[1],[2],[3]])
b= np.array([[2],[3],[4]])

np.hstack((a,b))
np.concatenate((a,b), axis=1)
```

```
array([[1, 2],
       [2, 3],
       [3, 4]])
```



#### 전치 연산 (T)

2차원 배열의 전치연산은 행과 열을 바꾸는 작업 

```python
A= np.array([[1,2,3],[4,5,6]])
A.T
```

```
array([[1, 4],
       [2, 5],
       [3, 6]])
```



#### Dot Product (행렬 곱셈)

```python
a= np.arange(1,7).reshape(2,3)			# dot product 은 (n,m) * (m,i)= (n,i)
b= np.arange(7,13).reshape(3,2)
a.dot(b)
```

```
array([[ 58,  64],
       [139, 154]])
```



#### Broadcasting (shape이 다른 배열간 연산 지원)

크기가 작은 배열을 자동으로 반복 확장하여 크기각 큰 배열에 맞추는 방법 

```python
test= np.array([[1,2,3],[4,5,6]], float)
scalar= 3

test+scalar				# scalar를 test에 맞춰서 확장시킴
```

```
array([[4., 5., 6.],
       [7., 8., 9.]])
```

```python
# Matrix와 Vector간의 연산도 가능 
test_matrix= np.arange(1,13).reshape(4,3)
test_vector= np.arange(10,40,10)

test_matrix + test_vector
```

```
array([[11, 22, 33],
       [14, 25, 36],
       [17, 28, 39],
       [20, 31, 42]])
```



##### 참고자료 

* [데이터사이언스스쿨](https://datascienceschool.net/intro.html)





