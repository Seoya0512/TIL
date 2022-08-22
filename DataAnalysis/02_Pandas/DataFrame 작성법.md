

groupby : 데이터를 그룹 별로 분류하는 역할 

그룹 연산 메서드

* agg 
  * 원하는 연산이 없을 경우 함수를 만들고 이 함수를 agg에 전달
  * (자주 사용!!) 여러가지 그룹연산을 동시에 하고 싶은 경우 '함수 이름 문자열의' **리스트** 를 전달





DataFrame에서 행을 제거할때 사용 

* df. drop(index = ' 인덱스명 혹은 번호')

  

DataFrame의 기존의 행 인덱스를 제거하고, **데이터 열 중 하나**를 인덱스로 설정

* df. set_index('열 이름')



Pandas에서 txt 파일을 읽어오는 경우

```python
df = pd.read_csv(filename, sep='\t')
```



데이터를 정렬하는 방법 

* df. sort_index( ) : 인덱스를 기준으로 데이터 정렬
* df.sort_values( ) : 열(column)값을 기준으로 데이터를 정렬 

```python
df.sort_index()

df.sort_values(by='')			# 기본은 오름차순
df.sort_values(by='', ascending=False)		# 내림차순 정렬

df.sort_values(by=['',''])		# 여러개의 열(column)으로 정렬하고 싶을 때
```



데이터 구간별 범주화

* **pd.cut('범주화할 데이터', 'bins(범주를 구분하는 기준)', 'labels(구분한 범주의 라벨)')**
  
  * 데이터 값들을 특정 구간에 따라서 범주화 할 때 사용
  * 범주를 나누고 라벨(labels)을 붙여서 범주형 데이터로 변환 가능
  * 연속 데이터를 구간별로 범주화 하는 함수
  * right= False : a <= label < c 
  * right= True :  a < label <= c