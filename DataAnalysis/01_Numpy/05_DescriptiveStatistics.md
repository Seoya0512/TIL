# Numpy

___

### 기술 통계 (descriptive statistics)



* 데이터의 개수(count) : len ( )
* 표본 평균 : np.mean( )
* 표본 분산 
  * 분산 : np.var( ) 
  * 표본 분산 : np.var(  , ddof=1)
* 표본 표준편차 : np.std()
* 최대값, 최소값 
  * np.max( )
  * np.min( )
* 중앙값 : np.median( )
* 사분위수 (quartile)
  * 최소 값 : np.percentile(x, 0)
  * 1 사분위 수: np.percentile(x, 25)
  * 2사분위 수: np.percentile (x, 50)
  * 3사분위 수: np.percentile(x, 75)
  * 최대값 : np.percentile(x, 100)



### Random 함수

1. seed : 랜덤값의 설정값 
2. rand: 균등 분포로 랜덤한 값 생성 (뽑힐 확률이 균등하다)
3. randn : 정규분포로 난수를 발생 (0과 가까운 숫자가 뽑힐 확률이 높아진다)
4. randint : 균등분포로 정수값을 발생 
5. shuffle :  행렬 데이터를 섞어준다 
6. choice : 특정 확률로 데이터를 선택

```python
np.random.seed(1)
result1= np.random.randint(10,100,10)

np.random.rand(10)
np.random.randn(10)
```

```python
# shuffle 

r= np.random.randint(1,10,(3,4))

np.random.shuffle(r)
r
```

```
array([[6, 3, 7, 7],
       [1, 3, 8, 2],
       [1, 4, 3, 5]])
```

```python
# choice (size, n개출력, 확률)
np.random.choice(5, 10, p=[0.1,0.2,0.4,0.3,0])

# array([1, 3, 1, 2, 2, 2, 2, 2, 1, 1])
```

