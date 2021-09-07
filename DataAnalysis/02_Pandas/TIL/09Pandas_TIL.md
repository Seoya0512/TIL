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







