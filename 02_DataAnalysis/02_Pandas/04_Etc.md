# TIL for Pandas ➿

___

#### September, 2021🍂🍁



Date : Sep, 06, 2021 (Mon)

##### 1) DateFrame 문자열이 검색 문자열에 포함되어 있는지 확인 

```python
# str.contains()
# 지정한 문자열이 포함되어 있는지 확인하며, 포함된 경우 True 로 반환 
df.str.contains('찾을 문자열')

## 영문 대소문자 구분 없이 값을 찾아내기
## case = False 
df.str.contains('찾을 문자열', 'case=False')

### 여러개의 문자열을 찾을 함께 찾을 경우 : |
df.str.contains('스타벅스|STARBUCKS|스타박스', case=False)

#### NaN 데이터가 포함된 경우 : 그냥 돌리면 Error 발생함 
df.str.contains('스타벅스', na=False or na=True)
```



Date :  Sep, 07, 2021(Tues)

##### 1) tsv 파일 읽어오기

```python
# tsv 파일은 \t로 문장이 나눠져 있음

df = pd.read_csv(filename, sep='\t')
```



##### 2) 불필요한 행을 제외하고 데이터를 읽어오는 경우

```python
df = pd.read_csv(filename, skiprows= 행의 번호)
```



##### 3) 데이터프레임에서 '행의 이름을 재정의'

```python
# 첫 번째 행의 이름 재 정의 1 : rename 사용 
df.rename(columns = {old: new}, inplace=True)

# 첫 번째 행의 이름 재 정의 2 : 새로운 이름을 다시 입력 
df.columnds = ['A', 'B', 'C']
```



##### 4) 데이터의 타입을 '정수'로 변환 

```python
# DataFrame의 열데이터를 정수로 변환 : astype(int)
df['열 이름'] = df.열 이름.astype(int)

# 데이터프레임의 열 (예)55,600 에서 ',' 제거 후  정수로 변환 : lambda 함수 사용 
df['열 이름'] = df.['열 이름'].apply(lambda x :int(x.replace(',','')))
```



### 데이터 전처리 하면서 많이 사용한 문법 

___

Date :  Sep, 28, 2021(Mon)

##### 1) values.count()를 데이터프레임으로 만들기

​	- values.count()는 데이터프레임으로 만들 수 없음, Series로 실행됨 

```python
df.groupby('열이름')['열이름'].values_count().to_frame()
```



**2) 행,열 데이터 삭제하기**

```python
# 열데이터 삭제 
df.drop('열이름', axis =1)

# 행데이터 삭제 
df.drop('행이름/index', axis =0)
```



**3) 필요한 정보만 출력하기 (조건에 의한)**

```python
# 열이름 데이터 중에서 0이 아닌 값만 포함한다 

df = df[df.'열이름' != 0]
```



Date : Sep, 29, 2021(Tues)

**1) pd.concat 을 진행할 때, 기존의 index값은 무시하고 합치기 ** 

```python
pd.concat([df1, df2], ignore_index = True)
```



**2) index를 새로 정의할때 ** 

```python
df.set_index('정의할 열이름(key)', inplace=True)
```



**3) 행의 값을 더하는 방법 ** 

- 데이터프레임 마지막 "합계(행)"을 만들고 싶을때 사용함 ➕

```python
cols = ['상급종합병원', '종합병원', '병원', '의원']
df_local['총합'] = df_local[cols].sum(axis=1)
```



**4) csv, excel 등 파일로 저장할 때 'index' 포함하지 않기 **

```python
pd.to_csv('filename.csv', index=False)
```

