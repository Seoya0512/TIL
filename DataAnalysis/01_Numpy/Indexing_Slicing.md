# Numpy

### Indexing

1. 1차원 배열의 인덱싱 = 리스트의 인덱싱

   ```python
   a = np.array([0, 1, 2, 3, 4])
   a[2]
   ```

   ```
   2
   ```

   

2. 다 차원 배열에서는 '콤마(,)'를 사용한다.

   ```python
   a = np.array([[0, 1, 2], [3, 4, 5]])
   a[0,0] or a[0][0]
   a[0,1]
   
   # a[행, 열]
   # 결과값 : 0
   # 결과값 : 1
   ```

   

### Slicing

* 콤마(,)와 일반적 파이썬 슬라이싱을 함께 사용

* list와 달리 행과 열 부분을 나눠서 slicing 가능 

* Matrix 부분 집합을 추출할 때 유용

  ```python
  a = np.array([[0, 1, 2], [3, 4, 5]],int)
  a[0, :] # 첫번째 행 전체
  a[:, 1]	# 두번째 열 전체
  a[1:3]  # 1row~ 2row 전체, column 무시
  a[:, ::2]		# step도 가능 
  ```

  ```
  # 마지막 출력 값 
  array([[0, 2],
         [3, 5]])
  ```



___

### Boolean Indexing 

```python
test = np.array([1,4,0,2,3,8,7,9], float)
test > 3
test[test >3]

# array([False,  True, False, False, False,  True,  True,  True])
# array([4., 8., 7., 9.])   , True인 값만 반환
```



### Fancy Indexing (정수 배열 인덱싱)

```python
a = np.array([11, 22, 33, 44, 55, 66, 77, 88, 99])
idx = np.array([0, 2, 4, 6, 8])		# idx 배열의 값을 인덱스로 하여 a의 값을 추출
a[idx]

#array([11, 33, 55, 77, 99])
```



##### 참고자료

* [데이터사이언스스쿨](https://datascienceschool.net/01%20python/03.01%20%EB%84%98%ED%8C%8C%EC%9D%B4%20%EB%B0%B0%EC%97%B4.html)

  



