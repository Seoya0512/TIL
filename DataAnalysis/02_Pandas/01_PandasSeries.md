
#  Pandas 데이터 분석 (1)

____

### 판다스 패키지?

* 데이터 분석을 위한 사용이 쉽고 성능이 좋은 오픈소스 python 라이브러리
* 시계열(series) 또는 표(table) 데이터를 다루기 위해 **Series** 클래스와 **DataFrame**클래스를 제공

```python
import pandas as pd						# pandas 패키지는 pd라는 별칭으로 임포트하는 것이 관례
```



### Series 클래스

* Index 와 value로 이루어진 데이터타입
* Series 클래스는 넘파이의 array와 비슷하지만, 각 데이터(value)에 index를 붙일 수 있다.
* 동일한 데이터 타입의 값을 가진다.

> Series = value + index

![series](md-images/series-8694244.png)



### Series 생성

* 데이터를 리스트나 1차원 배열 형식으로 시리즈 클래스 생성자에 넣어주면 시리즈 클래스 객체를 만들 수 있다. 문자열 index값을 인덱스 라벨 (label)이라고도 한다. 
* index 길이 = 데이터의 길이

```python
s = pd.Series([9904312, 3448737, 2890451, 2466052],
              index=["서울", "부산", "인천", "대구"])
```

```
서울    9904312
부산    3448737
인천    2890451
대구    2466052
dtype: int64
```

```python
pd.Series(range(10,14))					
```

```
# value만 설정하면 index는 0부터 자동으로 설정

0    10
1    11
2    12
3    13						
dtype: int64
```



#### Series 속성 접근

```python
s.index							# index 속성 접근
```

``` python
s.values						# values 속성 접근
										# values 는 numpy array  값으로 묶여 있음
```

* 'name'속성을 이용하여 시리즈 데이터에 이름을 붙일 수 있다 

  ```python
  s.name= '인구'
  s.index.name='도시'
  s
  ```

  ```
  도시 👈index 시리즈의 이름
  서울    9904312
  부산    3448737
  인천    2890451
  대구    2466052
  Name: 인구, dtype: int64  👈 s 전체 시리즈의 이름 = 인구
  ```

  

### Series 연산

넘파이 배열처럼 시리즈도 벡터화 연산이 가능. 단, 인덱스에는 적용되지 않음

```python
s / 1000000
```

```
도시	👈 index에는 적용되지 않음
서울    9.904312
부산    3.448737
인천    2.890451
대구    2.466052
Name: 인구, dtype: float64
```



### Series 인덱싱(Indexing)

* 넘파이 배열에서 가능한 인덱스 방법 이외에도 인덱스 라벨을 이용한 인덱싱 가능

  * index가 숫자가 아닌 경우, Series.`index` 입력 가능 

  ```python
  s[1], s['부산']
  ```

  ```
  (3448737, 3448737)
  ```

* 부분적인 값을 가지는 시리즈 자료형 반환 , 순서를 바꾸거나 특정한 자료만 선택 (offset index )

  ```python
  s[[0, 3, 1,]], s[["서울", "대구", "부산"]]
  ```

  ```
  도시
  서울    9904312
  대구    2466052
  부산    3448737
  Name: 인구, dtype: int64
  ```

  ```python
  s[(250e4 < s) & (s < 500e4)]  # 인구가 250만 초과, 500만 미만인 경우
  ```

  ```
  도시
  부산    3448737
  인천    2890451
  Name: 인구, dtype: int64
  ```

* Slicing 도 가능, 부분적인 시리즈를 반환

  ```python
  s[1:3]								# 두번째(1)부터 세번째(2)까지 (네번째(3) 미포함)
  s["부산":"대구"]				# 부산에서 대구까지 (대구도 포함)
  ```

  ```
  도시
  부산    3448737
  인천    2890451
  Name: 인구, dtype: int64
  
  
  도시
  부산    3448737
  인천    2890451
  대구    2466052			👈 대구 포함!!! 
  Name: 인구, dtype: int64
  ```



### 시리즈 연산 

- 브로드캐스팅(broad casting)이 가능

  ```python
  s / 1000000
  ```

  ```
  ```

- 같은 index 끼리 연산 가능 

  

#### 데이터의 갱신, 추가, 삭제

인덱싱을 이용하면 데이터를 갱신(update)하거나 추가(add) 가능

```python
rs['부산'] =1.63					# 데이터 갱신(update)
rs
```

```
부산    1.630000
서울    2.832690
인천    9.818107
dtype: float64
```

```python
rs['대구'] =1.41 					# 데이터 추가
rs
```

```
부산    1.630000
서울    2.832690
인천    9.818107
대구    1.410000
dtype: float64
```

```python
del rs['서울']				# 데이터 삭제 명령어 = del
rs
```

```
부산    1.630000
인천    9.818107
대구    1.410000
dtype: float64
```



##### 참고자료

* [데이터사이언스스쿨](https://datascienceschool.net/01%20python/04.01%20%ED%8C%90%EB%8B%A4%EC%8A%A4%20%ED%8C%A8%ED%82%A4%EC%A7%80%EC%9D%98%20%EC%86%8C%EA%B0%9C.html)

* 사진  : [github](https://dandyrilla.github.io/2017-08-12/pandas-10min/)

