# Numpy

___

### Comparison

### 1. Boolean 연산 

1. **all** : 배열의 모든 원소가 조건을 만족해야 True 
2. **any** : 배열 중 하나라도 조건에 만족하면 True 

```python
a= np.arange(10)

np.any(a>5)
# True
np.all(a>10)
# False
```

```python
# 배열의 크기가 동일할 때 원소간 비교 가능

a= np.array([1,2,3], float)
b= np.array([5,2,1], float)

a > b

# array([False, False,  True])
```



#### 2. Logical operation

```python
# and 조건
a= np.array([1,3,0], float)
b= np.logical_and(a>0, a<3)
np.logical_not(b)								# 반대조건 

# array([ True, False, False])
# array([False,  True,  True])
```

```python
# or 조건
a= np.array([1,3,0], float)
np.logical_or(a>0, a<3)

# array([ True,  True,  True])
```

```python
# where(condition, True, False), 조건에 맞게 값을 변경
# where(condition), index 값만 반환

np.where(a>0, 3,2)
np.where(a>0)

# array([3, 3, 2])
# (array([0, 1]),)
```

```python
# argmax : array내 최대값의 index를 리턴 
# argmin : array내 최소값의 index를 리턴

x = np.array([1, 3, 2])
x.argmin(), x.argmax()

#(0,1)

```



